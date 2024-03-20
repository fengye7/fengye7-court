import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer"; // 使用 ES6 import 语法 使用puppeteer用作脚本操作
import NewsItem from "./interface/model"; // 确保引入正确的模型文件路径

async function scrapeNews(): Promise<NewsItem[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto("https://www.epochtimes.com/gb/nsc413.htm", {
      waitUntil: "domcontentloaded",
    }); // 等待页面DOM内容加载完成

    // 等待一段时间（例如2秒）以确保页面上的内容已完全加载和渲染
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("开始测试A");
    console.log(page);
    // 等待特定元素出现
    await page.waitForSelector(".one_post");

    const newsData = await page.evaluate(() => {
      console.log("开始测试B");
      const newsItems = document.querySelectorAll(".one_post");
      const news: NewsItem[] = [];
      newsItems.forEach((item: Element) => {
        const titleElement = item.querySelector(".title");
        const descriptionElement = item.querySelector(".excerpt");
        const imageElement = item.querySelector(".img");

        // 使用类型断言确保选择器一定会返回一个具有 innerText 属性的元素
        const title = titleElement
          ? (titleElement as HTMLElement).innerText
          : "";
        const description = descriptionElement
          ? (descriptionElement as HTMLElement).innerText
          : "";
        let imageUrl = "";
        let itUrl = "";

        // 检查是否找到了.img元素
        if (imageElement) {
          // 获取.img元素的子元素<img>标签
          const imgTag = imageElement.querySelector("img");
          // 爬取src属性
          imageUrl = imgTag ? imgTag.getAttribute("src") || "" : "";
          // 爬取href属性
          const aTag = imageElement.querySelector("a");
          itUrl = aTag ? aTag.getAttribute("href") || "" : "";
        }

        news.push({ title, description, imageUrl, itUrl });
      });
      return news;
    });

    return newsData;
  } catch (error) {
    console.error("Error scraping news:", error);
    return []; // 返回空数组表示获取信息失败
  } finally {
    await browser.close(); // 确保关闭浏览器
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newsData = await scrapeNews();
    res.json(newsData);
  } catch (error) {
    console.error("Error scraping news:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

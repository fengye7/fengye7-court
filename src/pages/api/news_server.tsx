import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer"; // 使用 ES6 import 语法 使用puppeteer用作脚本操作
import NewsItem from "./interface/model"; // 确保引入正确的模型文件路径

async function scrapeNews(): Promise<NewsItem[]> {
  // const browser = await puppeteer.launch({ // 这里可以使用代理服务器，下面爬虫的网址需要VPN
  //   args: ['--proxy-server=http://your-proxy-server-ip:port']
  // });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto("https://www.epochtimes.com/gb/nsc413.htm", {
      waitUntil: "domcontentloaded",
    });

    // 等待特定元素出现
    await page.waitForSelector(".pagination");

    const newsData = await page.evaluate(() => {
      const newsItems = document.querySelectorAll(".one_post");
      const news: NewsItem[] = [];
      newsItems.forEach((item: Element) => {
        const titleElement = item.querySelector(".title");
        const descriptionElement = item.querySelector(".excerpt");
        const imageElement = item.querySelector(".img");
        const dateElement = item.querySelector(".date");
        const pageViewElement = item.querySelector(".pageview");

        // 使用类型断言确保选择器一定会返回一个具有 innerText 属性的元素
        const title = titleElement
          ? (titleElement as HTMLElement).innerText
          : "";
        const description = descriptionElement
          ? (descriptionElement as HTMLElement).innerText
          : "";
        let imageUrl = "";
        let itUrl = "";
        const date = dateElement ? (dateElement as HTMLElement).innerText : "";
        const pageView = pageViewElement
          ? (pageViewElement as HTMLElement).innerText
          : "";

        // 检查是否找到了.img元素
        if (imageElement) {
          // 获取.img元素的子元素<img>标签
          const imgTag = imageElement.querySelector("img");
          // 爬取src属性
          imageUrl = imgTag ? imgTag.getAttribute("data-src") || "/imgs/default/df-img.png" : ""; // getAttribute("src")图片有问题，猜想是渲染在客户端上后属性名变化
          // 爬取href属性
          const aTag = imageElement.querySelector("a");
          itUrl = aTag ? aTag.getAttribute("href") || "" : "";
        }
        
        news.push({ title, description, imageUrl, itUrl, date, pageView });
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

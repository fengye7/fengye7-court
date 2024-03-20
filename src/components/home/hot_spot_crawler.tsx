"use client"; // 表示该文件在客户端中使用

import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./list_item";
import NewsItem from "@/pages/api/interface/model";
import InfiniteScroll from "react-infinite-scroll-component"; //react的滚动组件

const HotNews = () => {
  // 处理新闻
  const [newsData, setNewsData] = useState([] as NewsItem[]); // 设置初始状态为一个空的 NewsItem 数组
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`/api/news_server?page=${page}`);
      const newData = response.data;
      setNewsData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  // 处理tab页
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <style>
        {`
          .tab-div {
          position: fixed;
          top: 6.5%;
          left: 10%;
          width: 90%;
          height: 80%;
          background-color: rgba(50, 100, 150, 0.5);
          z-index: 10000;
          }
        `}
      </style>
      <div className="tab-div">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "News" ? "active" : ""}`}
              id="News-tab"
              data-bs-toggle="tab"
              data-bs-target="#News"
              type="button"
              role="tab"
              aria-controls="News"
              aria-selected={activeTab === "News"}
              onClick={() => handleTabChange("News")}
            >
              News
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "News" ? "show active" : ""
            }`}
            id="News"
            role="tabpanel"
            aria-labelledby="News-tab"
          >
            <InfiniteScroll
              dataLength={newsData.length}
              next={fetchNewsData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={<p>No more news</p>}
            >
              <ul>
                {newsData.map((item, index) => (
                  <li key={index}>
                    <ListItem
                      imageUrl={item.imageUrl}
                      title={item.title}
                      description={item.description}
                      itUrl={item.itUrl}
                    />
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotNews;

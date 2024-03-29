"use client"; // 表示该文件在客户端中使用

import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./list_item";
import NewsItem from "@/pages/api/interface/model";
import InfiniteScroll from "react-infinite-scroll-component"; //react的滚动组件
import VideoPlayerPage from "./video_tab_page";
import MusicPage from "./music_closet";

const TabView = () => {
  // 处理新闻
  const [newsData, setNewsData] = useState([] as NewsItem[]); // 设置初始状态为一个空的 NewsItem 数组
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`/api/news_server`);
      const newData = response.data;
      setNewsData(newData);
      if (newData.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  // 处理tab页
  const [activeTab, setActiveTab] = useState("News");

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
          
          .tab-content {
            height: 100%; /* 使用父容器的高度 */
          }
          
          .tab-pane {
            height: 100%; /* 使用父容器的高度 */
            overflow-y: auto; /* 添加滚动条 */
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
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "Videos" ? "active" : ""}`}
              id="Videos-tab"
              data-bs-toggle="tab"
              data-bs-target="#Videos"
              type="button"
              role="tab"
              aria-controls="Videos"
              aria-selected={activeTab === "Videos"}
              onClick={() => handleTabChange("Videos")}
            >
              Videos
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "MusicCloset" ? "active" : ""}`}
              id="MusicCloset-tab"
              data-bs-toggle="tab"
              data-bs-target="#MusicCloset"
              type="button"
              role="tab"
              aria-controls="MusicCloset"
              aria-selected={activeTab === "MusicCloset"}
              onClick={() => handleTabChange("MusicCloset")}
            >
              MusicCloset
            </button>
          </li>
        </ul>
        
        {/* 下面是tab页面
        新闻列表：来自大纪元大陆新闻网 https://www.epochtimes.com/gb/nsc413.htm */}
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
                      date={item.date}
                      pageView={item.pageView}
                    />
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          </div>
          {/* 视频tab页面 */}
          <div
            className={`tab-pane fade ${
              activeTab === "Videos" ? "show active" : ""
            }`}
            id="Videos"
            role="tabpanel"
            aria-labelledby="Videos-tab"
          >
            <VideoPlayerPage/>
          </div>
          {/*下面是音乐壁橱*/}
          <div
            className={`tab-pane fade ${
              activeTab === "MusicCloset" ? "show active" : ""
            }`}
            id="MusicCloset"
            role="tabpanel"
            aria-labelledby="MusicCloset-tab"
          >
            <MusicPage/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabView;

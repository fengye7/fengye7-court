"use client"; // 表示该文件在客户端中使用

import React, { useEffect, useState } from "react";
import axios from "axios";

const HotNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get("<your_api_endpoint>"); // 替换为你的爬虫结果 API 端点
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  return (
    <>
      <head>
        <style>
            {`
              .hot-news {
              position: fixed;
              top: 6.5%;
              left: 10%;
              width: 90%;
              height: 80%;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 10000;
              }
            `}
        </style>
      </head>
      <div className="hot-news">
        <h2>多个标签页</h2>
        <ul className="nav nav-tabs">
          {newsData.map((category, index) => (
            <li key={index} className="nav-item">
              <a
                className={`nav-link ${index === 0 ? "active" : ""}`}
                data-bs-toggle="tab"
                href={`#tab-${index}`}
              ></a>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {newsData.map((category, index) => (
            <div
              key={index}
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`tab-${index}`}
            >
              <ul className="list-group mt-3">
                {/* {category.items.map((newsItem, itemIndex) => (
              <li key={itemIndex} className="list-group-item d-flex">
                <img src={newsItem.image} alt={newsItem.title} className="me-3" style={{ maxWidth: '100px' }} />
                <div>
                  <h4>{newsItem.title}</h4>
                  <p>{newsItem.description}</p>
                </div>
              </li>
            ))} */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotNews;

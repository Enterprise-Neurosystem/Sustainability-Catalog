"use client";

import React from "react";
import { Time } from "@carbon/icons-react";

interface News {
  title: string;
  url: string;
  date: string;
  tag: string;
  author: string;
  timeReq: string;
}

interface NewsFeedProps {
  news: News[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index} className="news-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h3 className="news-title">{item.title}</h3>
            </a>
            <h5 className="news-meta">
              <span className="date-author">
                {item.date} | By {item.author}
              </span>
              <span className="time-tag">
                <Time size={16} aria-label="Time icon" style={{display:"-webkit-inline-box"}} /> {item.timeReq} |{" "}
                <div className="news-tag">{item.tag}</div>
              </span>
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;

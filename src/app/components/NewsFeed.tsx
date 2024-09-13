"use client";

import React from "react";

const NewsFeed: React.FC = () => {
  const newsItems = [
    { id: 1, title: "News 1", description: "Description of news 1" },
    { id: 2, title: "News 2", description: "Description of news 2" },
    { id: 3, title: "News 3", description: "Description of news 3" },
  ];

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <ul>
        {newsItems.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;

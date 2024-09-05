'use client';

import React from 'react';

export interface SDG {
  number: number;
  name: string;
}

export interface Tool {
  name: string;
  description: string;
  url: string;
  date: string; // Ensure date is a string
  category?: string;
  subcategory?: string;
  subsubcategory?: string;
  sdgs?: SDG[];
}

export interface Tools {
  tools: Tool[];
}

const AITools: React.FC<Tools> = ({ tools }) => {
  return (
    <div className="space-y-4">
      {tools.map((tool, index) => (
        <div key={index} className="border rounded p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold">{tool.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
          <p className="text-sm text-gray-500 mb-2">Date: {new Date(tool.date).toLocaleDateString()}</p>
          <div className="flex flex-wrap items-center mb-2">
            {tool.category && (
              <div className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {tool.category}
              </div>
            )}
            {tool.subcategory && (
              <div className="bg-gray-300 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {tool.subcategory}
              </div>
            )}
            {tool.subsubcategory && (
              <div className="bg-gray-400 text-gray-800 rounded px-3 py-1 text-xs mb-1">
                {tool.subsubcategory}
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center mb-2">
            {tool.sdgs && tool.sdgs.map((sdg, sdgIndex) => (
              <div key={sdgIndex} className="bg-blue-100 text-blue-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                SDG {sdg.number}: {sdg.name}
              </div>
            ))}
          </div>
          <a 
            href={tool.url} 
            className="text-blue-600 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Tool
          </a>
        </div>
      ))}
    </div>
  );
};

export default AITools;

'use client';

import React from 'react';

export interface Dataset {
  name: string;
  description: string;
  url: string;
  date: string;
  category?: string;
  subcategory?: string;
  subsubcategory?: string;
}

export interface Datasets {
  datasets: Dataset[];
}

const DataSources: React.FC<Datasets> = ({ datasets }) => {
  return (
    <div className="space-y-4">
      {datasets.map((dataset, index) => (
        <div key={index} className="border rounded p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold">{dataset.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{dataset.description}</p>
          <div className="flex flex-wrap items-center mb-2">
            {dataset.category && (
              <div className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {dataset.category}
              </div>
            )}
            {dataset.subcategory && (
              <div className="bg-gray-300 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {dataset.subcategory}
              </div>
            )}
            {dataset.subsubcategory && (
              <div className="bg-gray-400 text-gray-800 rounded px-3 py-1 text-xs mb-1">
                {dataset.subsubcategory}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2">Date: {new Date(dataset.date).toLocaleDateString()}</p>
          <a href={dataset.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            View Dataset
          </a>
        </div>
      ))}
    </div>
  );
}

export default DataSources;

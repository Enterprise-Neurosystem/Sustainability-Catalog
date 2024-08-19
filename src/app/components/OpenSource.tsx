// src/app/DataSources.tsx
'use client';

import React from 'react';

interface Dataset {
  name: string;
  description: string;
  url: string;
}

interface Props {
  datasets: Dataset[];
}

const DataSources: React.FC<Props> = ({ datasets }) => {
  return (
    <div className="space-y-4">
      {datasets.map((dataset, index) => (
        <div key={index} className="border rounded p-4 bg-white">
          <h2 className="text-lg font-semibold">{dataset.name}</h2>
          <p className="text-sm text-gray-600">{dataset.description}</p>
          <a href={dataset.url} className="text-blue-600 hover:underline">
            View Dataset
          </a>
        </div>
      ))}
    </div>
  );
}

export default DataSources;

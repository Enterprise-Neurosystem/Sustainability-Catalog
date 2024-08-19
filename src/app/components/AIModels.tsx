// src/app/AIModels.tsx
import React from 'react';

export interface Model {
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  subsubcategory?: string;
  publication: string;
  year: number;
  resource?: {
    paper?: string;
    code?: string;
  };
}

export interface Models {
  models: Model[];
}

const AIModels: React.FC<Models> = ({ models }) => {
  return (
    <div className="space-y-4">
      {models.map((model, index) => (
        <div key={index} className="border rounded p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold">{model.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{model.description}</p>
          <div className="flex flex-wrap items-center mb-2">
            <div className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
              {model.category}
            </div>
            {model.subcategory && (
              <div className="bg-gray-300 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {model.subcategory}
              </div>
            )}
            {model.subsubcategory && (
              <div className="bg-gray-400 text-gray-800 rounded px-3 py-1 text-xs mb-1">
                {model.subsubcategory}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2">Publication: {model.publication}</p>
          <p className="text-sm text-gray-500 mb-2">Year: {model.year}</p>
          <div className="space-x-2">
            {model.resource?.paper && (
              <a 
                href={model.resource.paper} 
                className="text-blue-600 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            )}
            {model.resource?.code && (
              <a 
                href={model.resource.code} 
                className="text-blue-600 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AIModels;

'use client';
import React from 'react';

export interface Publication {
  title: string;
  venue: string;
  year: number;
  resource: {
    paper?: string;
    code?: string;
  };
  category?: string;
  subcategory?: string;
  subsubcategory?: string;
}

export interface PublicationsData {
  publications: Publication[];
}

const Publications: React.FC<PublicationsData> = ({ publications }) => {
  return (
    <div className="space-y-4">
      {publications.map((publication, index) => (
        <div key={index} className="border rounded p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold">{publication.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{publication.venue}</p>
          <p className="text-sm text-gray-600 mb-2">Year: {publication.year}</p>
          <div className="flex flex-wrap items-center mb-2">
            {publication.category && (
              <div className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {publication.category}
              </div>
            )}
            {publication.subcategory && (
              <div className="bg-gray-300 text-gray-800 rounded px-3 py-1 text-xs mr-2 mb-1">
                {publication.subcategory}
              </div>
            )}
            {publication.subsubcategory && (
              <div className="bg-gray-400 text-gray-800 rounded px-3 py-1 text-xs mb-1">
                {publication.subsubcategory}
              </div>
            )}
          </div>
          <div className="mt-2">
            {publication.resource.paper && (
              <a 
                href={publication.resource.paper} 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            )}
            {publication.resource.code && (
              <a 
                href={publication.resource.code} 
                className="text-blue-600 hover:underline ml-4" 
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

export default Publications;

// src/components/Footer.tsx
'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 AI Sustainability Catalog</p>
            <p>
              <a href="/about" className="text-white hover:underline">
                About Us
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="/privacy" className="text-white hover:underline">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="/terms" className="text-white hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

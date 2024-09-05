// src/components/Footer.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 AI Sustainability Catalog</p>
            <p>
              <Link href="/about" className="text-white hover:underline">
                  <a>About Us</a>
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link href="/privacy" className="text-white hover:underline">
                  <a>Privacy Policy</a>
              </Link>
            </p>
            <p>
              <Link href="/terms" className="text-white hover:underline">
                  <a>Terms of Service</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

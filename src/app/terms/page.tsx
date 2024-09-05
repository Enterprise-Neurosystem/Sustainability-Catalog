'use client';
import React from 'react';
import Link from "next/link";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
      <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">Privacy Policy</h2>
          <WrenchScrewdriverIcon className="w-10 text-gray-400" />
          <div className="content-text">
              <p>Page under construction.</p>
          </div>
          <Link href="/" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
              Home
          </Link>
      </main>
  );
}
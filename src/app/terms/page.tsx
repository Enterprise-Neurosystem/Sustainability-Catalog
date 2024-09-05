'use client';
import React from 'react';
import Link from "next/link";
import { Construction } from  '@carbon/icons-react';

export default function Page() {
  return (
      <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">Terms of Service</h2>
          <Construction className="w-screen h-16 text-orange-600" />
          <div className="content-text" >
              <p>Page under construction.</p>
          </div>
          <Link href="/" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
              Home
          </Link>
      </main>
  );
}

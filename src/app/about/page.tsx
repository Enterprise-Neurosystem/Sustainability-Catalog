'use client';
import React from 'react';
import Link from 'next/link';


export default function Page() {

  return (
      <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">About Us</h2>
          <div className="content-text">
              <p>
                  AI Application Hub serves as a knowledge catalog with the theme AI for climate action and is built to bring the Subject matter experts in this field together in one
                  place. This is place where experts can come to gather information as well as contribute to the hub based on their expertise on climate action and AI. The site has been categorized based on our community input into Data Sources, AI Models,
                  Publications and AI Tools.  The site also provides a search capability for each of the sections.
              </p>
              <p>
                  To add your content into this website submit a PR with specifying the following information to
                  our AI Sustainability Hub Git repo in {' '}
                  <a href="https://github.com/Enterprise-Neurosystem/Sustainability-Catalog" className="text-blue-600 hover:underline">ENG Git Hub</a>.
                  <br />
                  <br />
                  <ul style={{ listStyleType: 'disc', color: 'black', paddingLeft: '30px' }} >
                    <li><strong>Title</strong>: &quot;Name of the artifact&quot;</li>
                    <li><strong>Type</strong>: &quot;Type of the artifact i.e., Data Source, AI Model, Publication, AI Tool&quot;</li>
                    <li><strong>Category</strong>: &quot;Classification type of the artifact&quot;</li>
                    <li><strong>Link</strong>: &quot;Link to the source i.e. dataset, paper or tool&quot;</li>
                  </ul>
              <br />
                  Alternatively, send an email with your contributions to {' '}
                  <a href= "mailto: support1" className="text-blue-600 hover:underline">sheeba@us.ibm.com</a>, {' '}
                  <a href= "mailto: support2" className="text-blue-600 hover:underline">abhay.ratnaparkhi1@ibm.com</a>, {' '}
                  <a href= "mailto: support3" className="text-blue-600 hover:underline">anindita.das@ibm.com</a>.
              <br />
              <br />
                 
              </p>
          </div>
          <Link legacyBehavior href="/" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
              Home
          </Link>
      </main>
  );
}

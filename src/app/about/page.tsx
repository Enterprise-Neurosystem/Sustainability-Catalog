'use client';
import React from 'react';
import Link from 'next/link';


export default function Page() {

  return (
      <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">About Us</h2>
          <div className="content-text">
              <p>
                  AI Application Hub serves as a knowledge catalog with the theme AI for climate action and is built to bring Subject matter experts in this field in one
                  place. This is the place where climate and AI experts come together to gather information as well as contribute (giveback) to the hub. 
              </p>
              <p>
                  You can contribute to the contents of this website by submitting a Pull Request (PR) specifying the following information to
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
                  <a href= "mailto: sheeba@us.ibm.com" className="text-blue-600 hover:underline">en_support1</a>, {' '}
                  <a href= "mailto: abhay.ratnaparkhi1@ibm.com" className="text-blue-600 hover:underline">en_support2</a>, {' '}
                  <a href= "mailto: anindita.das@ibm.com" className="text-blue-600 hover:underline">en_support3</a>.
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

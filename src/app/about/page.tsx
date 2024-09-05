'use client';
import React from 'react';
import Link from 'next/link';


export default function Page() {

// Acknowledgement - All of this started with ENG CTO, Dinesh Verma’s vision for a comprehensive Data Catalog for Enterprise Neurosystems and evolved into current form with dedicated work from the Hub team (Sheeba Prakash, Abhay Ratnaparkhi and Anindita Das). Lot of volunteer hours and multiple iterations have gone into this to make our AI Sustainability Hub a reality. The team is grateful for the opportunity and support from ENG (Dinesh Verma, Bill Wright, John Overton & others) and we look forward to more collaborations.</p>;
//

  return (
      <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">About Us</h2>
          <div className="content-text">
              <p>
                  AI Application Hub serves as a knowledge catalog with the theme AI for climate and
                  sustainability and is built to bring the Subject matter experts in this field together in one
                  place. The site has been categorized based on our community input into Data Sources, AI Models,
                  Publications and AI Tools.  The site also provides a search capability for each of the sections.
              </p>
              <p>
                  To add your content into this website submit a PR with specifying the following information to
                  our AI Sustainability Hub Git repo in {' '}
                  <a href="https://github.com/Enterprise-Neurosystem/Sustainability-Catalog" className="text-blue-600 hover:underline">ENG Git Hub</a>.
              </p>
              <p>
                  <strong>Title</strong>: &quot;Name of the artifact&quot;<br />
                  <strong>Type</strong>: &quot;Type of the artifact i.e., Data Source, AI Model, Publication, AI Tool&quot;<br />
                  <strong>Category</strong>: &quot;Classification type of the artifact&quot;<br />
                  <strong>Link</strong>: &quot;Link to the source i.e. dataset, paper or tool&quot;
              </p>
              <p>
                  Alternatively, send an email with your contributions to {' '}
                  <a href= "mailto: sheeba@us.ibm.com" className="text-blue-600 hover:underline">sheeba@us.ibm.com</a>, {' '}
                  <a href= "mailto: abhay.ratnaparkhi1@ibm.com" className="text-blue-600 hover:underline">abhay.ratnaparkhi1@ibm.com</a>, {' '}
                  <a href= "mailto: anindita.das@ibm.com" className="text-blue-600 hover:underline">anindita.das@ibm.com</a>.
              </p>
              <br />
              <p>
                  <strong>Acknowledgement</strong>: All of this started with ENG CTO, Dinesh Verma’s vision for a comprehensive Data
                  Catalog for Enterprise Neurosystems and evolved into current form with dedicated work from the Hub team (Sheeba
                  Prakash, Abhay Ratnaparkhi and Anindita Das). Lot of volunteer hours and multiple iterations have gone into this to
                  make our AI Application Hub a reality. The team is grateful for the opportunity and support from ENG (Dinesh Verma,
                  Bill Wright, John Overton & others) and we look forward to more collaborations.
              </p>
          </div>
          <Link legacyBehavior href="/" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
              Home
          </Link>
      </main>
  );
}

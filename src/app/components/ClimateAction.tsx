'use client';

import React from 'react';
import { Construction } from  '@carbon/icons-react';

const ClimateAction: React.FC = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
          <Construction className="w-screen h-16 text-orange-600" />
          <div className="content-text" >
              <p>Page under construction.</p>
          </div>

      </main>
  );
};

export default ClimateAction;

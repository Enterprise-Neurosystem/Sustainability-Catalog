'use client';

import React from 'react';
import { Construction } from  '@carbon/icons-react';

const ClimateAction: React.FC = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">Climate Action</h2>
          <div className="content-text">
              <p>
                  This tab will host categories for Climate Action . This is being developed in
                  partnership with the Technology Executive Committee {' '}
                  <a href="https://unfccc.int/ttclear/tec/" className="text-blue-600 hover:underline">(TEC)</a>
                  of the United Nations Framework Convention in support of the UNFCCC Technology Mechanism Initiative
                  on Artificial Intelligence for Climate Action {' '}
                  <a href="https://unfccc.int/ttclear/artificial_intelligence" className="text-blue-600 hover:underline">(#AI4ClimateAction)</a>.
              <br />
              <br />
                  More details about Climate Action SDG (Sustainable Development Goal) is available in this link: {' '}
                  <a href="https://sdgs.un.org/goals/goal13" className="text-blue-600 hover:underline">https://sdgs.un.org/goals/goal13</a>.
              </p>
          </div>
      </main>
  );
};

export default ClimateAction;

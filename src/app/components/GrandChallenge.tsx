'use client';

import React from 'react';
import { Construction } from  '@carbon/icons-react';
import Link from "next/link";

const GrandChallenge: React.FC = () => {
  return (
     <main className="flex h-full flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-semibold content-column">AI Innovation Grand Challenge</h2>
          <div className="content-text">
              <p>
                  Launched at the United Nations Climate Change Conference in Dubai in December 2023 {' '}
                  <a href="https://unfccc.int/news/challenge-launched-at-cop28-to-harness-artificial-intelligence-for-climate-action-in-developing" className="text-blue-600 hover:underline">(COP 28)</a>,
                  the AI Innovation Grand Challenge is a global open-source AI competition. Hosted by the  {' '}
                  <a href="https://www.enterpriseneurosystem.org/" className="text-blue-600 hover:underline">Enterprise Neurosystem</a>
                  in partnership with the Technology Executive Committee {' '}
                  <a href="https://unfccc.int/ttclear/tec/" className="text-blue-600 hover:underline">(TEC)</a>
                  of the United Nations Framework Convention on Climate Change (UNFCCC) in support of the
                  UNFCCC Technology Mechanism Initiative on Artificial Intelligence for Climate Action {' '}
                  <a href="https://unfccc.int/ttclear/artificial_intelligence" className="text-blue-600 hover:underline">(#AI4ClimateAction)</a>,
                  the contest aims to:
              {/*</p>*/}
              {/*<p>*/}
                  <br />
                  <br />
                  <ul style={{ listStyleType: 'disc', color: 'black', paddingLeft: '30px' }} >
                      <li><strong>Identify #AI4ClimateAction solutions</strong> that drive responsible climate change adaptation and mitigation in developing countries</li>
                      <li><strong>Support the development & scaling-up</strong> of #AI4ClimateAction solutions</li>
                      <li><strong>Raise awareness of opportunities, challenges and risks</strong> of the use of AI for climate action</li>
                  </ul>
              <br />
                  Link to 2024 Grand challenge: {' '}
                  <a href="https://enter.innovationgrandchallenge.ai/2024" className="text-blue-600 hover:underline">https://enter.innovationgrandchallenge.ai/2024</a>.
                  <li><strong>2024 Grand Challenge Winner - Dr. Letetia Addison of Trinidad and Tobago</strong> for “AI-Driven Climate Resilience Platform for SIDS.”</li>
                  <li><strong>Project Description:</strong> AI4SIDS is an AI-driven climate resilience initiative designed to enhance disaster preparedness and response across Small Island Developing States (SIDS). By integrating real-time data from IoT sensors, satellite imagery, and predictive AI models, AI4SIDS provides automated risk assessments, flood detection, and resource allocation insights, ensuring governments and communities can act swiftly to mitigate climate risks. This scalable platform aims to expand beyond flood resilience to multi-hazard disaster management, addressing hurricanes, droughts, and rising sea levels across SIDS.</li>
                  <li><strong>Dr. Letetia Addison about her experience at UN and Enterprise Neurosystem Challenge:</strong> "Participating in this AI Innovation Challenge has been an inspiring opportunity to showcase how AI can drive climate resilience at scale. Engaging with global experts including the UNFCCC at COP 29 and Enterprise Neurosystem has reinforced the need for collaborative innovation, ensuring that AI4SIDS becomes a practical, scalable solution for vulnerable communities worldwide."</li>
                </p>  
          </div>
      </main>
  );
};

export default GrandChallenge;

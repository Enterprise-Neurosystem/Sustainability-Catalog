// // src/components/CataLogHome.tsx
"use client";

import React from "react";
import {
  FlexGrid,
  Row,
  Column,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@carbon/react";
import DataSources from "./DataSources";
import AIModels from "./AIModels";
import Publications from "./Publications";
import AITools from "./AITools";
import styles from "./CataLogHome.module.css";
import useSearchStore from "./Searchstore";
import ScrollToTop from "react-scroll-to-top";

const CataLogHome = ({ datasets, models, tools, publications }) => {
  const query = useSearchStore((state) => state.query);

  const filterData = (data: any[]) => {
    const lowerCaseQuery = query.toLowerCase();

    if (!lowerCaseQuery) {
      // Return all data if query is empty
      return data;
    }

    return data.filter((item) => {
      const nameMatches =
        item.name && item.name.toLowerCase().includes(lowerCaseQuery);
      const categoryMatches =
        item.category && item.category.toLowerCase().includes(lowerCaseQuery);
      const subcategoryMatches =
        item.subcategory &&
        item.subcategory.toLowerCase().includes(lowerCaseQuery);
      const subsubcategoryMatches =
        item.subsubcategory &&
        item.subsubcategory.toLowerCase().includes(lowerCaseQuery);

      return (
        nameMatches ||
        categoryMatches ||
        subcategoryMatches ||
        subsubcategoryMatches
      );
    });
  };

  const filteredDatasets = filterData(datasets);
  const filteredModels = filterData(models);
  const filteredTools = filterData(tools);
  const filteredPublications = filterData(publications);

  const getDatasetsResultCount = (filteredData: any[]) => filteredData.length;
  const getModelsResultCount = (filteredData: any[]) => filteredData.length;
  const getToolsResultCount = (filteredData: any[]) => filteredData.length;
  const getPublicationsResultCount = (filteredData: any[]) =>
    filteredData.length;

  return (
    <div>
      <FlexGrid className={styles.flexGrid}>
        <Row style={{ flex: 1 }}>
          <Column sm={3} md={3} lg={3}>
            <Tabs>
              <TabList aria-label="List of tabs">
                <Tab className="tab-item">Data Sources</Tab>
                <Tab className="tab-item">AI Models</Tab>
                <Tab className="tab-item">Publications</Tab>
                <Tab className="tab-item">AI Tools</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>
                    Total Results Found:{" "}
                    {getDatasetsResultCount(filteredDatasets)}
                  </p>

                  {filteredDatasets.length === 0 ? (
                    <p>No results found</p>
                  ) : (
                    <DataSources datasets={filteredDatasets} />
                  )}
                </TabPanel>
                <TabPanel>
                  <p>
                    Total Results Found:{" "}
                    {getModelsResultCount(filteredModels)}
                  </p>
                  {filteredModels.length === 0 ? (
                    <p>No results found</p>
                  ) : (
                    <AIModels models={filteredModels} />
                  )}
                </TabPanel>
                <TabPanel>
                  <p>
                    Total Results Found:{" "}
                    {getPublicationsResultCount(filteredPublications)}
                  </p>
                  {filteredPublications.length === 0 ? (
                    <p>No results found</p>
                  ) : (
                    <Publications publications={filteredPublications} />
                  )}
                </TabPanel>
                <TabPanel>
                  <p>
                    Total Results Found: {getToolsResultCount(filteredTools)}
                  </p>
                  {filteredTools.length === 0 ? (
                    <p>No results found</p>
                  ) : (
                    <AITools tools={filteredTools} />
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Column>
        </Row>
        <Row style={{ flex: 1 }}>
          <Column sm={9} md={9} lg={9} className="content-column">
            {/* This column will hold the selected TabPanel */}
          </Column>
        </Row>
      </FlexGrid>

      <ScrollToTop
        smooth
        component={<button className={styles.scrollTopButton}>↑</button>}
      />
    </div>
  );
};

export default CataLogHome;

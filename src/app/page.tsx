import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import CataLogHome from "./components/CataLogHome";
import NewsFeed from "./components/NewsFeed";

interface Dataset {
  name: string;
  description: string;
  url: string;
}

interface Model {
  name: string;
  description: string;
  url: string;
}

interface Tool {
  name: string;
  description: string;
  url: string;
}

interface Publication {
  title: string;
  description: string;
  url?: string;
}

const HomePage = async () => {
  let datasets: Dataset[] = [];
  let models: Model[] = [];
  let tools: Tool[] = [];
  let publications: Publication[] = [];

  try {
    const filePath = path.join(process.cwd(), "public/datasets.yml");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = yaml.load(fileContent) as {
      datasets: Dataset[];
      models: Model[];
      tools: Tool[];
      publications: Publication[];
    };

    datasets = data.datasets || [];
    models = data.models || [];
    tools = data.tools || [];
    publications = data.publications || [];
  } catch (error) {
    console.error("Error reading or parsing YAML file:", error);
  }

  return (
    <section className="section-01">
      <div className="containerX">
        <div className="row main-content">
          <div className="col-lg-8 col-md-12 catalog-section">
            <CataLogHome
              datasets={datasets}
              models={models}
              tools={tools}
              publications={publications}
            />
          </div>

          <aside className="col-lg-4 col-md-12 news-feed">
            <NewsFeed />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

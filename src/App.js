import "antd/dist/antd.css";
import "./App.css";
import { PageHeader } from "antd";

import Activities from "./components/Activities";
import Cards from "./components/Cards";
import LineGraph from "./components/LineGraph";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-100">
        <div className="mb-2">
          <PageHeader title="DashBoard" />
          <Cards />
        </div>
        <div className="flex px-4">
          <LineGraph />
          <Activities />
        </div>
      </div>
    </div>
  );
}

export default App;

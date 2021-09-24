import "./App.css";
import Dashboard from "./Components/Dashboard";
import "primeflex/primeflex.css";

import PostsPage from "./Components/PostsPage";

import { TabView, TabPanel } from "primereact/tabview";
import InternalPosts from "./Components/InternalPosts";

function App() {
  return (
    <div className="App">
      <TabView>
        <TabPanel header="Dashboard Pages">
          <Dashboard />
        </TabPanel>
        <TabPanel header="Post Pages">
          <PostsPage />
        </TabPanel>
        <TabPanel header="Internal">
          <InternalPosts />
        </TabPanel>
      </TabView>
    </div>
  );
}

export default App;

import { ScrollPanel } from "primereact/scrollpanel";
import React, { useEffect, useState } from "react";
import Assesment from "../Services/Service";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import SortDateTest from "./PostPerMonth";
import PostSubPage from "./PostSubPage";

export default function Dashboard() {
  const service = new Assesment();
  const [posts, setPosts] = useState("");
  const [sortedPosts, setSortedPosts] = useState("");
  const [pages, setPages] = useState("");
  const [authors, setAuthors] = useState("");
  const [tags, setTags] = useState("");
  useEffect(() => {
    service.getPosts().then((response) => {
      setPosts(response.data);
      let y = response.data;
      let y1 = y.posts.sort(function (a, b) {
        return (
          new Date(a.published_at).getMonth() -
          new Date(b.published_at).getMonth()
        );
      });
      setSortedPosts(y1);
    });
    service.getPages().then((response) => {
      setPages(response.data);
    });
    service.getAuthors().then((response) => {
      setAuthors(response.data);
    });
    service.getTags().then((response) => {
      setTags(response.data);
    });
  }, []);
  const chartStyle = {
    backgroundColor: "white",
  };
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
          backgroundColor: "#edf5f7",
        }}
      >
        <div className="p-grid p-p-2">
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="p-shadow-6 p-p-1" style={chartStyle}>
              <LineChart
                content={posts}
                customChart={"Total number of Posts"}
              />
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="p-shadow-6 p-p-1" style={chartStyle}>
              <LineChart
                content={pages}
                customChart={"Total number of Pages"}
              />
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="p-shadow-6 p-p-1" style={chartStyle}>
              <LineChart
                content={authors}
                customChart={"Total number of Authors"}
              />
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="p-shadow-6 p-p-1" style={chartStyle}>
              <LineChart content={tags} customChart={"Total number of Tags"} />
            </div>
          </div>
        </div>
        <div className="p-grid p-p-2">
          <div className="p-col-12 p-md-6 p-lg-6">
            <SortDateTest />
          </div>
          <div className="p-col-12 p-md-6 p-lg-6">
            <div className="p-shadow-6 p-p-1" style={chartStyle}>
              <ScrollPanel className="custom" style={{ height: "300px" }}>
                <PostSubPage
                  heading={"Top 5 Published Posts"}
                  data={sortedPosts.slice(0, 5)}
                  style={chartStyle}
                />
              </ScrollPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ScrollPanel } from "primereact/scrollpanel";
import React, { useEffect, useState } from "react";
import Assesment from "../Services/Service";
import { trail } from "./SearchTrail";
import LinksSubPage from "./util/LinksSubPage";
import LinkSubCount from "./util/LinkSubCount";

export default function InternalPosts() {
  const [post, setPosts] = useState([]);
  const service = new Assesment();
  useEffect(() => {
    service.getPosts().then((response) => {
      let x = trail(response.data.posts);
      setPosts(x);
    });
  }, []);

  const innerStyle = {
    backgroundColor: "white",
  };
  return (
    <>
      <div
        className="p-grid p-p-1"
        style={{
          border: "1px solid black",
          margin: "10px",
          backgroundColor: "#edf5f7",
        }}
      >
        <div className="p-col-12 p-md-4 p-lg-3">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel
              style={{
                height: "400px",
              }}
              className="custom"
            >
              <LinkSubCount data={post} />
            </ScrollPanel>
          </div>
        </div>
        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel
              style={{
                height: "400px",
              }}
              className="custom"
            >
              <LinksSubPage heading={"Internal Links"} data={post[0]} />
            </ScrollPanel>
          </div>
        </div>
        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel className="custom" style={{ height: "400px" }}>
              <LinksSubPage heading={"External Links"} data={post[1]} />
            </ScrollPanel>
          </div>
        </div>
      </div>
    </>
  );
}

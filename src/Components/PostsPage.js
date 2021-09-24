import { ScrollPanel } from "primereact/scrollpanel";
import React, { useEffect, useState } from "react";
import Assesment from "../Services/Service";
import {
  postsWithoutFeaturedImage,
  tooLongMetaDescription,
  tooLongPosts,
  tooLongURL,
  tooShortPosts,
  withoutMetaDescription,
} from "./Constants";
import PostSubPage from "./PostSubPage";
import findFeaturedImage from "./util/FindFeturedImage";
import metaDescription from "./util/MetaDescription";
import PostLength from "./util/PostLength";
import urlLength from "./util/UrlLength";
import robo from "../Images/robo.png";
import handsRaise from "../Images/handsRaise.png";
import seissors from "../Images/seissors.png";
import gallory from "../Images/gallory.png";
import warning from "../Images/warning.png";
import writeHand from "../Images/writeHand.png";
export default function PostsPage() {
  const service = new Assesment();
  const [post, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [featuredImagePosts, setFeaturedImagePosts] = useState([]);
  const [checkLength, setCheckLength] = useState([]);
  const [metaDaiscription, setMetaDescription] = useState([]);
  useEffect(() => {
    service.getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    let x = PostLength(post);
    setFilteredPosts(x);
    let y = findFeaturedImage(post);
    setFeaturedImagePosts(y);
    let z = urlLength(post);
    setCheckLength(z);
    let meta = metaDescription(post);
    setMetaDescription(meta);
  }, [post]);
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
        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel
              style={{
                height: "400px",
              }}
              className="custom"
            >
              <PostSubPage
                image={robo}
                heading={withoutMetaDescription}
                data={metaDaiscription[0]}
              />
            </ScrollPanel>
          </div>
        </div>
        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel className="custom" style={{ height: "400px" }}>
              <PostSubPage
                image={gallory}
                heading={postsWithoutFeaturedImage}
                data={featuredImagePosts}
              />
            </ScrollPanel>
          </div>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel className="custom" style={{ height: "400px" }}>
              <PostSubPage
                heading={tooShortPosts}
                data={filteredPosts[0]}
                image={writeHand}
              />
            </ScrollPanel>
          </div>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel className="custom" style={{ height: "400px" }}>
              <PostSubPage
                image={handsRaise}
                heading={tooLongMetaDescription}
                data={metaDaiscription[1]}
              />
            </ScrollPanel>
          </div>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel className="custom" style={{ height: "400px" }}>
              <PostSubPage
                heading={tooLongPosts}
                data={filteredPosts[1]}
                image={warning}
              />
            </ScrollPanel>
          </div>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <div className="p-shadow-6 p-p-1" style={innerStyle}>
            <ScrollPanel className="custom" style={{ height: "400px" }}>
              <PostSubPage
                image={seissors}
                heading={tooLongURL}
                data={checkLength}
              />
            </ScrollPanel>
          </div>
        </div>
      </div>
    </>
  );
}

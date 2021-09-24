import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Postpages.css";
import { ScrollPanel } from "primereact/scrollpanel";

export default function LinksSubPage({ image, heading, data }) {
  const itemTemplate = () => {
    return (
      <>
        {data?.map((element, index) => (
          <div className="p-col-12">
            <div className="p-grid">
              <div className="p-col-1 index">{index + 1}</div>
              <div className="p-col-10 p-text-left pageLinkHead">
                <a href={`${element}`} target="_blank">
                  {data[index]}
                </a>
              </div>
              <div className="p-col-1 p-text-bold">
                <i class="fa fa-edit"></i>
              </div>
            </div>
            <div className="p-grid">
              <div className="p-col-1"></div>
              <div className="p-col-9 p-text-left p-text-bold subText">
                {" "}
                <span className="p-ml-1">
                  <span style={{ color: "red" }}>0</span> Times Used
                </span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const alternate = () => {
    return (
      <>
        <div className="p-col-12">
          <span style={{ fontSize: "30px" }}>
            &#128079;Awesome No posts found
          </span>
          ;
        </div>
      </>
    );
  };

  return (
    <div className="p-grid">
      <div className="p-col-12 p-text-bold heading">
        <img
          src={image}
          height="20"
          width="20"
          className={`${image ? "" : "p-d-none"}`}
        />
        {heading}
      </div>
      {data?.length > 0 ? itemTemplate() : alternate()}
    </div>
  );
}

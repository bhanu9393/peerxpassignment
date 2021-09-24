import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Styles/Postpages.css";
import { ScrollPanel } from "primereact/scrollpanel";

export default function PostSubPage({ image, heading, data }) {
  const itemTemplate = () => {
    return (
      <>
        {data?.map((element, index) => (
          <div className="p-col-12">
            <div className="p-grid">
              <div className="p-col-1 index">{index + 1}</div>
              <div className="p-col-10 p-text-left pageLinkHead">
                <a href={`${element.url}`} target="_blank">
                  {element.title}
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
                <i className="pi pi-eye-slash p-mt-1"></i>
                <span className="p-ml-1">MARK AS VALID</span>
              </div>
              <div className="p-col-2">
                <i class="pi pi-pencil"></i> EDIT
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

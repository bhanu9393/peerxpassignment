import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Postpages.css";
import { ScrollPanel } from "primereact/scrollpanel";

export default function LinkSubCount({ image, heading, data }) {
  const date = new Date();
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
      <div className="p-col-12 p-text-bold heading">INTERNAL LINKS</div>
      <div className="p-col-12 p-text-bold heading">{data[0]?.length}</div>
      <div className="p-col-12 p-text-bold heading">EXTERNAL LINKS</div>
      <div className="p-col-12 p-text-bold heading"> {data[1]?.length}</div>
      {/* {data?.length > 0 ? itemTemplate() : alternate()} */}
    </div>
  );
}

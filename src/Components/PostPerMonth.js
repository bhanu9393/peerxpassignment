import React, { useEffect, useState } from "react";
import Assesment from "../Services/Service";
import BarChart from "./BarChart";
import Monthly from "./util/PerMonthCount";

export default function PostPerMonth() {
  const service = new Assesment();
  const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [sortedPosts, setSortedPosts] = useState([]);
  const [monthcount, setMonthCount] = useState("");
  const serviceCall = () => {
    service.getPosts().then((response) => {
      let y = response.data.posts.sort(function (a, b) {
        return (
          new Date(a.published_at).getMonth() -
          new Date(b.published_at).getMonth()
        );
      });
      setSortedPosts(y);
    });
  };
  useEffect(() => {
    serviceCall();
  }, []);
  useEffect(() => {
    let monthlist = Monthly(sortedPosts, count);

    console.log(monthlist);
    setMonthCount(monthlist);
  }, [sortedPosts]);
  const chartStyle = {
    backgroundColor: "white",
  };
  return (
    <div className="p-shadow-6 p-p-1" style={chartStyle}>
      <BarChart monthcount={monthcount} />
    </div>
  );
}

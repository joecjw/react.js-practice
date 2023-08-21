import React from "react";
import { useParams } from "react-router-dom";

const DemoObjectOverview = () => {
  const { id } = useParams();
  return <div>DemoObject {id}'s Overview</div>;
};

export default DemoObjectOverview;

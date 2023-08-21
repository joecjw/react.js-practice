import React from "react";
import { useParams } from "react-router-dom";

const DemoObjectDetail = () => {
  const { id } = useParams();

  return <div>DemoObject {id}'s Detail</div>;
};

export default DemoObjectDetail;

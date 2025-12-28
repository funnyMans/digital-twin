import React from "react";

const DetailsInfo = ({ info }: { info: string }) => {
  return <p>{info || "No information available"}</p>;
};

export { DetailsInfo };

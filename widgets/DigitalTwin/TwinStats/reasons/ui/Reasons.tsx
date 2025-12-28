"use client";
import { ReasonsBatch } from "@/entities/stats/reason";

const Reasons = () => {
  return (
    <div className={"flex flex-col"}>
      <span>How we know this</span>
      <ReasonsBatch />
    </div>
  );
};

export default Reasons;

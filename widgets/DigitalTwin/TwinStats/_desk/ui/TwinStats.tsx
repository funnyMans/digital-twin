import { RehabDesk } from "@/widgets/DigitalTwin/Rehab";
import { AgeMetrics } from "../../age-metrics";
import { Concerns } from "../../concerns";
import { Reasons } from "../../reasons";
import { SystemDetails } from "../../system-details";
import { Tracker } from "../../tracker";

const TwinStatsDesk = () => {
  return (
    <div className={"flex-5  pt-30 flex flex-col gap-4 overflow-y-auto"}>
      <Tracker />
      <SystemDetails />
      <AgeMetrics />
      <Concerns />
      <Reasons />
      <RehabDesk />
    </div>
  );
};

export default TwinStatsDesk;

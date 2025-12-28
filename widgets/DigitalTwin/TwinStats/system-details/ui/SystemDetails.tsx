import { DetailsHeading, DetailsInfo } from "@/entities/stats/system";

const SystemDetails = () => {
  return (
    <div className={"flex flex-col justify-between "}>
      <DetailsHeading heading="Headache" />
      <DetailsInfo info="System is operating within normal parameters." />
    </div>
  );
};

export default SystemDetails;

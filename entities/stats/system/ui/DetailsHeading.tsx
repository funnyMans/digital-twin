import { DetailsReport } from "./DetailsReport";

const DetailsHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex justify-between">
      <h1>{heading}</h1>
      <DetailsReport />
    </div>
  );
};
export { DetailsHeading };

import { IConcern } from "../type/concern";
import { ConcernCard } from "./ConcernCard";

const ConcernBatch = ({ concerns }: { concerns: IConcern[] }) => {
  return (
    <div className="flex">
      {concerns.map((concern, index) => (
        <ConcernCard key={index} concern={concern}></ConcernCard>
      ))}
    </div>
  );
};

export { ConcernBatch };

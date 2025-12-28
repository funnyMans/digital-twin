import { ConcernBatch, ConcernsTitle } from "@/entities/stats/concern";

const Concerns = () => {
  return (
    <div className={"flex flex-col gap-4 "}>
      <ConcernsTitle />
      <ConcernBatch
        concerns={[
          {
            id: 1,
            title: "Concern 1",
            description: "Description 1",
            severity: "high",
          },
          {
            id: 2,
            title: "Concern 2",
            description: "Description 2",
            severity: "medium",
          },
        ]}
      />
    </div>
  );
};

export default Concerns;

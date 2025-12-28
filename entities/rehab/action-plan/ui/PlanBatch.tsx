import { IActivityGroup } from "../type/ActionPlan";
import { PlanSection } from "./PlanSection";

const PlanBatch = ({ group }: { group: IActivityGroup }) => {
  return (
    <div>
      <h3>{group.groupName}</h3>
      {group.activities.map((activity) => (
        <PlanSection key={activity.title} activity={activity} />
      ))}
    </div>
  );
};

export { PlanBatch };

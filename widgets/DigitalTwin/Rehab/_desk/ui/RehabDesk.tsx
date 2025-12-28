import DynamicTabs from "@/shared/ui/tabs/DynamicTabs";
import { RehabActionPlan } from "../../action-plan";
import { RehabFollowUp } from "../../follow-up";
import { RehabLifeStyle } from "../../lifestyle";
import { RehabSupplements } from "../../supplements";

const RehabDesk = () => {
  const tabs = [
    {
      value: "action-plan",
      label: "Action Plan",
      content: <RehabActionPlan />,
    },
    {
      value: "follow-up",
      label: "Follow Up",
      content: <RehabFollowUp />,
    },
    {
      value: "lifestyle",
      label: "Lifestyle",
      content: <RehabLifeStyle />,
    },
    {
      value: "supplements",
      label: "Supplements",
      content: <RehabSupplements />,
    },
  ];

  return (
    <div className={"flex w-full h-full"}>
      <DynamicTabs tabs={tabs} />
    </div>
  );
};

export default RehabDesk;

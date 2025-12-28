import { PlanBatch, PlanNote } from "@/entities/rehab/action-plan";
import {
  ActivityGroupName,
  IActivityGroup,
} from "@/entities/rehab/action-plan/type/ActionPlan";

import { Mail, CheckCircle, Calendar, FileText, BarChart } from "lucide-react";

const activityGroups: IActivityGroup[] = [
  {
    groupName: ActivityGroupName.FOLLOW_UP,
    activities: [
      {
        icon: <Mail size={20} />,
        title: "Follow up with client",
        description:
          "Send a personalized email to check progress or answer questions.",
      },
      {
        icon: <CheckCircle size={20} />,
        title: "Approve completed tasks",
        description:
          "Review and approve tasks that have been marked complete by the team.",
      },
    ],
  },
  {
    groupName: ActivityGroupName.LIFESTYLE,
    activities: [
      {
        icon: <Calendar size={20} />,
        title: "Plan next sprint",
        description:
          "Organize tasks and assign responsibilities for the next sprint cycle.",
      },
      {
        icon: <FileText size={20} />,
        title: "Prepare project documentation",
        description:
          "Update requirements, notes, and workflow for upcoming work.",
      },
    ],
  },
  {
    groupName: ActivityGroupName.SUPPLEMENTS,
    activities: [
      {
        icon: <BarChart size={20} />,
        title: "Review performance report",
        description:
          "Analyze team performance metrics and identify areas of improvement.",
      },
      {
        icon: <CheckCircle size={20} />,
        title: "Verify completed goals",
        description:
          "Ensure that all assigned goals have been successfully completed.",
      },
    ],
  },
];

export { activityGroups };

const RehabActionPlan = () => {
  return (
    <div>
      <PlanNote note="This is a rehab action plan note." />
      {activityGroups.map((group) => (
        <PlanBatch key={group.groupName} group={group} />
      ))}
    </div>
  );
};

export { RehabActionPlan };

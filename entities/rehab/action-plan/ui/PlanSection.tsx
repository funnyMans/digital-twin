import Link from "next/link";
import { IActivity } from "../type/ActionPlan";
import { Button } from "@/shared/lib/shadCN/components/ui/button";
import { Card } from "@/shared/lib/shadCN/components/ui/card";

const PlanSection = ({ activity }: { activity: IActivity }) => {
  const { title, icon, description } = activity;

  return (
    <Card className="flex flex-col justify-between w-full p-4 gap-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 cursor-pointer">
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      </div>

      {/* Content */}
      <p className="text-sm text-slate-700 dark:text-slate-300">
        {description || "No description available."}
      </p>

      {/* Footer / Actions */}
      <div className="flex items-center justify-between gap-2 mt-2">
        <Link
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 transition-colors duration-200"
        >
          See all
        </Link>
        <Button
          size="sm"
          variant="default"
          className="transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          Activity
        </Button>
      </div>
    </Card>
  );
};

export { PlanSection };

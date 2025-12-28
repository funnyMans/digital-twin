import { Anchor } from "lucide-react";

const TrackerHeading = () => {
  return (
    <div className="flex flex-col gap-1">
      <Anchor />
      <span>Stay tuned we are checking your</span>
      <span className="text-lg">Cholesterol</span>
    </div>
  );
};

export { TrackerHeading };

import { Button } from "@/shared/lib/shadCN/components/ui/button";

const ConcernsTitle = () => {
  return (
    <div className="flex justify-between">
      <h3>Key Areas of Concerns</h3>
      <Button>
        Show All <span> down</span>
      </Button>
    </div>
  );
};

export { ConcernsTitle };

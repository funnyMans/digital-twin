import React from "react";
import { AnimatedCardList } from "@/shared/ui/list/AnimatedCardList";
import { AnimatedCardItem } from "@/shared/ui/list/AnimatedCard";

const FollowUpBatch = ({ careTypes }: { careTypes: AnimatedCardItem[] }) => {
  return (
    <div>
      <AnimatedCardList
        items={careTypes}
        stackGap={20}
        columnGap={85}
        scaleFactor={0.05}
        scrollDownDuration={5}
        formationDuration={1}
      />
    </div>
  );
};

export { FollowUpBatch };

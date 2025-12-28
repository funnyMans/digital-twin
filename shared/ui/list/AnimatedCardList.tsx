"use client";

import { cn } from "@/shared/lib/utils";
import { AnimatedCard, AnimatedCardItem } from "./AnimatedCard";
import { AnimatedList } from "@/shared/lib/shadCN/components/ui/animated-list";

type AnimatedCardListProps = {
  items: AnimatedCardItem[];
  className?: string;

  stackGap?: number;
  columnGap?: number;
  scaleFactor?: number;
  scrollDownDuration?: number;
  formationDuration?: number;
};

export function AnimatedCardList({
  items,
  className,
  stackGap = 20,
  columnGap = 85,
  scaleFactor = 0.05,
  scrollDownDuration = 5,
  formationDuration = 1,
}: AnimatedCardListProps) {
  return (
    <div
      className={cn(
        "relative h-100 w-full overflow-hidden rounded-lg border bg-background",
        className
      )}
    >
      <AnimatedList
        stackGap={stackGap}
        columnGap={columnGap}
        scaleFactor={scaleFactor}
        scrollDownDuration={scrollDownDuration}
        formationDuration={formationDuration}
      >
        {items.map((item) => (
          <AnimatedCard key={item.id} item={item} />
        ))}
      </AnimatedList>
    </div>
  );
}

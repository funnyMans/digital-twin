"use client";

import * as React from "react";
import {
  Progress,
  ProgressIndicator,
} from "@/shared/lib/shadCN/components/animate-ui/primitives/radix/progress";

const TrackerProgress = () => {
  return (
    <div className="w-full max-w-md">
      <Progress
        value={40}
        className="w-full h-4 bg-muted rounded-full overflow-hidden"
      >
        <ProgressIndicator className="bg-green-500 h-full transition-all duration-500" />
      </Progress>
      <p className="text-sm mt-1 text-muted-foreground">{40}%</p>
    </div>
  );
};

export { TrackerProgress };

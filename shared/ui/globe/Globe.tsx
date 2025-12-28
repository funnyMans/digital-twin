"use client";

import { Cobe } from "@/shared/lib/shadCN/components/ui/cobe-globe";

export function Globe() {
  return (
    <Cobe
      variant="default"
      phi={0}
      theta={0.2}
      mapSamples={16000}
      mapBrightness={1.8}
      mapBaseBrightness={0.05}
      diffuse={3}
      dark={1.1}
      baseColor="#609b13"
      markerColor="#fb6415"
      markerSize={0.05}
      glowColor="#b1ddd9"
      scale={1.0}
      offsetX={0.0}
      offsetY={0.0}
      opacity={0.7}
    />
  );
}

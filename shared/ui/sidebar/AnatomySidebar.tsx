"use client";
import { Heart, Brain, Activity, Zap, Cloud } from "lucide-react";
import { QuickActionsDial } from "../speed-dial/QuickActionsDial";

type Position = "bottom-right" | "bottom-left" | "bottom-center";
const AnatomySidebar = ({ position }: { position: Position }) => {
  return (
    <div className="z-10 opacity-75  lg:opacity-100selector">
      <QuickActionsDial
        open
        controlled
        position={position}
        showLabels={false}
        actions={[
          {
            icon: Heart,
            label: "Heart",
            onClick: () => alert("Heart clicked"),
          },
          {
            icon: Brain,
            label: "Brain",
            onClick: () => alert("Brain clicked"),
          },
          {
            icon: Activity, // placeholder for Lungs
            label: "Lungs",
            onClick: () => alert("Lungs clicked"),
          },
          {
            icon: Zap, // placeholder for Liver
            label: "Liver",
            onClick: () => alert("Liver clicked"),
          },
          {
            icon: Cloud, // placeholder for Kidney
            label: "Kidney",
            onClick: () => alert("Kidney clicked"),
          },
        ]}
      />
    </div>
  );
};

export default AnatomySidebar;

// components/ui/QuickActionsDial.tsx
"use client";

import { useState } from "react";

import { LucideIcon, Plus } from "lucide-react";
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialItem,
  SpeedDialLabel,
  SpeedDialTrigger,
} from "@/shared/lib/shadCN/components/ui/speed-dial";
import { Button } from "@/shared/lib/shadCN/components/ui/button";

type QuickAction = {
  icon: LucideIcon;
  onClick?: () => void;
  label: string;
};

interface QuickActionsDialProps {
  actions: QuickAction[];
  showLabels?: boolean;
  controlled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  position?: "bottom-right" | "bottom-left" | "bottom-center";
}

export const QuickActionsDial = ({
  actions,
  showLabels = true,
  controlled = false,
  open,
  onOpenChange,
  position = "bottom-right",
}: QuickActionsDialProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const handleOpenChange = (val: boolean) => {
    if (controlled && onOpenChange) {
      onOpenChange(val);
    } else {
      setInternalOpen(val);
    }
  };

  const positionClasses = {
    "bottom-right": "fixed bottom-50 right-20",
    "bottom-left": "fixed bottom-50 left-20 z-50",
    "bottom-center": "fixed bottom-50 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div className={positionClasses[position]}>
      <SpeedDial
        open={controlled ? open : internalOpen}
        onOpenChange={handleOpenChange}
      >
        <SpeedDialTrigger asChild>
          <Button className="rounded-full p-4">
            <Plus size={24} />
          </Button>
        </SpeedDialTrigger>

        <SpeedDialContent>
          {actions.map((action, idx) => (
            <SpeedDialItem key={idx} onClick={action.onClick}>
              <SpeedDialAction>
                <action.icon size={20} />
              </SpeedDialAction>
              {showLabels && action.label && (
                <SpeedDialLabel>{action.label}</SpeedDialLabel>
              )}
            </SpeedDialItem>
          ))}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
};

import { ReactElement } from "react";

export enum ActivityGroupName {
  FOLLOW_UP = "Follow-up Care",
  SUPPLEMENTS = "Supplements",
  LIFESTYLE = "Lifestyle",
}

export interface IActivity {
  icon: ReactElement;
  title: string;
  description?: string;
}

export interface IActivityGroup {
  groupName: ActivityGroupName;
  activities: IActivity[];
}

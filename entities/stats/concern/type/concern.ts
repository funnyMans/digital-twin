export interface IConcern {
  id: string | number;
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
}

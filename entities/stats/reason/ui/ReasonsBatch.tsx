import { Column, ExpandableTable } from "@/shared/ui/table/ExpandableTable";
import { IReason } from "../types/reason";
import { Badge } from "@/shared/lib/shadCN/components/ui/badge";

export const mockReasons: IReason[] = [
  {
    id: "R-001",
    title: "Hemoglobin",
    testType: "Blood test",
    level: "Normal",
    value: 14.2,
    valueUnit: "g/dL",
    status: "ok",
    norma: { min: 13.5, max: 17.5 },
  },
  {
    id: "R-002",
    title: "Glucose",
    testType: "Blood test",
    level: "High",
    value: 7.4,
    valueUnit: "mmol/L",
    status: "warning",
    norma: { min: 3.9, max: 6.1 },
  },
  {
    id: "R-003",
    title: "Cholesterol",
    testType: "Blood test",
    level: "Critical",
    value: 6.8,
    valueUnit: "mmol/L",
    status: "critical",
    norma: { min: 0, max: 5.2 },
  },
  {
    id: "R-004",
    title: "Vitamin D",
    testType: "Blood test",
    level: "Low",
    value: 22,
    valueUnit: "ng/mL",
    status: "warning",
    norma: { min: 30, max: 100 },
  },
];

const statusVariantMap: Record<
  string,
  "secondary" | "outline" | "destructive"
> = {
  ok: "secondary",
  warning: "outline",
  critical: "destructive",
};

function ValueWithNorma({
  value,
  unit,
  norma,
}: {
  value: number;
  unit: string;
  norma: IReason["norma"];
}) {
  const range = norma.max - norma.min;
  const percent =
    range > 0
      ? Math.min(100, Math.max(0, ((value - norma.min) / range) * 100))
      : 0;

  const isNormal = value >= norma.min && value <= norma.max;

  return (
    <div className="flex flex-col gap-1 w-14">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">
          {value} {unit}
        </span>
        <span className={isNormal ? "text-green-600" : "text-destructive"}>
          {norma.min}–{norma.max}
        </span>
      </div>

      <div className="relative h-2 w-full rounded bg-muted overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 transition-all ${
            isNormal ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export const reasonColumns: Column<IReason>[] = [
  {
    header: "ID",
    render: (row: IReason) => <span className="font-medium">{row.id}</span>,
  },
  {
    header: "Test",
    render: (row: IReason) => (
      <div>
        <p className="font-medium">{row.title}</p>
        <p className="text-xs text-muted-foreground">{row.testType}</p>
      </div>
    ),
  },
  {
    header: "Level",
    render: (row: IReason) => <span>{row.level}</span>,
  },
  {
    header: "Value",
    render: (row: IReason) => (
      <ValueWithNorma
        value={row.value}
        unit={row.valueUnit}
        norma={row.norma}
      />
    ),
  },
  {
    header: "Status",
    render: (row: IReason) => (
      <Badge variant={statusVariantMap[row.status] ?? "secondary"}>
        {row.status}
      </Badge>
    ),
  },
  {
    header: "Norma",
    render: (row: IReason) => (
      <span className="text-sm text-muted-foreground">
        {row.norma.min} – {row.norma.max} {row.valueUnit}
      </span>
    ),
  },
];

const ReasonsBatch = () => {
  return (
    <div>
      <ExpandableTable data={mockReasons} columns={reasonColumns} />
    </div>
  );
};

export { ReasonsBatch };

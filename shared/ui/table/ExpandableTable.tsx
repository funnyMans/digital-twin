"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/lib/shadCN/components/ui/table";
import React, { useState } from "react";

/* =========================
   Column types
========================= */

export interface Column<T> {
  header: React.ReactNode;
  render: (row: T) => React.ReactNode;
  expandableText?: (row: T) => React.ReactNode;
  className?: string;
}

/* =========================
   Props
========================= */

interface ExpandableTableProps<T extends { id: string }> {
  data: T[];
  columns: Column<T>[];
}

/* =========================
   Component
========================= */

export function ExpandableTable<T extends { id: string }>({
  data,
  columns,
}: ExpandableTableProps<T>) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead key={idx}>{col.header}</TableHead>
            ))}
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => {
            const isExpanded = expandedRows.has(row.id);

            return (
              <React.Fragment key={row.id}>
                <TableRow
                  onClick={() => toggleRow(row.id)}
                  className="cursor-pointer hover:bg-muted/10"
                >
                  {columns.map((col, i) => (
                    <TableCell key={i}>{col.render(row)}</TableCell>
                  ))}
                </TableRow>

                {isExpanded && (
                  <TableRow>
                    <TableCell colSpan={columns.length}>
                      {columns
                        .filter((c) => c.expandableText)
                        .map((c, i) => (
                          <div
                            key={i}
                            className="text-sm text-muted-foreground"
                          >
                            {c.expandableText!(row)}
                          </div>
                        ))}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

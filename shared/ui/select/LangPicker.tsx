"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, GlobeIcon } from "lucide-react";
import { Button } from "@/shared/lib/shadCN/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/lib/shadCN/components/ui/dropdown-menu";

const locales = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "ru", label: "Russian" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
];

export default function LangPicker({ locale }: { locale: string }) {
  const pathname = usePathname();

  // remove current locale from path
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <GlobeIcon />
          <span>{locale.toUpperCase()}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-45">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={locale}>
          <div>
            {locales.map(({ code, label }) => (
              <DropdownMenuRadioItem value={code} key={label}>
                <Link
                  href={`/${code}${pathWithoutLocale}`}
                  className="w-full block"
                >
                  {label}
                </Link>
              </DropdownMenuRadioItem>
            ))}
          </div>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

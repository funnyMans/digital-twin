"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/shared/lib/shadCN/components/ui/button";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("NavBar");

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      onClick={handleThemeSwitch}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-yellow-400 rounded-md cursor-pointer"
    >
      {t("toggleTheme")}
    </Button>
  );
}

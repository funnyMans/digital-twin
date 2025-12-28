import AuthControl from "@/features/auth/ui/AuthControl";
import { Logo } from "@/shared/lib/shadCN/components/logo";
import { NavMenu } from "@/shared/lib/shadCN/components/nav-menu";
import { NavigationSheet } from "@/shared/lib/shadCN/components/navigation-sheet";
import { Button } from "@/shared/lib/shadCN/components/ui/button";
import { ThemeToggler } from "../button/ThemeToggler";
import LangPicker from "../select/LangPicker";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

const Navbar = async () => {
  const locale = await getLocale();
  const t = await getTranslations("NavBar"); // load translations

  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background  border max-w-(--breakpoint-xl) mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href={"/"}>
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-2">
            <ThemeToggler aria-label={t("toggleTheme")} />
            <LangPicker locale={locale} />
          </div>

          <AuthControl />

          <div className="hidden lg:flex gap-2">
            <Button className="rounded-full hidden md:block">
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden sm:z-80">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router";
import Button from "./button";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { CiSun } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logoUrl from "../../assets/images/logo.svg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/configurator", label: "Configurator" },
  { to: "/finance", label: "Finance" },
  { to: "/contact", label: "Contact" },
];

const HeaderSection = () => {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation("global", { keyPrefix: "header" });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-brand font-bold"
      : "text-black font-semibold hover:text-brand hover:font-bold";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[var(--bg-brand)] text-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <img
            src={logoUrl}
            alt="Car Preview logo"
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              title={t(`${item.label.toLowerCase()}`)}
              className={(navData) =>
                `px-2 py-1 text-sm lg:text-base before:block before:h-0 before:overflow-hidden before:invisible before:font-bold before:content-[attr(title)] ${linkClass(
                  navData
                )}`
              }
            >
              {t(`${item.label.toLowerCase()}`)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2">
            <Button
              type="link"
              onClick={() => handleLanguageChange("en")}
              className="min-h-11 min-w-11 text-sm md:min-h-0 md:min-w-0"
            >
              EN
            </Button>
            <Button
              type="link"
              onClick={() => handleLanguageChange("ua")}
              className="min-h-11 min-w-11 text-sm md:min-h-0 md:min-w-0"
            >
              UA
            </Button>
            <Button
              type="link"
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center p-0 md:h-8 md:w-8"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <CiSun size={20} /> : <FiMoon size={17} />}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-black/30 touch-none md:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            className="fixed left-0 right-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-b border-slate-200/80 bg-[var(--bg-brand)] px-4 py-3 shadow-lg md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={(navData) =>
                      `block rounded-lg px-3 py-3 text-base ${linkClass(
                        navData
                      )}`
                    }
                  >
                    {t(`${item.label.toLowerCase()}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default HeaderSection;

import { Link, NavLink } from "react-router";
import Button from "./button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CiSun } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import { useEffect } from "react";

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

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const { t, i18n } = useTranslation("global", { keyPrefix: "header" });
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-brand font-bold "
      : "text-black font-semibold hover:text-brand hover:font-bold";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-grey-200 bg-[var(--bg-brand)] text-black border-b-1">
      <div>
        <Link
          to="/"
          className="block bg-[url('/src/assets/images/logo.svg')] bg-contain bg-no-repeat w-35.5 h-10"
        />
      </div>
      <nav className="flex items-center justify-between p-4 gap-4">
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              title={t(`${item.label.toLowerCase()}`)}
              className={(navData) =>
                `block mx-2 last:mr-0 before:block before:h-0 before:overflow-hidden before:invisible before:content-[attr(title)] before:font-bold ${linkClass(navData)}`
              }
            >
              {t(`${item.label.toLowerCase()}`)}
            </NavLink>
          );
        })}
      </nav>
      <div className="flex items-center gap-4">
        <Button type="link" onClick={() => handleLanguageChange("en")}>
          EN
        </Button>
        <Button type="link" onClick={() => handleLanguageChange("ua")}>
          UA
        </Button>
        <Button type="link" onClick={toggleTheme} className="w-8 h-8 p-0">
          {theme === "light" ? <CiSun size={20} /> : <FiMoon size={17} />}
        </Button>
      </div>
    </header>
  );
};

export default HeaderSection;

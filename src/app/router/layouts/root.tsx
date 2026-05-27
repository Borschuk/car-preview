import { Outlet } from "react-router";
import HeaderSection from "../../components/headerSection";
import FooterSection from "../../components/footerSection";

import { ThemeProvider } from "../../context/themeContext";

const root = () => {
  return (
    <>
      <ThemeProvider>
        <HeaderSection />
        <main className="bg-[var(--bg-brand)] pb-16 min-h-screen">
          <Outlet />
        </main>
        <FooterSection />
      </ThemeProvider>
    </>
  );
};

export default root;

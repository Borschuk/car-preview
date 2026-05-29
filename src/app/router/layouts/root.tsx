import { Outlet } from "react-router";
import HeaderSection from "../../components/headerSection";
import FooterSection from "../../components/footerSection";

import { ThemeProvider } from "../../context/themeContext";

const root = () => {
  return (
    <>
      <ThemeProvider>
        <HeaderSection />
        <main className="min-h-screen overflow-x-hidden bg-[var(--bg-brand)] pb-10 sm:pb-16">
          <Outlet />
        </main>
        <FooterSection />
      </ThemeProvider>
    </>
  );
};

export default root;

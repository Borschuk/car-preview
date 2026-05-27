import { createContext, useState } from "react";
import type { ThemeContextType } from "../types/contectType";

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("en");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

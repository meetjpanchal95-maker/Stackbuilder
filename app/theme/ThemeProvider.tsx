"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import {
  defaultThemeMode,
  resolveTheme,
  themeAttribute,
  themeModes,
  themeStorageKey,
  type ResolvedTheme,
  type ThemeMode,
} from "@/app/theme/tokens";

type ThemeContextValue = {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
  availableThemes: readonly ThemeMode[];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme() {
  if (typeof window === "undefined") {
    return defaultThemeMode;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey) as ThemeMode | null;
  return storedTheme && themeModes.includes(storedTheme) ? storedTheme : defaultThemeMode;
}

function applyTheme(mode: ThemeMode) {
  const resolvedTheme = resolveTheme(mode);

  document.documentElement.setAttribute(themeAttribute, resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;

  return resolvedTheme;
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<ThemeMode>(() => readStoredTheme());
  const resolvedTheme = resolveTheme(theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, resolvedTheme]);

  const setTheme = (nextTheme: ThemeMode) => {
    window.localStorage.setItem(themeStorageKey, nextTheme);
    setThemeState(nextTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      availableThemes: themeModes,
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}
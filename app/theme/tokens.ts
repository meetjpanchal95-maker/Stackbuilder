export const themeAttribute = "data-theme";
export const themeStorageKey = "stackbuilder-theme";

export const themeModes = ["light", "dark"] as const;

export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = ThemeMode;

export const defaultThemeMode: ThemeMode = "light";

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode;
}
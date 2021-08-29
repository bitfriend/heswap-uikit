import { darkColors, lightColors } from "../../theme/colors";
import { LuckyChipToggleTheme } from "./types";

export const light: LuckyChipToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: LuckyChipToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};

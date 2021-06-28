import { darkColors, lightColors } from "../../theme/colors";
import { HeswapToggleTheme } from "./types";

export const light: HeswapToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: HeswapToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};

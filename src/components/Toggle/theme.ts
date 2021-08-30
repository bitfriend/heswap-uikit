import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  checkedHandle: lightColors.success,
  uncheckedHandle: lightColors.textSubtle
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  checkedHandle: darkColors.success,
  uncheckedHandle: darkColors.textSubtle
};

import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  checkedHandleColor: lightColors.success,
  uncheckedHandleColor: lightColors.textSubtle
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  checkedHandleColor: darkColors.success,
  uncheckedHandleColor: darkColors.textSubtle
};

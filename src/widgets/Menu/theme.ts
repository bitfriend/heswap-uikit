import { darkColors, lightColors } from "../../theme/colors";
import { MenuTheme } from "./types";

export const light: MenuTheme = {
  borderColor: 'rgba(133, 133, 133, 0.1)',
  topBarColor: lightColors.backgroundAlt,
  leftBarColor: lightColors.backgroundAlt,
  itemColor: lightColors.backgroundAlt
};

export const dark: MenuTheme = {
  borderColor: 'rgba(133, 133, 133, 0.1)',
  topBarColor: darkColors.backgroundAlt,
  leftBarColor: darkColors.backgroundAlt,
  itemColor: darkColors.backgroundAlt
};

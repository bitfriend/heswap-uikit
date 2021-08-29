import { darkColors, lightColors } from "../../theme/colors";
import { ModalTheme } from "./types";

export const light: ModalTheme = {
  background: lightColors.backgroundAlt,
  close: lightColors.background,
};

export const dark: ModalTheme = {
  background: darkColors.backgroundAlt,
  close: darkColors.background,
};

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { dark as darkAlert } from "../components/Alert/theme";
import { dark as darkCard } from "../components/Card/theme";
import { dark as darkHeswapToggle } from "../components/HeswapToggle/theme";
import { dark as darkRadio } from "../components/Radio/theme";
import { dark as darkToggle } from "../components/Toggle/theme";
import { darkNav, darkSidebar } from "../widgets/Menu/theme";
import { dark as darkModal } from "../widgets/Modal/theme";
import { dark as darkTooltip } from "../components/Tooltip/theme";
import base from "./base";
import { darkColors } from "./colors";
var darkTheme = __assign(__assign({}, base), { isDark: true, alert: darkAlert, colors: darkColors, card: darkCard, toggle: darkToggle, nav: darkNav, sidebar: darkSidebar, modal: darkModal, heswapToggle: darkHeswapToggle, radio: darkRadio, tooltip: darkTooltip });
export default darkTheme;

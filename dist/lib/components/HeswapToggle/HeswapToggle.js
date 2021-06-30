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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { HeswapStack, HeswapInput, HeswapLabel } from "./StyledHeswapToggle";
import { scales } from "./types";
var HeswapToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React.createElement(HeswapStack, { scale: scale },
        React.createElement(HeswapInput, __assign({ id: props.id || "heswap-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React.createElement(HeswapLabel, { scale: scale, checked: checked, htmlFor: props.id || "heswap-toggle" },
            React.createElement("div", { className: "heswaps" },
                React.createElement("div", { className: "heswap" }),
                React.createElement("div", { className: "heswap" }),
                React.createElement("div", { className: "heswap" }),
                React.createElement("div", { className: "butter" })))));
};
HeswapToggle.defaultProps = {
    scale: scales.MD,
};
export default HeswapToggle;

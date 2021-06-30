var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { AutoRenewIcon, CogIcon } from "../../../components/Svg";
import { Text } from "../../../components/Text";
import IconButton from "../../../components/Button/IconButton";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: none;\n  margin: 32px 16px;\n  border-radius: 16px;\n  padding: 16px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  margin: 32px 16px;\n  border-radius: 16px;\n  padding: 16px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.sidebar.footerBackground;
});
var RowWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var IconWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background-color: rgb(29, 200, 114);\n"], ["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background-color: rgb(29, 200, 114);\n"])));
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(CogIcon, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(Text, { color: "#fff", marginBottom: "12px" }, "Live Trading Deals"),
        React.createElement(RowWrapper, { style: { marginBottom: '16px' } },
            React.createElement(IconWrapper, null,
                React.createElement(AutoRenewIcon, { color: "#fff" })),
            React.createElement("div", { style: { flex: 1 } },
                React.createElement(Text, { small: true, color: "#fff" }, "Swap"),
                React.createElement(Text, { small: true, color: "rgb(116, 155, 216)" }, "10:15:16 PM")),
            React.createElement("div", { style: { flex: 1, textAlign: 'right' } },
                React.createElement(Text, { small: true, color: "#fff" }, "USD/BTC"),
                React.createElement(Text, { small: true, color: "rgb(29, 200, 114)" }, "$2,198.35"))),
        React.createElement(RowWrapper, null,
            React.createElement(IconWrapper, null,
                React.createElement(AutoRenewIcon, { color: "#fff" })),
            React.createElement("div", { style: { flex: 1 } },
                React.createElement(Text, { small: true, color: "#fff" }, "Swap"),
                React.createElement(Text, { small: true, color: "rgb(116, 155, 216)" }, "10:15:16 PM")),
            React.createElement("div", { style: { flex: 1, textAlign: 'right' } },
                React.createElement(Text, { small: true, color: "#fff" }, "USD/BTC"),
                React.createElement(Text, { small: true, color: "rgb(29, 200, 114)" }, "$2,198.35")))));
};
export default PanelFooter;
var templateObject_1, templateObject_2, templateObject_3;

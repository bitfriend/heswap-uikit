var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { FaCheckCircle, FaMediumM, FaTelegramPlane, FaTwitter, FaYoutube, } from 'react-icons/fa';
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { Button, IconButton } from '../../components/Button';
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: ", "px;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: calc(100% - ", "px);\n  height: ", "px;\n  background-color: ", ";\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: ", "px;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: calc(100% - ", "px);\n  height: ", "px;\n  background-color: ", ";\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED);
}, MENU_HEIGHT, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor;
});
var StyledFlex = styled(Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n"], ["\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var BodyWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var StyledButton = styled(Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: #fff;\n"], ["\n  color: #fff;\n"])));
var StyledCheck = styled(FaCheckCircle)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-right: 8px;\n  fill: ", "\n"], ["\n  margin-right: 8px;\n  fill: ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Menu = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _b = useState(!isMobile), isPushed = _b[0], setIsPushed = _b[1];
    var _c = useState(true), showMenu = _c[0], setShowMenu = _c[1];
    var _d = useState('transparent'), navColor = _d[0], setNavColor = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
                setNavColor('transparent');
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                    setNavColor('rgb(7, 22, 45)');
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { isPushed: isPushed, showMenu: showMenu, bgColor: navColor },
            React.createElement(Flex, null,
                React.createElement(IconButton, { variant: "text" },
                    React.createElement(FaTelegramPlane, { fill: "rgb(116, 155, 216)", size: "24px" })),
                React.createElement(IconButton, { variant: "text" },
                    React.createElement(FaTwitter, { fill: "rgb(116, 155, 216)", size: "24px" })),
                React.createElement(IconButton, { variant: "text" },
                    React.createElement(FaMediumM, { fill: "rgb(116, 155, 216)", size: "24px" })),
                React.createElement(IconButton, { variant: "text" },
                    React.createElement(FaYoutube, { fill: "rgb(116, 155, 216)", size: "24px" }))),
            !!login && !!logout && (React.createElement(StyledFlex, null,
                React.createElement(StyledButton, { variant: "text", startIcon: React.createElement(StyledCheck, null) }, "Certik Audit"),
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile })))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
export default Menu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

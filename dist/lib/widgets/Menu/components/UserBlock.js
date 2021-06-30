var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from 'styled-components';
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
var StyledButton = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border: none;\n  border-radius: 8px;\n  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 600;\n  height: 40px;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: 1;\n  outline: 0px;\n  padding: 0px 16px;\n  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;\n"], ["\n  align-items: center;\n  border: none;\n  border-radius: 8px;\n  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 600;\n  height: 40px;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: 1;\n  outline: 0px;\n  padding: 0px 16px;\n  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;\n"])));
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(StyledButton, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(StyledButton, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect wallet"))));
};
export default React.memo(UserBlock, function (prevProps, nextProps) {
    return prevProps.account === nextProps.account &&
        prevProps.login === nextProps.login &&
        prevProps.logout === nextProps.logout;
});
var templateObject_1;

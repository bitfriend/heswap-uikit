import React, { useState, useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import throttle from "lodash/throttle";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Overlay } from "../../components/Overlay";
import { Flex } from "../../components/Box";
import { useMatchBreakpoints } from "../../hooks";
import AppPanel from "./components/AppPanel";
import AppUserBlock from "./components/AppUserBlock";
import { NavProps } from "./types";
import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { Button, IconButton } from '../../components/Button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BodyWrapper = styled.div<{ isPushed: boolean }>`
  display: flex;
  ${({ theme }) => theme.mediaQueries.nav} {
    position: absolute;
    right: 0;
    width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
    transition: width 0.2s;
  }
`;

const StyledNav = styled.nav<{ isPushed: boolean, showMenu: boolean, bgColor: string }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  transition: top 0.2s;
  display: flex;
  flex-direction: row-reverse; /* when left sidebar is collapsed/expanded, rightmost element should be not shaked */
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: calc(100% - ${({ isPushed }) => (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED)}px);
  height: ${MENU_HEIGHT}px;
  background-color: ${({ bgColor }) => bgColor};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const StyledFlex = styled(Flex)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Inner = styled.div`
  flex-grow: 1;
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const StyledCheck = styled(FaCheckCircle)`
  margin-right: 8px;
  fill: ${({ theme }) => theme.colors.success}
`;

const StyledChevron = styled(IconButton)<{ isPushed: boolean }>`
  width: 32px;
  height: 32px;
  z-index: 30; /* z-index of top bar is 20 */
  ${({ theme }) => theme.mediaQueries.nav} {
    position: fixed;
    left: ${({ isPushed }) => `${(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) - 16}px`};
    top: 12px;
    transition: left 0.2s;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const [navColor, setNavColor] = useState('transparent');
  const refPrevOffset = useRef(window.pageYOffset);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
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
          setNavColor(theme.menu.topBarColor);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [theme.menu.topBarColor]);

  return (
    <Wrapper>
      <AppPanel
        isPushed={isPushed}
        isMobile={isMobile}
        isDark={isDark}
        toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        cakePriceUsd={cakePriceUsd}
        pushNav={setIsPushed}
        links={links}
      />
      <BodyWrapper isPushed={isPushed}>
        <StyledNav isPushed={isPushed} showMenu={showMenu} bgColor={navColor}>
          {!!login && !!logout && (
            <StyledFlex>
              <StyledButton variant="text" startIcon={<StyledCheck />}>
                Certik Audit
              </StyledButton>
              <AppUserBlock account={account} login={login} logout={logout} />
              {profile && <Avatar profile={profile} />}
            </StyledFlex>
          )}
          {isMobile ? (
            <StyledChevron isPushed={isPushed} onClick={() => setIsPushed(value => !value)}>
              {isPushed ? (
                <FaChevronLeft width="16px" style={{ fill: theme.colors.backgroundAlt }} />
              ) : (
                <FaChevronRight width="16px" style={{ fill: theme.colors.backgroundAlt }} />
              )}
            </StyledChevron>
          ) : (
            <Flex pl="40px">
              <IconButton variant="text">
                <FaTelegramPlane fill={theme.colors.textSubtle} size="24px" />
              </IconButton>
              <IconButton variant="text">
                <FaTwitter fill={theme.colors.textSubtle} size="24px" />
              </IconButton>
              <IconButton variant="text">
                <FaMediumM fill={theme.colors.textSubtle} size="24px" />
              </IconButton>
              <IconButton variant="text">
                <FaYoutube fill={theme.colors.textSubtle} size="24px" />
              </IconButton>
            </Flex>
          )}
        </StyledNav>
        <Inner>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      {!isMobile && (
        <StyledChevron isPushed={isPushed} onClick={() => setIsPushed(value => !value)}>
          {isPushed ? (
            <FaChevronLeft width="16px" style={{ fill: theme.colors.backgroundAlt }} />
          ) : (
            <FaChevronRight width="16px" style={{ fill: theme.colors.backgroundAlt }} />
          )}
        </StyledChevron>
      )}
    </Wrapper>
  );
};

export default Menu;

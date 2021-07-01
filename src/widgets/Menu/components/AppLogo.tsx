import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconButton } from '../../../components/Button';
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { AppLogoIcon as LogoWithText } from "../icons";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledFlex = styled(Flex)`
  padding-top: 7px;
  padding-bottom: 7px;
  position: relative;
`;

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const StyledButton = styled(IconButton)`
  position: absolute;
  right: -12px;
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <StyledFlex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Heswap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Heswap home page">
          {innerLogo}
        </StyledLink>
      )}
      <StyledButton onClick={togglePush}>
        {isPushed ? (
          <FaChevronLeft width="16px" style={{ fill: '#fff' }} />
        ) : (
          <FaChevronRight width="16px" style={{ fill: '#fff' }} />
        )}
      </StyledButton>
    </StyledFlex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);

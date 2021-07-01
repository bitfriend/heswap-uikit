import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";

interface Props {
  isPushed: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  height: 64px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
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

const Logo: React.FC<Props> = ({ isPushed, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <Flex
        className="desktop-icon"
        justifyContent="center"
        alignItems="center"
      >
        <LogoIcon
          paddingX={isPushed ? 0 : '16px'}
          marginRight={isPushed ? '24px' : 0}
        />
        {isPushed && (
          <Text color="#fff" fontSize="26px" fontWeight="600">heswap</Text>
        )}
      </Flex>
    </>
  );

  return (
    <Flex justifyContent="center" alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Heswap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Heswap home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed);

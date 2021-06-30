import React from "react";
import styled from "styled-components";
import { AutoRenewIcon, CogIcon } from "../../../components/Svg";
import { Text } from "../../../components/Text";
import IconButton from "../../../components/Button/IconButton";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  margin: 32px 16px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.leftBar.footerBackground};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgb(29, 200, 114);
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <Text color="#fff" marginBottom="12px">Live Trading Deals</Text>
      <RowWrapper style={{ marginBottom: '16px' }}>
        <IconWrapper>
          <AutoRenewIcon color="#fff" />
        </IconWrapper>
        <div style={{ flex: 1 }}>
          <Text small color="#fff">Swap</Text>
          <Text small color="rgb(116, 155, 216)">10:15:16 PM</Text>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <Text small color="#fff">USD/BTC</Text>
          <Text small color="rgb(29, 200, 114)">$2,198.35</Text>
        </div>
      </RowWrapper>
      <RowWrapper>
        <IconWrapper>
          <AutoRenewIcon color="#fff" />
        </IconWrapper>
        <div style={{ flex: 1 }}>
          <Text small color="#fff">Swap</Text>
          <Text small color="rgb(116, 155, 216)">10:15:16 PM</Text>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <Text small color="#fff">USD/BTC</Text>
          <Text small color="rgb(29, 200, 114)">$2,198.35</Text>
        </div>
      </RowWrapper>
    </Container>
  );
};

export default PanelFooter;

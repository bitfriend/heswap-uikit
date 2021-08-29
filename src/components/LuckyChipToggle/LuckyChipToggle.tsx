import React from "react";
import { LuckyChipStack, LuckyChipInput, LuckyChipLabel } from "./StyledLuckyChipToggle";
import { LuckyChipToggleProps, scales } from "./types";

const LuckyChipToggle: React.FC<LuckyChipToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <LuckyChipStack scale={scale}>
    <LuckyChipInput id={props.id || "luckychip-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <LuckyChipLabel scale={scale} checked={checked} htmlFor={props.id || "luckychip-toggle"}>
      <div className="luckychips">
        <div className="luckychip" />
        <div className="luckychip" />
        <div className="luckychip" />
        <div className="butter" />
      </div>
    </LuckyChipLabel>
  </LuckyChipStack>
);

LuckyChipToggle.defaultProps = {
  scale: scales.MD,
};

export default LuckyChipToggle;

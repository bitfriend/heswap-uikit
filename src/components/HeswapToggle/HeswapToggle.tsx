import React from "react";
import { HeswapStack, HeswapInput, HeswapLabel } from "./StyledHeswapToggle";
import { HeswapToggleProps, scales } from "./types";

const HeswapToggle: React.FC<HeswapToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <HeswapStack scale={scale}>
    <HeswapInput id={props.id || "heswap-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <HeswapLabel scale={scale} checked={checked} htmlFor={props.id || "heswap-toggle"}>
      <div className="heswaps">
        <div className="heswap" />
        <div className="heswap" />
        <div className="heswap" />
        <div className="butter" />
      </div>
    </HeswapLabel>
  </HeswapStack>
);

HeswapToggle.defaultProps = {
  scale: scales.MD,
};

export default HeswapToggle;

import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 336.41 337.42" {...props}>
    <g>
      <path d="M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z" />
      <path d="M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z" />
      <path d="M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z" />
      <path d="M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z" />
    </g>
  </Svg>
);

export default Icon;

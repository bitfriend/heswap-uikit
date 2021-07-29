import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="-4 -4 28 28" {...props}>
    <g transform="translate(-4, 20) scale(0.1, -0.1)">
      <path d="M65 216 l-50 -23 53 -27 52 -26 52 26 52 26 -34 18 c-58 29 -73 30 -125 6z" />
      <path d="M0 121 l0 -59 55 -30 55 -30 0 68 0 68 -49 21 c-27 11 -52 21 -55 21 -3 0 -6 -27 -6 -59z m97 -13 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-27 -14 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z m-30 -20 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z" />
      <path d="M178 157 l-48 -21 0 -68 0 -69 53 28 52 28 3 63 c2 34 -1 62 -5 61 -4 -1 -29 -10 -55 -22z m-18 -47 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m50 -25 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z" />
    </g>
  </Svg>
);

export default Icon;

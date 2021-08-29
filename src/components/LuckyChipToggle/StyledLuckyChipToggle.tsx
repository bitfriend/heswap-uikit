import styled from "styled-components";
import { scales, LuckyChipToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    luckychipSize: "16px", // The size of a luckychip (the handle)
    travelDistance: "16px", // How far luckychips should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    luckychipThickness: "1px", // Bottom shadow of a luckychip
    luckychipTwoOffset: "0px", // luckychips don't look good when they are concentric
    luckychipThreeOffset: "-3px", // so luckychip 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Widht and
    butterHeight: "5px", // Height of a butter block on top of luckychips
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    luckychipSize: "32px",
    travelDistance: "34px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    luckychipThickness: "2px",
    luckychipTwoOffset: "-3px",
    luckychipThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.MD }: LuckyChipToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const LuckyChipStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .luckychips {
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .luckychip {
    background: #e27c31;
    border-radius: 50%;
    width: ${getScale("luckychipSize")};
    height: ${getScale("luckychipSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("luckychipThickness")} 0 ${getScale("luckychipThickness")} #fbbe7c;
  }

  .luckychip:nth-child(1) {
    background: ${({ theme }) => theme.luckychipToggle.handleBackground};
    box-shadow: 0 ${getScale("luckychipThickness")} 0 ${getScale("luckychipThickness")}
      ${({ theme }) => theme.luckychipToggle.handleShadow};
  }

  .luckychip:nth-child(2) {
    left: 0;
    top: ${getScale("luckychipTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .luckychip:nth-child(3) {
    top: ${getScale("luckychipThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .luckychip:nth-child(3):before,
  .luckychip:nth-child(3):after {
    content: "";
    position: absolute;
    background: #ef8927;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .luckychip:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .luckychip:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }

  .butter {
    width: ${getScale("butterWidth")};
    height: ${getScale("butterHeight")};
    background: #fbdb60;
    top: ${getScale("butterTop")};
    left: ${getScale("butterLeft")};
    position: absolute;
    border-radius: ${getScale("butterRadius")};
    box-shadow: 0 ${getScale("butterThickness")} 0 ${getScale("butterThickness")} #d67823;
    transform: scale(0);
    transition: 0.2s ease;
  }
`;

export const LuckyChipInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .luckychips {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .luckychip:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${getScale("luckychipThickness")} 0 ${getScale("luckychipThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .luckychip:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .luckychip:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;

export const LuckyChipLabel = styled.label<LuckyChipToggleProps>`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;

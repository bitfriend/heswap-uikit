import styled from "styled-components";
import Button from "./Button";
import { IconButtonProps, PolymorphicComponent } from "./types";

const getWidth = (props: IconButtonProps): string => {
  const { width, scale } = props;
  if (!width) {
    if (scale === 'sm' || scale === 'xs') {
      return '32px';
    }
    return '48px';
  }
  return width;
}

const IconButton: PolymorphicComponent<IconButtonProps, "button"> = styled(Button)<IconButtonProps>`
  padding: 0;
  width: ${getWidth};
`;

export default IconButton;

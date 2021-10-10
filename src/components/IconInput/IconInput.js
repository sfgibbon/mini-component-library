import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style =
    size === "large"
      ? {
          "--fontSize": 18 / 16 + "rem",
          "--height": "36px",
          "--iconHeight": "24px",
          "--borderWidth": "2px",
          iconSize: 24,
        }
      : {
          "--fontSize": 14 / 16 + "rem",
          "--height": "24px",
          "--iconHeight": "16px",
          "--borderWidth": "1px",
          iconSize: 16,
        };

  return (
    <Wrapper style={{ ...style, "--width": width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <Input placeholder={placeholder}></Input>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  max-width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--iconSize);
`;

const Input = styled.input`
  height: var(--height);
  width: var(--width);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--borderWidth) solid black;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;

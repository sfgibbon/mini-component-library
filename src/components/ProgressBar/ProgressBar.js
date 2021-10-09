/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    height: "24px",
    padding: "4px 4px",
    radius: "8px",
  },
  medium: {
    height: "12px",
    padding: "",
    radius: "4px",
  },
  small: {
    height: "8px",
    padding: "",
    radius: "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  value = Math.max(0, Math.min(100, value));
  return (
    <Wrapper size={size} value={value}>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
      ></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: ${(p) => SIZES[p.size].height};
  padding: ${(p) => SIZES[p.size].padding};
  border-radius: ${(p) => SIZES[p.size].radius};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  & > div {
    width: ${(p) => p.value + "%"};
    border-top-left-radius: "4px";
    border-bottom-left-radius: "4px";
    border-top-right-radius: ${(p) =>
      p.value < 98 ? 0 : p.value < 99 ? "2px" : "4px"};
    border-bottom-right-radius: ${(p) =>
      p.value < 98 ? 0 : p.value < 99 ? "2px" : "4px"};
    background-color: ${COLORS.primary};
    height: 100%;
  }
`;

export default ProgressBar;

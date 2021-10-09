/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  value = Math.max(0, Math.min(100, value));
  const style = STYLES[size] || STYLES.medium;
  return (
    <Wrapper
      size={size}
      value={value}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--width": `${value}%`,
        "--height": `${style.height}px`,
        "--padding": `${style.padding}px`,
        "--radius": `${style.radius}px`,
      }}
    >
      <InnerWrapper>
        <Inner>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Inner>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerWrapper = styled.div`
  border-radius: 4px;

  /* trim inner bar at ends */
  overflow: hidden;
`;

const Inner = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;

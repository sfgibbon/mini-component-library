import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  font-family: Roboto, sans-serif;
  height: 43px;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  // the arrow
  /* appearance: none; */

  &:focus {
    outline: solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;

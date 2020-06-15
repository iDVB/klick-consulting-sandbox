import React from "react";
import styled from "styled-components";

const Section = props => <Component {...props} />;

const Component = styled.div`
  background: ${({ color }) => color};
`;

export default Section;

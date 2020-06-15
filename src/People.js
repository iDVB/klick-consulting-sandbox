import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const People = props => {
  return (
    <Component {...props}>
      <Circle id={props.id} />
    </Component>
  );
};

const Circle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #993399;
  border-radius: 100%;
  z-index: 5;
`;

const Component = styled(Box)`
  position: relative;
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default People;

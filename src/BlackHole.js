import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const BlackHole = props => {
  return (
    <Component {...props}>
      <Circle />
      <BG>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        nisl convallis, placerat dui in, porttitor nisl. Morbi aliquet ut lacus
        sit amet facilisis. Pellentesque cursus tortor id eros vestibulum, ut
        placerat turpis tincidunt. Vestibulum tristique ultrices urna nec
        facilisis. Vivamus sapien leo, aliquam id volutpat at, gravida nec sem.
        Donec luctus enim quis interdum condimentum. Aenean felis nibh,
        porttitor eu lorem vel, aliquet vehicula lectus. Suspendisse potenti.
        Phasellus nec lacus eget quam lobortis porta. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aliquam vitae nisl convallis, placerat dui
        in, porttitor nisl. Morbi aliquet ut lacus sit amet facilisis.
        Pellentesque cursus tortor id eros vestibulum, ut placerat turpis
        tincidunt. Vestibulum tristique ultrices urna nec facilisis. Vivamus
        sapien leo, aliquam id volutpat at, gravida nec sem. Donec luctus enim
        quis interdum condimentum. Aenean felis nibh, porttitor eu lorem vel,
        aliquet vehicula lectus. Suspendisse potenti.
      </BG>
    </Component>
  );
};

const BG = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  color: silver;
`;

const Circle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #993399;
  border-radius: 100%;
  z-index 5;
`;

const Component = styled(Box)`
  position: relative;
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default BlackHole;

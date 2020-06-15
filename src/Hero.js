import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroContainer>
      <Heading>Cool things happening.</Heading>
    </HeroContainer>
  );
}

const Heading = styled.h1`
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0;
  padding: 0;
`;

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
`;

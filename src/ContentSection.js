import React from "react";
import { Container, Box } from "@material-ui/core";
import styled from "styled-components";

const ContentSection = ({
  bgcolor = "black",
  color = "white",
  flexDirection = "row",
  id
}) => (
  <Box color={color} bgcolor={bgcolor} py={10} px={5} minHeight="500">
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="space-between"
        textAlign="center"
        flexDirection={flexDirection}
      >
        <Title id={id}>
          The
          <br />
          Cool
          <br />
          <span>Thing Here</span>
        </Title>
        <Box py={5} px={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet ligula quis enim lacinia suscipit in quis mi. Suspendisse
          potenti. Phasellus sollicitudin congue neque. Maecenas et eros sed
          nunc mattis rhoncus.
        </Box>
      </Box>
    </Container>
  </Box>
);

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  span {
    white-space: nowrap;
  }
`;

export default ContentSection;

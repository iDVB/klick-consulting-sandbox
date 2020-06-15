import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const MediaBlock = ({ src, id, ...rest }) => {
  return (
    <Component display="flex" {...rest}>
      <div>
        <h3>Test Block</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          nisl convallis, placerat dui in, porttitor nisl. Morbi aliquet ut
          lacus sit amet facilisis.
        </p>
      </div>
      <img src={src} alt="thing" id={id} width="100%" />
    </Component>
  );
};

const Component = styled(Box)`
  height: 60vh;
  margin: 90px 0;
`;

export default MediaBlock;

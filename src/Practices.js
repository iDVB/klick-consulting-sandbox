import React, { useLayoutEffect } from "react";
import { Back } from "gsap";
import styled from "styled-components";

const Practices = ({ timeline }) => {
  useLayoutEffect(() => {
    console.log({ timeline });
    timeline && handleAnimation(timeline);
  }, [timeline]);

  return (
    <Container>
      <LabelList className="labellist">
        <Label>Medical Science</Label>
        <Label>Strategic Design</Label>
        <Label>Data Science</Label>
        <Label>Behavioral Science</Label>
        <Label>Business</Label>
        <Label>Engineering Science</Label>
      </LabelList>
      <Stage version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor="#40204c" />
            <stop offset="40%" stopColor="#a3225c" />
            <stop offset="100%" stopColor="#e24926" />
          </linearGradient>
        </defs>
        <BlobGroup>
          <Blob className="blob1" cx="0" cy="0" r="40" />
          <Blob className="blob2" cx="0" cy="0" r="40" />
          <Blob className="blob3" cx="0" cy="0" r="40" />
          <Blob className="blob4" cx="0" cy="0" r="40" />
          <Blob className="blob5" cx="0" cy="0" r="40" />
          <Blob className="blob6" cx="0" cy="0" r="40" />
          <Blob className="blob10" cx="0" cy="0" r="100" />
        </BlobGroup>
      </Stage>
    </Container>
  );
};

const handleAnimation = tl => {
  tl.to(
    ".blob1",
    {
      x: "-25%",
      y: "-10%",
      duration: 1,
      ease: Back.easeOut.config(1.7)
    },
    0
  );
  tl.to(
    ".blob2",
    {
      x: "25%",
      y: "-10%",
      duration: 1,
      ease: Back.easeOut.config(1.7)
    },
    0
  );
  tl.to(
    ".blob3",
    {
      x: "25%",
      y: "10%",
      duration: 1,
      ease: Back.easeOut.config(1.7)
    },
    0
  );
  tl.to(
    ".blob4",
    {
      x: "-25%",
      y: "10%",
      duration: 1,
      ease: Back.easeOut.config(1.7)
    },
    0
  );
  tl.to(
    ".blob5",
    {
      x: "0%",
      y: "20%",
      duration: 1,
      ease: Back.easeOut.config(1.7)
    },
    0
  );
  tl.to(
    ".blob6",
    {
      x: "0%",
      y: "-20%",
      duration: 1,
      ease: Back.easeOut.config(1.7)
    },
    0
  );
  tl.to(
    ".blob10",
    {
      duration: 0.3,
      scale: 0.2,
      opacity: 0,
      transformOrigin: "center center"
    },
    0.001
  );
  tl.from(".labellist > li", {
    width: 0,
    duration: 1
  });
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Label = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  white-space: nowrap;
  overflow: hidden;
`;
const LabelList = styled.ul`
  position: absolute;
  width: 100%;
  height: 100%;
  list-style: none;
  z-index: 2;
  margin: 0;
  padding: 0;

  ${Label}:nth-child(1) {
    top: 40%;
    left: 75%;
  }
  ${Label}:nth-child(2) {
    top: 30%;
  }
  ${Label}:nth-child(3) {
    top: 60%;
    left: 75%;
  }
  ${Label}:nth-child(4) {
    top: 40%;
    left: 25%;
  }
  ${Label}:nth-child(5) {
    top: 70%;
  }
  ${Label}:nth-child(6) {
    top: 60%;
    left: 25%;
  }
`;

const Stage = styled.svg`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

const BlobGroup = styled.g`
  -webkit-filter: url("#goo");
  filter: url("#goo");
  transform: translate(50%, 50%);
`;
const Blob = styled.circle`
  fill: #993399;
  transform-origin: 0% 0%;
`;

export default Practices;

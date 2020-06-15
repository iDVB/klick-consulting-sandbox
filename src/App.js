import React, { useLayoutEffect } from "react";
import { Box } from "@material-ui/core";

import "./styles.css";
import styled from "styled-components";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useInstance from "./useInstance";

import MediaBlock from "./MediaBlock";
import BlackHole from "./BlackHole";
import Hero from "./Hero";
import People from "./People";
import Blurb from "./Blurb";
import Practices from "./Practices";
import ContentSection from "./ContentSection";
import Section from "./Section";

export default function App() {
  const timeline2 = useInstance(() => gsap.timeline({ paused: true }));

  useLayoutEffect(() => {
    handleAnimation(timeline2);
  }, [timeline2]);

  return (
    <div className="App" id="app">
      <Circle id="circle" />
      <Hero />
      <Section color="black">
        <Blurb />
        <People id="people-circle" />
      </Section>
      <ContentSection id="target1" />
      <ContentSection flexDirection="row-reverse" id="target2" />
      <ContentSection flexDirection="column" id="target3" />
      <CircleSection color="white" id="circleSection">
        <Practices timeline={timeline2} />
      </CircleSection>
      <Section color="black" id="scene3">
        <Circle3 id="circle3" />
        <MediaBlock
          src="https://picsum.photos/id/200/350/900/"
          flexDirection="row-reverse"
          id="target4"
        />
        <MediaBlock src="https://picsum.photos/id/230/350/900/" id="target5" />
        <BlackHole />
      </Section>
    </div>
  );
}

const handleAnimation = timeline2 => {
  const circle = document.getElementById("circle");
  const circleRect = circle.getBoundingClientRect();
  // const peopleCircleRect = document.getElementById("people-circle");
  const appRect = document.getElementById("app").getBoundingClientRect();
  const target1Rect = document
    .getElementById("target1")
    .getBoundingClientRect();
  const target2Rect = document
    .getElementById("target2")
    .getBoundingClientRect();
  const target3Rect = document
    .getElementById("target3")
    .getBoundingClientRect();
  const target4Rect = document
    .getElementById("target4")
    .getBoundingClientRect();
  const target5Rect = document
    .getElementById("target5")
    .getBoundingClientRect();
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MotionPathHelper);

  const tl = gsap.timeline({
    // paused: true
    immediateRender: true,
    scrollTrigger: {
      trigger: ".App",
      start: "top 0%",
      // end: "bottom 100%",
      end: "+=2500",
      markers: true,
      scrub: true
    }
  });
  tl.to("#circle", {
    duration: 20,
    ease: "none",
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 0, y: 500 },
        {
          x: target1Rect.left + target1Rect.width / 2 - window.innerWidth / 2,
          y: target1Rect.top - target1Rect.height / 2 - circleRect.height / 2
        },
        {
          x: target2Rect.left + target2Rect.width / 2 - window.innerWidth / 2,
          y: target2Rect.top - target2Rect.height / 2 - circleRect.height / 2
        },
        {
          x: target3Rect.left + target3Rect.width / 2 - window.innerWidth / 2,
          y: target3Rect.top - target3Rect.height / 2 - circleRect.height / 2
        }
      ],
      curviness: 0.9
    }
  });

  tl.to("#circle", {
    y: 2500,
    duration: 8
  });

  tl.set("#circle", {
    opacity: 0
  });

  tl.set("#circle2", {
    opacity: 1
  });

  gsap.set("#circle2", {
    opacity: 0
  });

  gsap.set("#circle3", {
    opacity: 0
  });

  ScrollTrigger.create({
    animation: timeline2,
    trigger: "#circleSection",
    start: "top 0%",
    end: "+=1000",
    pin: true,
    markers: true,
    scrub: true
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#scene3",
      start: "top 100%",
      end: "bottom 100%",
      markers: true,
      scrub: true
    }
  });

  tl3.to(
    "#circle2",
    {
      // y: 3000,
      opacity: 0
    },
    0
  );

  tl3.to(
    "#circle3",
    {
      // y: 3000,
      opacity: 1
    },
    0
  );

  // tl2.to("#circle2");
  // tl.to("#circle", {
  //   duration: 12,
  //   ease: "none",
  //   motionPath: {
  //     path: [
  //       { x: 0, y: 2500 },
  //       {
  //         x: target4Rect.left + target4Rect.width / 2 - window.innerWidth / 2,
  //         y: target4Rect.top - target4Rect.height / 2 - circleRect.height / 2
  //       },
  //       {
  //         x: target5Rect.left + target5Rect.width / 2 - window.innerWidth / 2,
  //         y: target5Rect.top - target5Rect.height / 2 - circleRect.height / 2
  //       },
  //       {
  //         x: 0,
  //         y: appRect.height - window.innerHeight / 2 - circleRect.height
  //       }
  //     ],
  //     curviness: 0.9
  //   }
  // });
  // tl.to("#circle", {
  //   ease: "none",
  //   duration: 20,
  //   motionPath: {
  //     start: 0.4,
  //     end: 0.7,
  //     path: [{ x: 0, y: 1000 }, { x: -200, y: 1000 }, { x: -200, y: 1700 }]
  //     // align: "#path",
  //     // alignOrigin: [0.5, 0.5],
  //     // autoRotate: 90
  //   }
  // });
  // tl.to("#circle", {
  //   ease: "none",
  //   duration: 30,
  //   motionPath: {
  //     start: 0.7,
  //     path: [{ x: 0, y: 1000 }, { x: -200, y: 1000 }, { x: -200, y: 1700 }]
  //     // align: "#path",
  //     // alignOrigin: [0.5, 0.5],
  //     // autoRotate: 90
  //   }
  // });

  // MotionPathHelper.create("#circle");
};

const Path = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;

  #path {
    stroke-width: 3;
    stroke: red;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background: #993399;
  border-radius: 100%;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle3 = styled.div`
  width: 200px;
  height: 200px;
  background: #993399;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  /* top: -50vh; */
  transform: translate(-50%, calc(-100% - 50vh));
`;

const CircleSection = styled.div`
  height: 100vh;
  position: relative;
`;

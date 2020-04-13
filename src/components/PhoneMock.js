import React from "react";
import styled from "styled-components";

// FOR WIDTH (w), HEIGHT = w * RATIO
const RATIO = 812 / 375;
const NOTCH_HEIGHT_RATIO = 30 / 375;
const NOTCH_WIDTH_RATIO = 209 / 375;

export default function PhoneMock(props) {
  return (
    <IPHONEWRAPPER
      HEIGHT={props.HEIGHT}
      WIDTH={props.WIDTH}
      NOTCH_HEIGHT_RATIO={NOTCH_HEIGHT_RATIO}
      NOTCH_WIDTH_RATIO={NOTCH_WIDTH_RATIO}
      RATIO={RATIO}
    >
      {props.children}
    </IPHONEWRAPPER>
  );
}

// COMPONENTS
const IPHONEWRAPPER = ({ WIDTH, RATIO, NOTCH_HEIGHT_RATIO, children }) => {
  return (
    <StyledContainer WIDTH={WIDTH} RATIO={RATIO}>
      <Notch
        NOTCH_HEIGHT_RATIO={NOTCH_HEIGHT_RATIO}
        NOTCH_WIDTH_RATIO={NOTCH_WIDTH_RATIO}
        RATIO={RATIO}
        WIDTH={WIDTH}
      />
      <div>{children}</div>
    </StyledContainer>
  );
};

const Notch = ({ NOTCH_HEIGHT_RATIO, NOTCH_WIDTH_RATIO, WIDTH, RATIO }) => {
  return (
    <StyledNotchContainer
      NOTCH_HEIGHT_RATIO={NOTCH_HEIGHT_RATIO}
      NOTCH_WIDTH_RATIO={NOTCH_WIDTH_RATIO}
      WIDTH={WIDTH}
      RATIO={RATIO}
    >
      <div />
      <div className="notch" />
      <div />
    </StyledNotchContainer>
  );
};

// STYLING
const StyledContainer = styled.div`
  --w: ${({ WIDTH }) => `${WIDTH}px`};
  --r: ${({ RATIO }) => RATIO};

  height: calc(var(--w) * var(--r));
  width: var(--w);
  border: 4px solid #222323;
  border-radius: calc(40px * var(--r) / 2.4);
  box-shadow: 0px 1px 5px 1px rgb(0, 0, 0, 1) inset;
`;

const StyledNotchContainer = styled.div`
  --nwr: ${({ NOTCH_WIDTH_RATIO }) => NOTCH_WIDTH_RATIO};
  --nhr: ${({ NOTCH_HEIGHT_RATIO }) => NOTCH_HEIGHT_RATIO};
  --r: ${({ RATIO }) => RATIO};
  --w: ${({ WIDTH }) => `${WIDTH}px`};

  display: grid;
  grid-template-columns: auto calc(var(--w) * var(--nwr)) auto;
  height: calc(var(--w) * var(--nhr));
  width: 100%;

  .notch {
    background-color: #222323;
    border-radius: 0px 0px calc(20px * var(--r)) calc(20px * var(--r));
    box-shadow: 0px 1px 4px rgb(0, 0, 0, 1);
  }
`;

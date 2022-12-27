import * as React from "react"
import styled from "styled-components"

export default function MockupAnimations() {
  return (
    <>
      <Wrapper>
        <div className="mockup1"></div>
        <div className="mockup2"></div>
        <div className="mockup3"></div>
        <div className="mockup4"></div>
        <div className="mockup5"></div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  .mockup1 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 0;
    top: 0px;

    background: radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }
`

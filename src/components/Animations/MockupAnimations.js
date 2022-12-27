import * as React from "react"
import styled from "styled-components"

import mockupImg1 from "../../images/animations/mockup1.svg"
import mockupImg2 from "../../images/animations/mockup2.svg"
import mockupImg3 from "../../images/animations/mockup3.svg"
import mockupImg4 from "../../images/animations/mockup4.svg"
import mockupImg5 from "../../images/animations/mockup5.svg"

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

    background: url(${mockupImg1}), radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
    border: 0.273134px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);

    border-radius: 16px;
  }
  .mockup2 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 214px;
    top: 0px;

    background: url(${mockupImg2}),linear-gradient(
      198.85deg,
      #4316db 12.72%,
      #9076e7 54.49%,
      #a2eeff 100.01%
    );
    border: 0.27304px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(21.8432px);

    border-radius: 16.3824px;
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    left: 37px;
    top: 60px;

    background: url(${mockupImg3}),rgba(23, 12, 61, 0.5);
    border: 0.342305px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px);
    border-radius: 6.8461px;
  }

  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    left: 194px;
    top: 262px;

    background: url(${mockupImg4}),rgba(39, 20, 62, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);

    border-radius: 14px;
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 274px;
    left: 616px;
    top: 262px;

    background: url(${mockupImg5}),rgba(39, 20, 62, 0.2);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(27.3844px);

    border-radius: 14px;
  }
`

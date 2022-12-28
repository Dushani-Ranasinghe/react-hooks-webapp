import * as React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimations from "../Animations/MockupAnimations"
import WaveBackground from "../Backgrounds/WaveBackground"
import PurchaseButton from "../Buttons/PurchaseButton"
import { H1, MediumText } from "../Styles/TextStyles"
import { themes } from "./ColorStyles"

export default function HeroSection() {
  return (
    <>
      <Wrapper>
        <WaveBackground />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              Design <br /> and code React apps
            </Title>
            <Description>
              Don't skip design. Learn design and code, by building real apps
              with React and Swift. Complete courses about best tools.
            </Description>
            <PurchaseButton
              title="Start Learning"
              subtitle="120+ hours of videos"
            />
          </TextWrapper>
          <MockupAnimations />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

const animation = keyframes`
    /* from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
      to { opacity: 1; transform: translateY(0px); filter: blur(0px); } */
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`
const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  /* > only select immediate children */
  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``

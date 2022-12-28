import * as React from "react"
import styled from "styled-components"
import MockupAnimations from "../Animations/MockupAnimations"
import WaveBackground from "../Backgrounds/WaveBackground"
import PurchaseButton from "../Buttons/PurchaseButton"
import { H1, MediumText } from "../Styles/TextStyles"
import { themes } from "./ColorStyles"

// import Logo from "../../images/logos/logo.svg"

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
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``

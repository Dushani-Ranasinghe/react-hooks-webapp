import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../Data/menuData"

import logoImg from "../images/logos/logo.svg"
import MenuButton from "./Buttons/MenuButton"
import MenuTooltip from "./tooltips/MenuTooltip"
import hamburgerImg from "../images/icons/hamburger.svg"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  return (
    <Wrapper>
      <Link to="/">
        <img src={logoImg} alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton item={{ title: "", icon: hamburgerImg, link: "" }} />
        </HamburgerWrapper>
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  @media (max-width: 768px) {
  top: 30px;
}
@media (max-width: 450px) {
	top: 20px;
  padding: 0 20px;
}
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    grid-template-columns: auto;
    > a {
      display: none;
    }
  }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

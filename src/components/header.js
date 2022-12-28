import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../Data/menuData"

import logoImg from "../images/logos/logo.svg"
import MenuButton from "./Buttons/MenuButton"

export default function Header() {
  return (
    <Wrapper>
    <Link to="/">
      <img src={logoImg} alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
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
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`

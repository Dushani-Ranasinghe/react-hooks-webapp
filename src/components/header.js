import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logoImg from "../images/logos/logo.svg"
import courseImg from "../images/icons/courses.svg"
import tutorialsImg from "../images/icons/tutorials.svg"
import pricingImg from "../images/icons/pricing.svg"
import searchImg from "../images/icons/search.svg"
import accountImg from "../images/icons/account.svg"

const menuData = [
  { title: "Courses", icon: courseImg, link: "/courses" },
  {
    title: "Tutorials",
    icon: tutorialsImg,
    link: "/tutorials",
  },
  { title: "Pricing", icon: pricingImg, link: "/pricing" },
  { title: "", icon: searchImg, link: "/search" },
  { title: "", icon: accountImg, link: "/account" },
]

export default function Header() {
  return (
    <Wrapper>
      <img src={logoImg} alt="logo" />
      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          </Link>
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
  grid-template-columns: repeat(5, auto);
`
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

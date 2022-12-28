import * as React from "react"
import { Link } from "gatsby"
import courseImg from "../images/icons/courses.svg"
import tutorialsImg from "../images/icons/tutorials.svg"
import pricingImg from "../images/icons/pricing.svg"

const menuData = [
  { title: "Courses", icon: courseImg, link: "/courses" },
  {
    title: "Tutorials",
    icon: tutorialsImg,
    link: "/tutorials",
  },
  { title: "Pricing", icon: pricingImg, link: "/pricing" },
]

export default function Header() {
  return (
    <header>
      {menuData.map((item,index) => (
        <Link to={item.link} key={index}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </Link>
      ))}
    </header>
  )
}

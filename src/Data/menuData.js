import courseImg from "../images/icons/courses.svg"
import tutorialsImg from "../images/icons/tutorials.svg"
import pricingImg from "../images/icons/pricing.svg"
import searchImg from "../images/icons/search.svg"
import accountImg from "../images/icons/account.svg"

import profileImg from "../images/icons/profile.svg"
import settingImg from "../images/icons/settings.svg"
import signoutImg from "../images/icons/signout.svg"

export const menuData = [
  { title: "Courses", icon: courseImg, link: "/courses" },
  {
    title: "Tutorials",
    icon: tutorialsImg,
    link: "/tutorials",
  },
  { title: "Pricing", icon: pricingImg, link: "/pricing" },
  { title: "", icon: searchImg, link: "/search" },
  { title: "", icon: accountImg, link: "/account" }
]

export const tooltipData = [
    { title: "Profile", icon: profileImg, link: "/profile" },
    { title: "Settings", icon: settingImg, link: "/settings" },
    { title: "Sign out", icon: signoutImg, link: "/logout" },
  ]
import { createGlobalStyle } from "styled-components"
import { themes } from "../Sections/ColorStyles"

export const GlobalStyles = createGlobalStyle`
body{
    background: ${themes.light.backgroundColor};

    @media (prefers-color-scheme: dark) {
	background: ${themes.dark.backgroundColor};
}
}
`

import theme from './../styles/theme'

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    name: string
    colors: {
      background: string
      text: string
      contrast: string
    },
  }
}

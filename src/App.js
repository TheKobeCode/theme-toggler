import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <h2>Theme toggler</h2>
    </ThemeProvider>
  )
}

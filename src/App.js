import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { lightTheme } from './styles/themes/lightTheme'
import { darkTheme } from './styles/themes/darkTheme'
import { SampleComponent } from './components/SampleComponent'

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <SampleComponent />
    </ThemeProvider>
  )
}

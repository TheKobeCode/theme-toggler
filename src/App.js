import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { lightTheme } from './styles/themes/lightTheme'
import { darkTheme } from './styles/themes/darkTheme'
import { SampleComponent } from './components/SampleComponent'

export const App = () => {
  const [theme, setTheme] = useState('light')
  const [active, setActive] = useState(false)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setActive(true)
    } else {
      setTheme('light')
      setActive(false)
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <SampleComponent onToggle={toggleTheme} active={active} />
    </ThemeProvider>
  )
}

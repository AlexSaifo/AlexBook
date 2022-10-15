import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import NavBar from './components/Bars/NavBar'
import SideBar from './components/Bars/SideBar'
import RightBar from './components/Bars/RightBar'
import Feed from './components/Feed'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Add from './components/UI/Add'

export default function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    setMode,
    mode
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

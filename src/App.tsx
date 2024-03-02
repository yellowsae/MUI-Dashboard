import type { PaletteMode } from '@mui/material'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import NavBar from './components/NavBar'
import AddBar from './components/Add'

/**
 * Stack -
 *  - row column
 *  - 或者反转
 */

function App() {
  const [mode, setMode] = useState<PaletteMode>('light')

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <NavBar />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddBar />
      </Box>
    </ThemeProvider>

  )
}

export default App

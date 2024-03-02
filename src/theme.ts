import type { Theme, ThemeOptions } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

interface CustomPaletteOptions extends ThemeOptions {
  palette: ThemeOptions['palette'] & {
    otherColor: {
      main: string
    }
  }
}

// 使用类型断言 - 把 otherColor 加到 theme 类型中
export const theme: Theme = createTheme({
  // 定义 theme 中的颜色
  palette: {
    secondary: {
      main: '#15c630',
    },
    otherColor: {
      main: '#999',
    },
  },
} as CustomPaletteOptions)

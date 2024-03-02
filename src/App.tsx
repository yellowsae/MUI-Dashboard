import { Button, Stack, Typography, styled } from '@mui/material'
import { Add, Settings } from '@mui/icons-material'

/**
 * Stack - 页面布局组件
 * Typography - 对写原生标签的组件重新以MUI的组件方式定义
 * styled - 为组件定义样式 自定义样式  - 等同于组件中设置 sx={{ }} 属性
 */

// (({ theme }) => ({  })) 使用 theme
// eslint-disable-next-line unused-imports/no-unused-vars
const BlueButton = styled(Button)(({ theme }) => ({
  'backgroundColor': 'skyblue',
  'color': '#888',
  'margin': 5,
  '&:hover': {
    backgroundColor: 'lightblue',
  },
  '&:disabled': {
    backgroundColor: 'gray',
    color: 'white',
  },
}))

function App() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<Settings></Settings>}
        >
          Contained
        </Button>
        <Button variant="contained" color="success" startIcon={<Add></Add>}>Contained</Button>
        <Button variant="outlined" disabled>Outlined</Button>
      </Stack>
      {/* 页面渲染是 p 标签, 不是 h1 标签, 这是因为 h1 标签太大了, 不适合在页面上显示, 所以使用 p 标签,  */}
      {/* 这个组件的功能 Typography :  */}
      <Typography variant="h1">
        Hi , This Hear
      </Typography>

      <Button
        variant="contained"
        disabled
        sx={{
          'backgroundColor': 'skyblue',
          'color': '#888',
          'margin': 5,
          '&:hover': {
            backgroundColor: 'lightblue',
          },
          '&:disabled': {
            backgroundColor: 'gray',
            color: 'white',
          },
        }}
      >
        {' '}
        This is Containerd Button
        {' '}
      </Button>

      <BlueButton variant="contained">This is Blue Button </BlueButton>
    </div>
  )
}

export default App

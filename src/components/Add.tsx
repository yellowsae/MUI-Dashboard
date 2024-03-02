import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { useState } from 'react'

const StyleModel = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
  marginTop: '20px',
})

function AddBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: '1000',
        }}
      >
        <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
          <Add />
        </Fab>
      </Tooltip>

      <StyleModel
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor="background.default" color="text.primary" width={400} height={280} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray"> Create post </Typography>
          <UserBox>
            <Avatar sx={{ bgcolor: 'red' }} src="https://mui.com/static/images/avatar/1.jpg" aria-label="recipe"></Avatar>
            <Typography fontWeight={500}> Hidie </Typography>
          </UserBox>

          <TextField
            sx={{
              width: '100%',
            }}
            id="standard-multiline-static"
            multiline
            placeholder="What is on your mind ? "
            rows={3}
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions></EmojiEmotions>
            <Image color="secondary"></Image>
            <VideoCameraBack color="success"></VideoCameraBack>
            <PersonAdd color="error"></PersonAdd>
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group "
          >
            <Button>Post</Button>
            <Button sx={{ width: '100%' }}>
              <DateRange></DateRange>
            </Button>
          </ButtonGroup>

        </Box>
      </StyleModel>
    </>
  )
}

export default AddBar

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import {
  Avatar,
  Button,
  ButtonGroup,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import { display, Stack } from '@mui/system'
import myAvatar from '../../assest/Avatar.jpg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import GifIcon from '@mui/icons-material/Gif'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import DateRangeIcon from '@mui/icons-material/DateRange'

export default function Add() {
  const [open, setOpen] = useState(false)

  const handleOpen = (e) => {
    setOpen((prev) => {
      return !prev
    })
  }

  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })

  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  })
  return (
    <>
      <Tooltip
        sx={{ position: 'fixed', top: '87%', left: { xs: '10px', md: '65%' } }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{  width: '500px', height: '350px' }}
          borderRadius={5}
          p={3}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant="h5" color={'gray'} textAlign={'center'}>
            Create Post
          </Typography>

          <UserBox>
            <Avatar sx={{ width: '30', height: 'auto' }} src={myAvatar} />
            <Typography variant="span" fontWeight={500}>
              Alex Saifo
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{ width: '100%' }}
          />
          <Stack direction={'row'} gap={2} mt={3} mb={3}>
            <EmojiEmotionsIcon color="primary" sx={{ cursor: 'pointer' }} />
            <GifIcon color="secondary" sx={{ cursor: 'pointer' }} />
            <AddPhotoAlternateIcon color="success" sx={{ cursor: 'pointer' }} />
            <PersonAddAlt1Icon color="error" sx={{ cursor: 'pointer' }} />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

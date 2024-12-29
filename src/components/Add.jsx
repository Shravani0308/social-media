import {  Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import imgg from './img-soc/client-3.jpg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';

const StyledModal =styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});

const UserBox =styled(Box)({
    display:"flex",
    alignItems:"center",
    marginBottom:"20px",
    gap:"10px"
})

const Add = () => {
    const [open,setOpen] =useState(false)
  return (
    <div >
      
      <Tooltip onClick={e=>setOpen(true)}
       title="Delete" >
<Fab color="primary" aria-label="add" sx={{position:"fixed", bottom:20 ,left:10}}>
<AddIcon />
</Fab>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
   <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
   <UserBox>
    <Avatar
    src={imgg}
    sx={{width:30, height:30}}
    ></Avatar>
    <Typography fontWeight={500} variant="span">John Doe</Typography>
   </UserBox>
   <TextField
   id="standard-multiline-static"
   label="Multiline"
   multiline
   rows={3}
   placeholder="What's on your mind?"
   variant="standard"
   />
   <Stack direction="row" gap={1} mt={2} mb={3}>
<EmojiEmotionsIcon color="primary"/>
<PhotoCameraBackIcon color="secondary"/>
<VideoCameraBackIcon color="success"/>
<PersonAddIcon color="error"/>

   </Stack>
   <ButtonGroup variant="contained" aria-label="Basic button group">
  <Button>post</Button>
 
  
</ButtonGroup>
  </Box>
</StyledModal>
    </div>
  )
}

export default Add

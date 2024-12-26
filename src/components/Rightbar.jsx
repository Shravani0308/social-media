import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import imgg from './img-soc/client-2.jpg'
import client from './img-soc/client-3.jpg'
import clients from './img-soc/client-1.jpg'
import photo from './img-soc/fruits.jpg'
import photos from './img-soc/mall.jpg'
import phot from './img-soc/tress.jpg'
import React from 'react';
import member1 from './img-soc/client-4.jpg'
import member2 from './img-soc/client-5.jpg'
import member3 from './img-soc/client-6.jpg'




const Rightbar = () => {
  return (
    <Box  flex={2} p={2}
    sx={{display:{xs:"none" , sm:"block"}}}>
     <Box position="fixed" width={300} >
      <Typography variant='h6'fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={7} sx={{alignItems:"flex-start"}}>
  <Avatar alt="Remy Sharp" src={client} />
  <Avatar alt="Travis Howard" src={clients} />
  <Avatar alt="Cindy Baker" src={imgg}/>
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Travis Howard" src={clients} />
  <Avatar alt="Cindy Baker" src={imgg}/>
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mb={2} mt={2}>
  Latest photos
</Typography >
<ImageList cols={3}   rowHeight={100} gap={5} >
  <ImageListItem>
    <img src={photo} alt="#" />
  </ImageListItem>
  <ImageListItem>
    <img src={photos} alt="#" />
  </ImageListItem>
  <ImageListItem>
    <img src={phot} alt="#" />
  </ImageListItem>
</ImageList>
<Typography variant="h6" fontWeight={100}  mt={2}>
  Latest Conversations
</Typography >
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={member1} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={member2} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={member3} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
     </Box>
    </Box>
  )
}

export default Rightbar

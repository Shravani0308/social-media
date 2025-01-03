
import{AppBar, Box, styled, Toolbar, Typography ,  InputBase, Avatar, Menu, MenuItem,  } from '@mui/material'
import {  Pets} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import  Mail from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import img from './img-soc/client-1.jpg'
import { useState } from 'react';





const StyledToolbar =styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search =styled("div")(({theme}) =>({
backgroundColor:"white",
padding:"0 10px",
borderRadius:50,
width:"40%"
}));

const Icons =styled(Box)(({theme}) =>({
  display:"none",
   gap:"20px",
    alignItems:"center",
     [theme.breakpoints.up("sm")]:{
      display:"flex"
     }
  }));

  const UserBox =styled(Box)(({theme}) =>({
    display:"flex",
     gap:"10px",
      alignItems:"center"
    
    }));
const Navbar = () => {

  const[open, setOpen] = useState(false)
  return (
    <Box sx={{flexGrow:1}}>
    <AppBar position='fixed' >
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>SOCIAL-CONNECT</Typography>
        <Pets sx={{display:{xs:"block",sm:"none"}}}/>
       <Search>< InputBase  placeholder='search...' sx={{width:"100%"}}/></Search>
       <Icons>
   <Badge badgeContent={4} color='error' >
    <Mail />
   </Badge>
   <Badge badgeContent={2} color='error' >
    < NotificationsActiveIcon/>
   </Badge>
   <Avatar 
    sx={{width:30,height:30}}src={img}
    onClick={e=>setOpen(true)} />
       </Icons>

<UserBox  onClick={e=>setOpen(true)}>
<Avatar 
    sx={{width:30,height:30}}src={img}
    />
    <Typography variant='span'>John</Typography>
</UserBox>
        </StyledToolbar>
        <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positined-button'
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={
          {
            vertical:'top',
            horizontal:'right',
          }
        }
        transformOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    </Box>
  )
}

export default Navbar

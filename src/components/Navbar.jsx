
import{AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import {Pets} from '@mui/icons-material';


const StyledToolbar =styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search =styled("div")(({theme}) =>({
backgroundColor:"white",
}));

const Icons =styled(Box)(({theme}) =>({
  backgroundColor:"white",
  }));
const Navbar = () => {
  return (
    <Box sx={{flexGrow:1}}>
    <AppBar position='sticky' >
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>navbar</Typography>
        <Pets sx={{display:{xs:"block",sm:"none"}}}/>
       <Search>search</Search>
       <Icons>icons</Icons>
        </StyledToolbar>
        
  
    </AppBar>
    </Box>
  )
}

export default Navbar

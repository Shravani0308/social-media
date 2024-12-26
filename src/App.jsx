// import {Button} from "@mui/material"

import { Box } from '@mui/material'
import './App.css'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import{Stack } from "@mui/material"
import Navbar from './components/Navbar'



function App() {

 return(

<Box >
  <Navbar/>
  
 <Stack direction="row" spacing={3} justifyContent="space-between">

  <Sidebar/>
  <Feed/>
  <Rightbar/>
  </Stack>
</Box>

 );   
}

export default App

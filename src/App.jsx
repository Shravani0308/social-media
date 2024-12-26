// import {Button} from "@mui/material"

import { Box } from '@mui/material'
import './App.css'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import{Stack } from "@mui/material"
import Navbar from './components/Navbar'
import Add from './components/Add'



function App() {
 return(

<Box >
  <Navbar/>
  <br />
  <br />
  <br />
 <Stack direction="row" spacing={3} justifyContent="space-between">

  <Sidebar/>
  <Feed/>
  <Rightbar/>
  </Stack>
  <Add/>
</Box>

 );   
}

export default App

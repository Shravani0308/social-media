
import { Box } from "@mui/material"
import Post from "./Post"
import Post1 from './Post1' 
import Post2 from './Post2' 




const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Post/>
      <Post1/>
      <Post2/>

    </Box>
  )
}

export default Feed

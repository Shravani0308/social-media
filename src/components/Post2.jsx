import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox,  Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import img from './img-soc/imgg-3.jpg'
import { Favorite, FavoriteBorder,  } from '@mui/icons-material';



const Post2 = () => {
  return (
    <Card sx={{m:"20px",boxShadow:"4px 4px 24px grey"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Deepak"
        subheader="September 24, 2021"
      />
      <CardMedia
        component="img"
        height="20%"
        image ={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Being a reason someone smiles, to embracing diversity and welcoming help, to appreciating the beauty of this world - grow and flourish like flowers do.
        </Typography>
      </CardContent>


      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  )
}

export default Post2

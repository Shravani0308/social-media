import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox,  Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import img from './img-soc/imgg-1.jpg'
import { Favorite, FavoriteBorder,  } from '@mui/icons-material';



const Post1 = () => {
  return (
    <Card sx={{m:"20px",boxShadow:"4px 4px 24px grey", borderRadius:2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jonh "
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image ={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Travel makes one modest. You see what a tiny place you occupy in the world . 
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

export default Post1

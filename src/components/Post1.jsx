import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox,  Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import img from './img-soc/img-2.jpg'
import { Favorite, FavoriteBorder,  } from '@mui/icons-material';



const Post1 = () => {
  return (
    <Card sx={{m:"20px",boxShadow:"4px 4px 24px grey"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "palevioletred" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shravani Avula"
        subheader="October 2, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image ={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        She sprouted love like flowers, grew a garden in her mind, and even on the darkest days, from her smile the sun still shined.” “Be honest, be nice, be a flower not a weed.
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

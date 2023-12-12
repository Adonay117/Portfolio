import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Design() {
  return (
    <Box sx={{ width: 700, height: 650}}>
      <ImageList variant="masonry" cols={2} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: require('../img/bandini.jpg'),
    
    author: 'Bandini Giveaway',
  },
  {
    img: require("../img/flye.jpg"),
   
    author: 'sticker Bottle',
  },
  {
    img: require("../img/antojos.jpg") ,

    author: 'post Antojos',
  },
  {
    img: require("../img/bandini-1.jpg") ,
 
    author: 'post Antojos',
  },
 
  

 
 
];

import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Design() {
  return (
    <Box sx={{ width: 700, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={4} gap={10}>
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
    

  },
  {
    img: require("../img/flye.jpg"),
   

  },
  {
    img: require("../img/antojos.jpg") ,

  
  },
  {
    img: require("../img/bandini-1.jpg") ,
 
  },
 
  

 
 
];

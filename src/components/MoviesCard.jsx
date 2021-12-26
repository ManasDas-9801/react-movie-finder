// import React from 'react'

// function MoviesCard({movie}) {
//     return (
//         <div>
//             <div className="col-12 overflow-hidden mt-3 mb-6 rounded-lg shadow-2xl">
//                 <img src={`http://themoviedb.org/t/p/w500/${movie.poster_path}`} alt="" class="w-full object-cover" height='400px' />
//                 <div className="py-2 font-bold text-black justify-evenly bg-white">
//                     <div className="flex flex-col justify-center text-truncate">
//                        {movie.original_title}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MoviesCard
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Checkbox, Box } from '@mui/material';
import Rating from '@mui/material/Rating';


export default function ActionAreaCard({ movie, selectMovie }) {
  function onChange(event) {
    selectMovie(event.target.checked ? movie : null)
  }
  return (
    <Card sx={{ maxWidth: 500, mt: 4, height: 'auto', paddingBottom:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={`http://themoviedb.org/t/p/w500/${movie.poster_path}`}
          alt="404 not found"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div" className="text-truncate">
            {movie.original_title}
          </Typography>

          <Rating
            name="simple-controlled"
            value={movie.vote_average/2}
            max={5}
            readOnly
            precision={0.5}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="p" className="text-truncate" sx={{ flexGrow: 1 }} >
              👍 {movie.vote_count}
            </Typography>
            <Typography>Mark
              <Checkbox

                onChange={onChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Typography>

          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

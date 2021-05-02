import React, { useState } from 'react';
import './card.css';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import StarIcon from '@material-ui/icons/Star';

export const MoviesCard = (props:any) => {
    const movie = props;
    const { saved, watched } = movie;

    const favouriteIcon = saved === 'True' ? <FavoriteOutlinedIcon />  : <FavoriteBorderOutlinedIcon />;
    const visiblityIcon = watched === 'True' ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />;

    // let [backgroundColor, setBackgroundColor] = useState('');
    
    // setBackgroundColor = () =>{
        
    // }

    function handleSaved(v) {
        console.log("Hi there, user!");
    }

    function handleWatched(v) {
        console.log("Hi there, user!");
    }

    let backgroundColor = "";
    switch(true) {
        case saved == 'True' && watched == 'True':
          backgroundColor = 'background-green';
          break;
        case watched == 'False' && saved == 'True':
          backgroundColor = 'background-orange';
          break;
        case watched == 'True' && saved == 'False':
          backgroundColor = 'background-yellow';
          break;
        case saved == 'False' && watched == 'False':
              backgroundColor = 'background-white';
              break;
        default:
          backgroundColor = '';
    }
    
    return(
        <React.Fragment>
            <div className={"card flex-item " + backgroundColor}>

            <div className="title">
                <button onClick={handleSaved}  className="fav-icon">{favouriteIcon}</button>
                <button onClick={handleWatched} className="vis-icon">{visiblityIcon}</button>
            </div>

            <div className="card-image"> 
                <img 
                className="circular--square movie-image" 
                src={movie.poster}
                onError={(e) => e.currentTarget.src= '/assets/sample_image.jpg'}
                width="150px" />
            </div>

            <div className="ratings">
                (2.5)
            </div>
            
            <div className="stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
        </div>
        </React.Fragment>
);
}

export default MoviesCard;


import React from 'react';
import { MoviesCard } from '../movieCard';
import "./moviesList.css";

interface Movie {
    Title: string;
    Poster: string;
    Ratings: object;
    type: string;
    year: string;
    metascore: string;
    actor: string;
    director: string;
    genre: string;
    Watched: string;
    Saved: string
  }

export const MoviesList:any = (props) => {

    const { movies } = props;

    return (
        <React.Fragment>
            <div className="header">
                Movies ({Object.keys(movies).length})
            </div>
            <div className="flex-container">
                
                    { movies.map((m:Movie) => 
                        <MoviesCard 
                            key={m.Title} 
                            title={m.Title} 
                            poster={m.Poster} 
                            ratings={m.Ratings} 
                            watched={m.Watched} 
                            saved={m.Saved} 
                        />
                    )}
                
            </div>
        </React.Fragment>
    );
}

export default MoviesList;
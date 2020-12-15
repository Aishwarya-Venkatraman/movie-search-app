import React, {useState} from 'react';
import './SearchMovies.css';
import Card from './Card';

export default function SearchMovies() {

    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b79267ff80ca2034aac9d91e0a092af5&language=en-US&query=${movieName}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        } catch(err){
            console.error(err);
        }
    }

    return(
        <div>
            <form className="searchForm" onSubmit={searchMovies}>
                <label className="movieLabel" for="movieName">Movie Name</label>
                <input className="movieName" type="text" name="movieName" 
                    placeholder="i.e. Jurassic Park"
                    value={movieName} onChange={(e) => setMovieName(e.target.value)}/>
                <button type="submit" className="searchButton">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </div> 
        </div>
    );
}
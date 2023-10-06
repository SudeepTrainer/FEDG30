import { useState } from "react";

export default function SearchMovies(){

    const [movieName,setMovieName] = useState("");
    const [movies,setMovies] = useState([]);

    function fetchMovies(event){
        event.preventDefault();
        console.log("fetch movies called");
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=24d1042ae5621a567de03462da33bd83&query=${movieName}&include_adult=false&language=en-US&page=1`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results)) 
    }   

    function handleInput(event){
        console.log(event.target.value);
        setMovieName(event.target.value);
    }

    return(
        <>
            <form className="form" onSubmit={fetchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" name="query" type="text" 
                    placeholder="Enter the movie name"
                    value={movieName} onChange={handleInput}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div>
                {movies.filter(movie=>movie.poster_path!=null).map(movie => 
                    <div key={movie.id}>
                        <h3 >{movie.title}</h3>
                        <img src ={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}/>
                    </div>
                )}
            </div>
        </>
    )
}
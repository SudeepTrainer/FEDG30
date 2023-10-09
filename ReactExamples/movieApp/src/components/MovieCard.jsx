import "./card.css"
export default function MovieCard(props){
    const movie = props.data;
    return(
        <div className="card" key={movie.id}>
            <h3 >{movie.title}</h3>
            <img src ={`https://image.tmdb.org/t/p/w600_and_h900_face${movie.poster_path}`}/>
        </div>
    )
}
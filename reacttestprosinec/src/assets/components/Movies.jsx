
import {MovieCard} from "./MovieCard.jsx";
/*const movies = ["Petr", "Lukáš", "Šimon", "Jenda"];*/
export function Movies(){
    return(
        <>
            <MovieCard imgSRC={"panprstenu.jpg"} title={"Pán Prstenů"} authors={"Peter jackson"} percentage={"100%"}/>
            <MovieCard imgSRC={"matrix.jpg"} title={"Matrix"} authors={"Lilly Wachowski, Lana Wachowski"} percentage={"78%"}/>
            <MovieCard imgSRC={"interstellar.jpg"} title={"Interstellar"} authors={" Christopher Nolan"} percentage={"69%"}/>

{/*            {movies.map((name) => (
                <h5>{name}</h5>
            ))}*/}
        </>
    )
}
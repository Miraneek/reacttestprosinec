import {MovieCard} from "./MovieCard.jsx";

const movies = [{
    imgSCR: "panprstenu.jpg",
    title: "Pán Prstenů",
    authors: "Peter jackson",
    percentage: "100%"
}, {
    imgSCR: "matrix.jpg",
    title: "Matrix",
    authors: "Lilly Wachowski, Lana Wachowski",
    percentage: "78%"
}, {
    imgSCR: "interstellar.jpg",
    title: "Interstellar",
    authors: "Christopher Nolan",
    percentage: "69%"
}];

export function Movies() {
    return (
        <>
            {movies.map((movie) => (
                <MovieCard imgSRC={movie.imgSCR} title={movie.title} authors={movie.authors}
                           percentage={movie.percentage}/>
            ))}
        </>
    )
}
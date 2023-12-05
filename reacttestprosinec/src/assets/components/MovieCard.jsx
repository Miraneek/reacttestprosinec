export function MovieCard({imgSRC,title,authors,percentage}){
    return (
        <section className={"card"}>
            <img src={imgSRC} alt={"Movie image"}/>
            <div className={"middle"}>
                <h4>
                    {title}
                </h4>
                <p>
                    {authors}
                </p>
            </div>
            <h3>
                {percentage}
            </h3>
        </section>
    )
}
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function Detail() {
  const [movie, setMovie] =useState([])
  const {id} = useParams()
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
    setMovie(json.data.movie)
  }  
  useEffect(() => {
    getMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <h1>Detail</h1>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} />
      <h3>{movie.date_uploaded}</h3>
      <h3>{movie.rating}</h3>
      {/* <ul>{movie.genres.map((g) => (
        <li key={g}>{g}</li>
      ))}</ul> */}
    </div>
    )
}

export default Detail
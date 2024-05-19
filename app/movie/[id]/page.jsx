import Image from 'next/image'


const MoviePage = async ({params}) => {
  const movieId = params.id
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=ru`
  )
  const movie = await res.json()
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{maxWidth: '100%', height: '100%'}}
        />
        <div className="">
          <h2 className='text-lg mb-3  font-bold text-amber-600'>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p className=''><span className='font-bold text-amber-600'>Data Released:</span> {movie.release_date || movie.first_air_date}</p>
          <p className=''><span className='font-bold text-amber-600'>Rating:</span> {movie.vote_count}</p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
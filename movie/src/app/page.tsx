import { getAllMovies } from "../apis/movie/route";
import Link from "next/link";
const Home = async () => {
  const movies = await getAllMovies();

  return (
    <div className='grid grid-cols-2 gap-5'>
      {movies &&
        movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.original_title}/${movie.id}`}>
            <div>
              <img
                className='max-w-full rounded-xl shadow'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;

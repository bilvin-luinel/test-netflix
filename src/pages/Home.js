import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/actions/movieAction';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie)

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [])
  if (loading) {
    return <ClipLoader color="#fff" loading={loading} size={150} />

  }
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies} />

    </div>
  )
}

export default Home
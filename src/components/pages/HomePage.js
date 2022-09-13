import React, { Fragment } from 'react';
import MovieList from '../movie/MovieList';

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-10">
        <h2 className="text-3xl font-bold pb-5">Now playing</h2>
        <MovieList></MovieList>  
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="text-3xl font-bold pb-5">Top rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="text-3xl font-bold pb-5">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
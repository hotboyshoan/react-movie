import React, { Fragment } from 'react';
import MovieList from '../movie/MovieList';
import {Button} from '@mui/material'

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
      <section>
        <Button style={{backgroundColor: "#6F5CF1", color: 'white', marginBottom : "20px"}} variant='text' color='success' onClick={() => {
          alert("Hello Hà Anh Nguyễn");
        }}>Demo Material UI</Button>
        <h1>Design by Phạm Văn Hoàn</h1>
      </section>
    </Fragment>
  );
};

export default HomePage;
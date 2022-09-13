import {Fragment} from "react";
import {NavLink,Link, Routes, Route} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./components/pages/HomePage";
import Main from "./components/layout/Main";
import MoviePage from "./components/pages/MoviePage";
import MovieDetailsPage from "./components/movie/MovieDetailsPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={
          <>
            <Banner></Banner>
            <HomePage></HomePage>
          </>
          }></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}> </Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}> </Route>
        </Route>
        
      </Routes>
      {/* <Header></Header>
      <Banner></Banner>
      <HomePage></HomePage> */}
    </Fragment>
  );
}

export default App;

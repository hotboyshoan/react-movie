import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import MovieCard from './MovieCard';
import 'swiper/css';
import useSWR from "swr"
import { apiKey, fetcher } from '../../config';
//https://api.themoviedb.org/3/movie/now_playing?api_key=261a1b74582c8e4dbe0357c9792d72a0&page=1
const MovieList = ({type = "now_playing"}) => {
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`, fetcher);
  const movies = data?.results || [];
  return (
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.map( (item,index) => (
          <SwiperSlide key={item.id}>
              <MovieCard  item={item}></MovieCard>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
  );
};

export default MovieList;
import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { fetcher, apiKey } from '../../config';

const MovieDetailsPage = () => {
  
  const {movieId} = useParams();
  const { data} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
  if(!data) return null;
  const {backdrop_path, genres, title, release_date, vote_average, overview} = data;
  return (
    <>
      { data && 
        <div className="movie-card rounded-lg p-3 bg-slate-800 h-full flex flex-col">
          <img className="w-full h-[350px] object-cover rounded-lg mb-5" src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
          <div className="type-film flex gap-x-4 pb-4">
          {genres.map((item) => (
            <div key={item.id} className="item-type-film p-4 border rounded-lg bg-transparent text-red-700 min-w-[100px] text-center">{item.name}</div>
          ))}
           
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <div className="flex items-center justify-between mb-5">
            <span>{new Date(release_date).getFullYear()}</span>
            <div>{vote_average}</div>
          </div>
          <div>
            {overview}
          </div>
        </div>
      }
    </>
  );
};

export default MovieDetailsPage;
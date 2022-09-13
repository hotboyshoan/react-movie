import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const MovieCard = ({item}) => {
  // let yearRelease = item.release_date.slice(0,4);
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 h-full flex flex-col">
      <img className="w-full h-[250px] object-cover rounded-lg mb-5" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path ? item.backdrop_path : "5P8SmMzSNYikXpxil6BYzJ16611.jpg"}`} alt="" />
      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
      <div className="flex items-center justify-between mb-5">
        <span>{new Date(item.release_date).getFullYear()}</span>
        <div>{item.vote_average}</div>
      </div>
      <Button bgColor="secondary" onClick={() => navigate(`/movie/${item.id}`)} >Watch now</Button>
      {/* <button onClick={() => navigate(`/movie/${item.id}`)} className="py-3 px-6 rounded-lg bg-primary mt-auto">Watch now</button> */}
    </div>
  );
};

export default MovieCard;
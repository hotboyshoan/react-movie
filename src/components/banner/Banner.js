import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../config';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=261a1b74582c8e4dbe0357c9792d72a0`, fetcher);
  
  const movies = data?.results || [];
  // console.log(movies)
  return (
    <section className="banner h-[500px] page-container mb-5 overflow-hidden">
      <Swiper>
      {movies.length > 0 && movies.map((item) => (
        <SwiperSlide key={item.id}>
          <BannerItem item={item}></BannerItem>
        </SwiperSlide> 
      ))}
      </Swiper>
    </section>
  );
};
function BannerItem({item}) {
  const navigate = useNavigate()
  const {backdrop_path, title, id} = item;
  return (
    <div className="w-full h-full bg-white rounded-lg relative">
      <div className="absolute overlay inset-0 rounded-lg bg-white opacity-20"></div>
      <img className="w-full h-full object-cover rounded-lg" alt='' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
      <div className="absolute left-5 bottom-5 w-ful">
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="rounded-lg border p-2 ">Adventrue</span>
          <span className="rounded-lg border p-2">Action</span>
        </div>
        {/* <button className="py-3 px-6 rounded-lg bg-primary font-medium">Watch Now</button> */}
        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>

    </div>
  </div>
  )
}
export default Banner;
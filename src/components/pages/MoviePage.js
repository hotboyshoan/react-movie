import React, { useEffect, useInsertionEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr';
import { fetcher,apiKey } from '../../config';
import useDebounce from '../hooks/useDebounce';
import MovieCard from '../movie/MovieCard';

const itemsPerPage = 20
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`);
  const hanldleFilterChange = (e) => {
    setFilter(e.target.value);
  }
  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;
  console.log(data)
  useEffect(() => {
    if(filterDebounce) {
      console.log(filterDebounce);
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`);
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`)
    }
  }, [filterDebounce, nextPage])
  
  const movies = data?.results || [];
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    if(!data || !data.total_results) return 
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    console.log(event.selected);
    setNextPage(event.selected + 1)
  };
  return (
    <div className="py-10 page-container">
      <div className='flex mb-10 gap-x-4'>
        <div className="flex-1">
          <input onChange={hanldleFilterChange} type="text" className='w-full p-4 bg-slate-700 rounded-lg' placeholder='Searching....' />
        </div>
        <button className='p-4 bg-primary rounded-lg' >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      {loading && <div className='w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent mx-auto animate-spin mb-10'></div>}
      <div className="movie-list grid grid-cols-3 gap-4">
        {movies.length > 0 && movies.map( (item,index) => (
            <MovieCard key={item.id} item={item}></MovieCard>  
        ))}
      </div>
        <div className="mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>  
      <div className="flex items-center justify-center mt-10 hidden">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        {new Array(pageCount).fill(0).map((item,index) => (
          <span onClick={() => setNextPage(index+1)} className='cursor-pointer inline-block bg-white px-4 py-2 mx-4 border rounded-sm text-slate-900'>{index+1}</span>
        ))}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
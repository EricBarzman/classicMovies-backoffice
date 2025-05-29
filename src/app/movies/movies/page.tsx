"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import { useMovies } from '@/firebase/movies/movieHooks';
import { MovieDirectorInfoDto } from '@/types/movies.type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function MoviesPage() {

  const [movies, setMovies] = useState<MovieDirectorInfoDto[]>([]);

  const { getMoviesWithDirectorInfo } = useMovies();

  useEffect(() => {
    getMoviesWithDirectorInfo()
      .then((data) => setMovies(data))
      .catch(error => { throw new Error(error) });    
  }, [])

  return (
    <div className='p-6 flex justify-center'>
      <div className='p-2 flex flex-col'>

        <table className='border-collapse text-left'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3'>Title</th>
              <th className='border border-gray-500 p-3'>Director</th>
              <th className='border border-gray-500 p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.title}>
                <td className='border border-gray-500 p-3'>{movie.title}</td>
                <td className='border border-gray-500 p-3'>{movie.director.firstName} {movie.director.lastName}</td>

                {/* {countries.map(country => country.id === director.countryId
                  ? <td key={country.name} className='border border-gray-500 p-3'>{country.name}</td>
                  : null
                )} */}

                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/movies/${movie.id}`} className='p-3'>See</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/movies/add">
          + Create Movie
        </Link>

        <BackButton name="" />
      </div>
    </div>
  )
}

export default MoviesPage
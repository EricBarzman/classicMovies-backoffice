"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import { useGenres } from '@/firebase/movies/genreHooks';
import { GenreDto } from '@/types/movies.type'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function GenresPage() {

  const [genres, setGenres] = useState<GenreDto[]>([{
    id: '',
    label: '',
    slug: '',
  }]);
  
  const { getGenres } = useGenres();

  useEffect(() => {
    getGenres()
      .then((data) => setGenres(data))
      .catch(error => { throw new Error(error) });
  }, [])

  return (
    <div className='p-6 flex justify-center'>
      <div className='p-2 flex flex-col'>

        <table className='border-collapse text-left'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3'>Label</th>
              <th className='border border-gray-500 p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres.map(genre => (
              <tr key={genre.id}>
                <td className='border border-gray-500 p-3'>{genre.label}</td>
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/genres/${genre.id}`} className='p-3'>See</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/genres/add">
          + Create genre
        </Link>

        <BackButton name="" />
      </div>
    </div>
  )
}

export default GenresPage
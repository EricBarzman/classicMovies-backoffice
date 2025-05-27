"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import GenreForm from '@/components/GenreComponents/GenreForm';

function AddGenre() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Genre</h2>
      <GenreForm id={null} />
      <BackButton name='genres' />
    </div>
  )
}

export default AddGenre
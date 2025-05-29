"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import MovieForm from '@/components/MovieComponents/MovieForm';

function AddMovie() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Movie</h2>
      <MovieForm id={null} />
      <BackButton name='movies' />
    </div>
  )
}

export default AddMovie
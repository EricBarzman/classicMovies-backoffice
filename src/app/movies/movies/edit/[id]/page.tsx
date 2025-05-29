"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import MovieForm from '@/components/MovieComponents/MovieForm';
import { useParams } from 'next/navigation';

function EditMovie() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit movie</h2>
      <MovieForm id={id} />
      <BackButton name="movies" />
    </div>
  )
}

export default EditMovie
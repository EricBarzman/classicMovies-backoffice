"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import GenreForm from '@/components/GenreComponents/GenreForm';
import { useParams } from 'next/navigation';

function EditGenre() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit Genre</h2>
      <GenreForm id={id} />
      <BackButton name="genres" />
    </div>
  )
}

export default EditGenre
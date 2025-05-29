"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import DirectorForm from '@/components/DirectorComponents/DirectorForm';
import { useParams } from 'next/navigation';

function EditDirector() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit Director</h2>
      <DirectorForm id={id} />
      <BackButton name="directors" />
    </div>
  )
}

export default EditDirector
"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import DirectorForm from '@/components/DirectorComponents/DirectorForm';

function AddDirector() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Director</h2>
      <DirectorForm id={null} />
      <BackButton name='directors' />
    </div>
  )
}

export default AddDirector
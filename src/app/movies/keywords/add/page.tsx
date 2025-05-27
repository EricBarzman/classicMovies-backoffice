"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import KeywordForm from '@/components/KeywordComponents/KeywordForm';

function AddKeyword() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Keyword</h2>
      <KeywordForm id={null} />
      <BackButton name='keywords' />
    </div>
  )
}

export default AddKeyword
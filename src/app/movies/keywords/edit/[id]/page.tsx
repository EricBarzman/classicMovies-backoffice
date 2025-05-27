"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import KeywordForm from '@/components/KeywordComponents/KeywordForm';
import { useParams } from 'next/navigation';

function EditKeyword() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit Keyword</h2>
      <KeywordForm id={id} />
      <BackButton name="keywords" />
    </div>
  )
}

export default EditKeyword
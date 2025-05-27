"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import CountryForm from '@/components/CountryComponents/CountryForm';
import { useParams } from 'next/navigation';

function EditCountry() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit Country</h2>
      <CountryForm id={id} />
      <BackButton name="countries" />
    </div>
  )
}

export default EditCountry
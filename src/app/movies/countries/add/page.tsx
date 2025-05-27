"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import CountryForm from '@/components/CountryComponents/CountryForm';

function AddCountry() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Country</h2>
      <CountryForm id={null} />
      <BackButton name='countries' />
    </div>
  )
}

export default AddCountry
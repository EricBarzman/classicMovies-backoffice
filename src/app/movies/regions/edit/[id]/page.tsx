"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import RegionForm from '@/components/RegionComponents/RegionForm';
import { useParams } from 'next/navigation';

function EditRegion() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit Region</h2>
      <RegionForm id={id} />
      <BackButton name="regions" />
    </div>
  )
}

export default EditRegion
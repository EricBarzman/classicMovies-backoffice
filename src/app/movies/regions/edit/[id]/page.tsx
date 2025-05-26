"use client";

import RegionBackButton from '@/components/RegionTable/RegionBackButton';
import RegionForm from '@/components/RegionTable/RegionForm';
import { useParams } from 'next/navigation';

function EditRegion() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3'>
      <h2 className='font-semibold text-center'>Edit Region</h2>
      <RegionForm id={id} />
      <RegionBackButton />
    </div>
  )
}

export default EditRegion
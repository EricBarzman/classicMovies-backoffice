"use client";

import RegionBackButton from '@/components/RegionComponents/RegionBackButton';
import RegionForm from '@/components/RegionComponents/RegionForm';

function AddRegion() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Region</h2>
      <RegionForm id={null} />
      <RegionBackButton />
    </div>
  )
}

export default AddRegion
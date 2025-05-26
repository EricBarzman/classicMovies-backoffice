"use client";

import RegionBackButton from '@/components/RegionTable/RegionBackButton';
import RegionForm from '@/components/RegionTable/RegionForm';

function AddRegion() {

  return (
    <div className='flex flex-col items-center w-2/3'>
      <h2 className='font-semibold text-center'>Create new Region</h2>
      <RegionForm id={null} />
      <RegionBackButton />
    </div>
  )
}

export default AddRegion
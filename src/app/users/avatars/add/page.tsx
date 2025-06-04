"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import AvatarForm from '@/components/AvatarComponents/AvatarForm';

function AddAvatar() {

  return (
    <div className='flex flex-col items-center mx-auto w-2/3'>
      <h2 className='font-semibold text-center'>Create new Avatar</h2>
      <AvatarForm id={null} />
      <BackButton name='avatars' />
    </div>
  )
}

export default AddAvatar
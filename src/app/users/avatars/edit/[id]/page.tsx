"use client";

import BackButton from '@/components/UserBackButton/BackButton';
import AvatarForm from '@/components/AvatarComponents/AvatarForm';
import { useParams } from 'next/navigation';

function EditAvatar() {

  const { id } = useParams<{ id: string }>();
  
  return (
    <div className='flex flex-col items-center w-2/3 mx-auto'>
      <h2 className='font-semibold text-center'>Edit Avatar</h2>
      <AvatarForm id={id} />
      <BackButton name="avatars" />
    </div>
  )
}

export default EditAvatar
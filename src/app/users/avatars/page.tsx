"use client";

import BackButton from '@/components/UserBackButton/BackButton';
import { useAvatars } from '@/firebase/users/avatarHooks';
import { AvatarDto } from '@/types/users.type'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function AvatarsPage() {

  const [avatars, setAvatars] = useState<AvatarDto[]>([]);
  
  const { getAvatars } = useAvatars();

  useEffect(() => {
    getAvatars()
      .then((data) => setAvatars(data))
      .catch(error => { throw new Error(error) });
  }, [])

  return (
    <div className='p-6 flex justify-center'>
      <div className='p-2 flex flex-col'>

        <table className='border-collapse text-left'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3'>Id</th>
              <th className='border border-gray-500 p-3'>Image path</th>
              <th className='border border-gray-500 p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {avatars.map(avatar => (
              <tr key={avatar.id}>
                <td className='border border-gray-500 p-3'>{avatar.avatarId}</td>
                <td className='border border-gray-500 p-3'>{avatar.get_image}</td>
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/users/avatars/${avatar.id}`} className='p-3'>See</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/users/avatars/add">
          + Create avatar
        </Link>

        <BackButton name="" />
      </div>
    </div>
  )
}

export default AvatarsPage
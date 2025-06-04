import { AvatarDto } from '@/types/users.type'
import Link from 'next/link'

function AvatarTable({ id, avatar }: { id : string, avatar: AvatarDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Avatar ID</th>
          <th className='border border-gray-500 p-3'>Image path</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-500 p-3'>{avatar.avatarId}</td>
          <td className='border border-gray-500 p-3'>{avatar.get_image}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/users/avatars/edit/${id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default AvatarTable
import { DirectorSentDto } from '@/types/movies.type'
import Link from 'next/link'

function DirectorTable({ id, director }: { id : string, director: DirectorSentDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Name</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-500 p-3'>{director.firstName} {director.lastName}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/directors/edit/${id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DirectorTable
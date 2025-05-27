import { GenreSentDto } from '@/types/movies.type'
import Link from 'next/link'

function GenreTable({ id, genre }: { id : string, genre: GenreSentDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Label</th>
          <th className='border border-gray-500 p-3'>Slug</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-500 p-3'>{genre.label}</td>
          <td className='border border-gray-500 p-3'>{genre.slug}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/genres/edit/${id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default GenreTable
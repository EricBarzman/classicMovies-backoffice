import { MovieDto } from '@/types/movies.type'
import Link from 'next/link'

function MovieTable({ id, movie }: { id : string, movie: MovieDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Title</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-500 p-3'>{movie.title}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/movies/edit/${id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MovieTable
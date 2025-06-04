import { MoviesCompleteDto } from '@/types/movies.type'
import Link from 'next/link'

function MovieTable({ id, movie }: { id : string, movie: MoviesCompleteDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Title</th>
          <th className='border border-gray-500 p-3'>Director</th>
          <th className='border border-gray-500 p-3'>Year</th>
          <th className='border border-gray-500 p-3'>Country</th>
          <th className='border border-gray-500 p-3'>Decade</th>
          <th className='border border-gray-500 p-3'>Genre</th>
          <th className='border border-gray-500 p-3'>Keywords</th>
          <th className='border border-gray-500 p-3'>Youtube URL</th>
          <th className='border border-gray-500 p-3'>Short Description</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-500 p-3'>{movie.title}</td>
          <td className='border border-gray-500 p-3'>{movie.director.firstName} {movie.director.lastName}</td>
          <td className='border border-gray-500 p-3'>{movie.year}</td>
          <td className='border border-gray-500 p-3'>{movie.country.name}</td>
          <td className='border border-gray-500 p-3'>{movie.decadeChoice}s</td>
          <td className='border border-gray-500 p-3'>{movie.genre.label}</td>
          <td className='border border-gray-500 p-3'>{movie.keywordsList && movie.keywordsList.map(keyword => keyword.label).join(", ")}</td>
          <td className='border border-gray-500 p-3'>{movie.youtube_url}</td>
          <td className='border border-gray-500 p-3'>{movie.shortDescription}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/movies/edit/${id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MovieTable
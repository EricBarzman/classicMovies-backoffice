import { RegionDto } from '@/types/movies.type'
import Link from 'next/link'

function RegionTable({ region }: { region: RegionDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Id</th>
          <th className='border border-gray-500 p-3'>Name</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr key={region._id}>
          <td className='border border-gray-500 p-3'>{region._id}</td>
          <td className='border border-gray-500 p-3'>{region.name}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/regions/edit/${region._id}`}>Modifier</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default RegionTable
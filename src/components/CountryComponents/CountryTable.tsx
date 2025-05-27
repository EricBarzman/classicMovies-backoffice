import { CountryDto } from '@/types/movies.type'
import Link from 'next/link'

function CountryTable({ country }: { country: CountryDto }) {

  return (
    <table className='border-collapse text-left'>
      <thead>
        <tr>
          <th className='border border-gray-500 p-3'>Name</th>
          <th className='border border-gray-500 p-3'>Region</th>
          <th className='border border-gray-500 p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr key={country.id}>
          <td className='border border-gray-500 p-3'>{country.name}</td>
          <td className='border border-gray-500 p-3'>{country.region ? country.region.name : ''}</td>
          <td className='border border-gray-500 p-3 hover:bg-amber-200'>
            <Link href={`/movies/countries/edit/${country.id}`}>Modifier</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CountryTable
import { RegionDto } from '@/types/movies.type'
import Link from 'next/link'
import React from 'react'

const regions: RegionDto[] = [
  {
    _id: 'qrgfsd',
    name: 'Europe'
  },
  {
    _id: 'qerteori',
    name: 'Asia'
  },
  {
    _id: 'opiupize',
    name: 'North America'
  }
]

function RegionsPage() {
  return (
    <div className='p-6 flex justify-center'>
      <div className='p-2 flex flex-col'>

        <table className='border-collapse text-left'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3'>Name</th>
              <th className='border border-gray-500 p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {regions.map(region => (
              <tr key={region._id}>
                <td className='border border-gray-500 p-3'>{region.name}</td>
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/regions/${region._id}`} className='p-3'>Voir</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/regions/add">
          + Créer une région
        </Link>
      </div>
    </div>
  )
}

export default RegionsPage
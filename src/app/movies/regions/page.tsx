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
    <main className='p-6'>
      <div>
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {regions.map(region => (
              <tr key={region._id}>
                <td>{region.name}</td>
                <td>
                  <Link href={`/movies/regions/${region.name}`}>Modifier</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default RegionsPage
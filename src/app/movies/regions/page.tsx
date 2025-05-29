"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import { useRegions } from '@/firebase/movies/regionHooks';
import { RegionDto } from '@/types/movies.type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function RegionsPage() {

  const [regions, setRegions] = useState<RegionDto[] | null>([]);
  const { getRegions } = useRegions();

  useEffect(() => {
    getRegions()
      .then((data) => setRegions(data))
      .catch(error => { throw new Error(error) });
  }, [])

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
              <tr key={region.id}>
                <td className='border border-gray-500 p-3'>{region.name}</td>
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/regions/${region.id}`} className='p-3'>Voir</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/regions/add">
          + Créer une région
        </Link>

        <BackButton name="" />
      </div>
    </div>
  )
}

export default RegionsPage
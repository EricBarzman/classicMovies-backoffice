"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import { useCountries } from '@/firebase/movies/countryHooks';
import { RegionDto } from '@/types/movies.type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function CountriesPage() {

  const [countries, setCountries] = useState<RegionDto[]>([{
    id: '',
    name: ''
  }]);
  
  const { getCountries } = useCountries();

  useEffect(() => {
    getCountries()
      .then((data) => setCountries(data))
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
            {countries.map(country => (
              <tr key={country.id}>
                <td className='border border-gray-500 p-3'>{country.name}</td>
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/countries/${country.id}`} className='p-3'>See</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/countries/add">
          + Create country
        </Link>

        <BackButton name="" />
      </div>
    </div>
  )
}

export default CountriesPage
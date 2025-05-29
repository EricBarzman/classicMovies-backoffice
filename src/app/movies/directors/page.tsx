"use client";

import BackButton from '@/components/MovieBackButton/BackButton';
import { useCountries } from '@/firebase/movies/countryHooks';
import { useDirectors } from '@/firebase/movies/directorHooks';
import { CountryDto, DirectorDto } from '@/types/movies.type'
import { DocumentData } from 'firebase/firestore';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function DirectorsPage() {

  const [directors, setDirectors] = useState<DocumentData>([{
    id: '',
    firstName: '',
    lastName: '',
    countryId: '',
  }]);

  const [countries, setCountries] = useState<DocumentData>([{
    id: '',
    name: '',
  }]);

  const { getDirectors } = useDirectors();
  const { getCountries } = useCountries();
  
  useEffect(() => {
    getDirectors()
      .then((data) => setDirectors(data))
      .catch(error => { throw new Error(error) });
    getCountries().then(data => setCountries(data))
  }, [])

  return (
    <div className='p-6 flex justify-center'>
      <div className='p-2 flex flex-col'>

        <table className='border-collapse text-left'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3'>Name</th>
              <th className='border border-gray-500 p-3'>Country</th>
              <th className='border border-gray-500 p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {directors.map(director => (
              <tr key={director.id}>
                <td className='border border-gray-500 p-3'>{director.firstName} {director.lastName}</td>
                
                {countries.map(country => country.id === director.countryId
                  ? <td key={country.name} className='border border-gray-500 p-3'>{country.name}</td>
                  : null
                )}
                
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/directors/${director.id}`} className='p-3'>See</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/directors/add">
          + Create director
        </Link>
        
        <BackButton name="" />
      </div>
    </div>
  )
}

export default DirectorsPage
"use client";

import { useKeywords } from '@/firebase/movies/keywordHooks';
import { KeywordDto } from '@/types/movies.type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function KeywordsPage() {

  const [keywords, setKeywords] = useState<KeywordDto[]>([{
    id: '',
    label: ''
  }]);
  
  const { getKeywords } = useKeywords();

  useEffect(() => {
    getKeywords()
      .then((data) => setKeywords(data))
      .catch(error => { throw new Error(error) });
  }, [])

  return (
    <div className='p-6 flex justify-center'>
      <div className='p-2 flex flex-col'>

        <table className='border-collapse text-left'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3'>Label</th>
              <th className='border border-gray-500 p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map(keyword => (
              <tr key={keyword.id}>
                {/* Display label with first letter uppercase */}
                <td className='border border-gray-500 p-3'>{keyword.label}</td>
                <td className='border border-gray-500 hover:bg-amber-200'>
                  <Link href={`/movies/keywords/${keyword.id}`} className='p-3'>See</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className='rounded-lg mt-4 px-4 py-2 bg-amber-300 hover:bg-amber-400' href="/movies/keywords/add">
          + Create keyword
        </Link>
      </div>
    </div>
  )
}

export default KeywordsPage
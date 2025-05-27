import Link from 'next/link'
import React from 'react'
import { categoriesList } from '../constants/categoriesList'

function MoviesHomePage() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-xl font-semibold mb-12'>All movie related categories</h2>
      <div className='grid grid-cols-3 gap-30 '>
        {categoriesList.map(cat => (
          <Link key={cat} href={`/movies/${cat}`} className='p-2 rounded-lg hover:bg-amber-500'>
            {/* Affiche le nom de la catégorie */}
            {cat[0].toUpperCase() + cat.substring(1)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MoviesHomePage
import Link from 'next/link'
import React from 'react'

const categories = [
  "regions",
  "countries",
  "genres",
  "keywords",
  "directors",
  "movies",
]

function MoviesHomePage() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-xl font-semibold mb-12'>All movie related categories</h2>
      <div className='grid grid-cols-3 gap-30 '>
        {categories.map(cat => (
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
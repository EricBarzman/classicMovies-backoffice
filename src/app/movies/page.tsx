import Link from 'next/link'
import React from 'react'

function MoviesHomePage() {
  return (
    <main className='p-6'>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl font-semibold mb-12'>All movie related categories</h2>
        <div className='grid grid-cols-3 gap-30'>
          <Link href="/movies/regions">
            Regions
          </Link>
          <Link href="/movies/countries">
            Countries
          </Link>
          <Link href="/movies/genres">
            Genres
          </Link>
          <Link href="/movies/keywords">
            Keywords
          </Link>
          <Link href="/movies/directors">
            Directors
          </Link>
          <Link href="/movies/movies">
            Movies
          </Link>
        </div>
      </div>
    </main>
  )
}

export default MoviesHomePage
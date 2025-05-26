import Link from 'next/link'
import React from 'react'

function RegionBackButton() {
  return (
    <Link
      className="mt-10 w-50 bg-amber-500 hover:bg-amber-600 rounded-xl p-2 text-center text-white"
      href="/movies/regions"
    >
      Back
    </Link>
  )
}

export default RegionBackButton
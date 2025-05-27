import Link from 'next/link'
import React from 'react'

function BackButton({ name }: { name: string }) {
  return (
    <Link
      className="mt-10 w-50 bg-amber-500 hover:bg-amber-600 rounded-xl p-2 text-center text-white"
      href={`/movies/${name}`}
    >
      Back
    </Link>
  )
}

export default BackButton
import React from 'react'
import { userCategories } from '../constants/userCategoriesList'
import Link from 'next/link'

function UserRelatedPage() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-xl font-semibold mb-12'>All users related categories</h2>
      <div className='grid grid-cols-2 gap-30 '>
        {userCategories.map(cat => (
          <Link key={cat} href={`/users/${cat}`} className='p-3 text-center rounded-lg bg-gray-200 hover:bg-amber-500'>
            {/* Affiche le nom de la catégorie */}
            {cat[0].toUpperCase() + cat.substring(1)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UserRelatedPage
import Link from 'next/link'
import React from 'react'

export interface CatProp {
  label: string;
  slug: string;
}

function HeaderCat(cat : CatProp) {
  return (
    <Link href={cat.slug} className="py-2 px-4 underline rounded-sm hover:bg-amber-500">
      {cat.label}
    </Link>
  )
}

export default HeaderCat
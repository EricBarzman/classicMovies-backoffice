"use client";

import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
import HeaderCat, { CatProp } from "./HeaderCat";

const categories : CatProp[] = [
  {
    label: "Truc",
    slug: "truc",
  },
  {
    label: 'Hello there',
    slug: 'hello-there',
  }
]

function Header() {
  return (
    <header className="p-6 border-b-1">
      <nav className="flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex justify-between items-center">
          {categories.map((cat) => <HeaderCat key={cat.slug} {...cat} />)}          
        </div>
        <Link href="/" className="py-2 px-4 rounded-4xl bg-amber-300 hover:bg-amber-500">Sign out</Link>
      </nav>
    </header>
  )
}

export default Header
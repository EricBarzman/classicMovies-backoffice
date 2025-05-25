"use client";

import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

function Header() {
  return (
    <header className="p-6 border-b-1">
      <nav className="flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex justify-between items-center">
          <Link href="/movies" className="py-2 px-4 underline rounded-sm hover:bg-amber-500">
            Movies
          </Link>
          <Link href="/users" className="py-2 px-4 underline rounded-sm hover:bg-amber-500">
            Users
          </Link>
        </div>
        <Link href="/" className="py-2 px-4 rounded-4xl bg-amber-300 hover:bg-amber-500">Sign out</Link>
      </nav>
    </header>
  )
}

export default Header
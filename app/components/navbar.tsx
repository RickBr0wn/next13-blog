import Link from 'next/link'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLaptop,
  FaTwitter,
} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            className="text-white/80 no-underline hover:text-white"
            href="/"
          >
            Rick Brown
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-xl lg:text-2xl">
          <Link
            className="text-white/80 hover:text-white"
            href="https://github.com/RickBr0wn"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://github.com/RickBr0wn"
          >
            <FaFacebook />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://github.com/RickBr0wn"
          >
            <FaTwitter />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://github.com/RickBr0wn"
          >
            <FaInstagram />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://github.com/RickBr0wn"
          >
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Path: app/components/navbar.tsx
// Created at: 20:15:30 - 23/05/2023
// Language: Typescript
// Framework: React/Next.js

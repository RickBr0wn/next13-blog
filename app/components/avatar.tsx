import Image from 'next/image'

export default function Avatar() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/avatar.png"
        alt="avatar of rick brown"
        width="200"
        height="200"
        priority
      />
    </section>
  )
}

// Path: app/components/avatar.tsx
// Created at: 20:20:44 - 23/05/2023
// Language: Typescript
// Framework: React/Next.js

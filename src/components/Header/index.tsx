import Link from 'next/link'

export function Header() {
  return (
    <header className="flex justify-between items-center w-screen mt-2">
      <div>
        <span className="font-bold italic text-3xl">NT</span>
      </div>
      <ul className="flex gap-6 font-normal">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/">Contact</Link>
      </ul>
    </header>
  )
}

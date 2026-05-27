import Link from 'next/link'

export default function Home() {
  return (
    <nav style={{ display: 'flex', gap: 12 }}>
      <Link href="/c/Audio">category: Audio</Link>
      <Link href="/c/Appliances">category: Appliances</Link>
      <Link href="/s?query=phone">search: phone</Link>
    </nav>
  )
}

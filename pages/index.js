import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="main">
      <Link href="/github">
        <a>Github heat map</a>
      </Link>
      <Link href="/character">
        <a>Character walk</a>
      </Link>
    </div>
  )
}

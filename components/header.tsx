import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-font1 tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Mattie's InfoSec Blog
      </Link>
      .
    </h2>
  )
}

export default Header

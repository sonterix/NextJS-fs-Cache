import Link from 'next/link'

const Nav = () => (
  <nav className='main-nav'>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contact-us'>Contact Us</Link>
      </li>
    </ul>
  </nav>
)

export default Nav

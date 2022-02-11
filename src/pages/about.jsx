import Link from 'next/link'
import { getCache } from '../utils/cache'

const About = ({ cache }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </nav>

    <section>{cache && <pre>{JSON.stringify(cache)}</pre>}</section>
  </>
)

export const getStaticProps = () => {
  const cache = getCache()

  return {
    props: {
      cache: cache || null
    },
    revalidate: 120
  }
}

export default About

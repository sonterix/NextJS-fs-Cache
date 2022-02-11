import Link from 'next/link'
import { getCache } from '../utils/cache'

const Home = ({ cache }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link href='/about'>About</Link>
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
    }
    // revalidate: 160
  }
}

export default Home

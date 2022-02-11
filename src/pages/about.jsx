import Link from 'next/link'
import { getCache } from '../utils/cache'

const About = ({ cache }) => (
  <section>
    <h1>About Page</h1>
    <br />
    {cache && <p>Last update: {JSON.stringify(new Date(cache))}</p>}
  </section>
)

export const getStaticProps = async () => {
  const cache = await getCache('lastUpdate')

  return {
    props: {
      cache: cache || null
    },
    revalidate: 120
  }
}

export default About

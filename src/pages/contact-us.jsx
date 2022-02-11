import { getCache } from '../utils/cache'

const ContactUs = ({ cache }) => (
  <section>
    <h1>Contact Us Page</h1>
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
    revalidate: 1800
  }
}

export default ContactUs

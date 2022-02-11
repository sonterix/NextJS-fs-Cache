import getMembers from '../utils/test'

const Home = ({ members }) => {
  console.log(members)

  return <section>Test</section>
}

export const getStaticProps = async () => {
  const members = await getMembers()

  return {
    props: {
      members
    },
    revalidate: 60
  }
}

export default Home

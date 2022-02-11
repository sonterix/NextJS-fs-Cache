import Nav from '../components/Nav'
import '../styles/main.css'

const App = ({ Component, pageProps }) => (
  <>
    <Nav />
    <Component {...pageProps} />
  </>
)

export default App

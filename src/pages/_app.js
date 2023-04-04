import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import './blogposts/slug.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>

  )

}

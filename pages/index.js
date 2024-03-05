import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import FunctionButton from '../components/FunctionButton'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <FunctionButton/>


      <Footer />
    </div>
  )
}

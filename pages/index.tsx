import Head from 'next/head'

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ada unit converter</title>
        <meta name="description" content="Ada unit converter for cardano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer></footer>
    </div>
  )
}

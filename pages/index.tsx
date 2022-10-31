import Head from 'next/head'

import Base from '../components/Base'
import Converter from '../components/Converter'
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
        <Base>
          <Converter />
        </Base>
      </main>

      <footer></footer>
    </div>
  )
}

import Head from 'next/head'
import Page from '../components/Page'

export default function Home() {
  
  return (
    <Page>
      <Head>
        <title>Beranda</title>
      </Head>

      <div className="mx-auto my-16 max-w-4xl">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-10 text-gray-700 dark:text-white">
          Hai, saya <a href="https://www.instagram.com/davidsarono/" className="text-blue-400 hover:text-blue-300">David</a>
        </h1>

        <p className="text-md md:text-lg tracking-tight text-gray-500 dark:text-white">
          Saya membuat blog ini dengan maksud sebagai pengingat pada diri saya pribadi bahwa saya pernah mempelajari apa yang saya tulis dan tentunya saya ingin membagikannya melalui blog ini.
          <br/><br/>
          Semoga bermanfaat!
        </p>
      </div>

    </Page>
  )
}
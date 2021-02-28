import Head from 'next/head'
import Page from '../../components/Page'

export default function Blog() {

  return (
    <Page>
      <Head>
        <title>Blog</title>
      </Head>

      <div className="mx-auto my-16 max-w-4xl">
        <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-gray-700 dark:text-white">
          Halaman Blog
        </h2>
      </div>

    </Page>
  )
}
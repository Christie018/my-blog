import Head from 'next/head'
import {HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="Sunflower-Background-"
        sizes="180x180"
        href="/favicon/Sunflower-Background-.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/Sunflower-Background-.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/Sunflower-Background-.jpg"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Mattalynn Darden - Cybersecurity Professional`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta

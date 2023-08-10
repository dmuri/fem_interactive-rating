import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Overpass} from "@next/font/google"
import Head from 'next/head'

const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge</title>
      </Head>
  
      <main className={overpass.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

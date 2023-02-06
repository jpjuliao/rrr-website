import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Koulen } from '@next/font/google'

const koulen = Koulen({ weight: ['400'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={koulen.className}><Component {...pageProps} /></div>
}

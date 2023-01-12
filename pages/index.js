import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Services from '../components/Services'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>DBM Digital Product Agency</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Services services={services} />
      <Testimonials />
    </>
  )
}

export const getStaticProps = () => {
  const services = data
  return {
    props: { services },
  }
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ApiTester from '../src/components/ApiTester'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.sharepointpals.com/post/deploy-nextjs-application-to-azure-static-web-app/">SPPals Next.js!</a>
        </h1>

        <ApiTester />

      </main>

    </div>
  )
}

export default Home

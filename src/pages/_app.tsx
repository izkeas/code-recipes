import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Theme from '@/components/Theme'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import React from 'react'
import Background from "@/components/Background";

const pages=[
  {
    name :"Projects",
    path :"/projects"
  }
]


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ThemeProvider theme={Theme}>
          <Background>
          <CssBaseline/>
            <NavBar pages={pages}/>
            <Component {...pageProps} />
          </Background>
        </ThemeProvider>
      </main>
    </>
  );
}

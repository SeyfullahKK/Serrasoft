import React from 'react'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Serrasoft - Teknolojide Yenilikçi Çözümler</title>
        <meta name="description" content="Serrasoft olarak, işletmenizi geleceğe taşıyacak yenilikçi yazılım çözümleri sunuyoruz. Web geliştirme, mobil uygulama, e-ticaret ve daha fazlası." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  )
} 
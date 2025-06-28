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
        <meta name="description" content="Ağ güvenliği, büyük veri analizi ve derinlemesine paket inceleme alanlarında uzmanlaşmış çözümlerle telekomünikasyon ve kurumsal sektörlere hizmet veriyoruz. Modern teknolojilerle işletmenizin dijital altyapısını güçlendiriyoruz." />
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
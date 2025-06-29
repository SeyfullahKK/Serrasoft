import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Shield, Cpu, Activity, CheckCircle } from 'lucide-react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

const solutionAreas = [
  {
    title: '5651 Sayılı Kanun Uyumu',
    description: '5651 sayılı kanun kapsamında yasal yükümlülüklerinizi karşılayan güvenli ve şeffaf çözümler. Log tutma, veri saklama ve raporlama süreçlerinizi otomatik hale getiriyoruz.',
    icon: Shield,
    capabilities: [
      'Otomatik Log Tutma ve Saklama',
      'Yasal Raporlama Sistemleri',
      'Veri Güvenliği ve Şifreleme',
      'Denetim ve Uyumluluk Takibi'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'High Performance Computing',
    description: 'Petaflops seviyesinde işlem gücü ile kritik iş yüklerinizi optimize ediyoruz. GPU hızlandırma, paralel işleme ve bellek optimizasyonu ile maksimum performans.',
    icon: Cpu,
    capabilities: [
      'Paralel İşleme Mimarileri',
      'GPU Hızlandırma Teknolojileri',
      'Bellek Optimizasyonu',
      'Yüksek Verimli Algoritmalar'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Low Latency Systems',
    description: 'Mikrosan seviyesinde gecikme ile kritik uygulamalarınızı destekliyoruz. Real-time işleme, optimized networking ve edge computing ile anlık yanıt süreleri.',
    icon: Activity,
    capabilities: [
      'Mikrosaniye Seviye Gecikme',
      'Real-time Veri İşleme',
      'Edge Computing Çözümleri',
      'Optimized Network Protocols'
    ],
    color: 'from-blue-500 to-blue-600'
  }
]

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
        
        {/* Çözüm Alanlarımız */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Yetkinliklerimiz</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern kurumsal ihtiyaçlarınızı karşılayan kapsamlı teknoloji çözümleri
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {solutionAreas.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3">
                    {solution.capabilities.map((capability, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <Services />
        <Contact />
      </main>
    </>
  )
} 
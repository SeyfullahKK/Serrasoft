import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Network, 
  Activity, 
  Eye,
  ArrowRight,
  CheckCircle,
  Zap,
  Database,
  Shield,
  BarChart3,
  Cpu,
  Globe,
  Server
} from 'lucide-react'

const telcoSolutions = [
  {
    id: 'korelasyon',
    title: 'Korelasyon Çözümleri',
    description: 'Farklı veri kaynaklarından gelen olayları ilişkilendirerek anlamlı içgörüler elde edin. Ağ altyapınızdaki sorunları daha hızlı tespit edin, kök neden analizini otomatikleştirin ve proaktif müdahale imkanı yakalayın. Yapay zeka destekli korelasyon motoru ile karmaşık ilişkileri saniyeler içinde görünür hale getirin.',
    icon: Network,
    features: [
      'Çoklu veri kaynağı entegrasyonu',
      'Gerçek zamanlı olay ilişkilendirme',
      'Akıllı pattern tanıma algoritmaları',
      'Otomatik anomali tespiti'
    ],
    benefits: [
      '%85 daha hızlı problem tespiti',
      'Proaktif müdahale imkanı',
      '360° görünürlük sağlama'
    ]
  },
  {
    id: 'loglama',
    title: 'Gelişmiş Loglama Sistemleri',
    description: 'Yüksek hacimli log verilerini toplayın, işleyin ve anlamlı hale getirin. Dağıtık mimaride çalışan sistemlerinizden gelen milyonlarca log satırını gerçek zamanlı olarak analiz edin. Akıllı log zenginleştirme ve otomatik kategorizasyon özellikleri ile operasyonel verimliliğinizi artırın. Güçlü arama ve raporlama yetenekleri ile kritik bilgilere anında ulaşın.',
    icon: Activity,
    features: [
      'Saniyede 10M+ log işleme kapasitesi',
      'Dağıtık log toplama mimarisi',
      'Akıllı log zenginleştirme',
      'Gerçek zamanlı arama ve filtreleme'
    ],
    benefits: [
      '%99.9 veri güvenilirliği',
      '50+ farklı kaynak desteği',
      'Sıfır veri kaybı garantisi'
    ]
  },
  {
    id: 'uygulama-tanima',
    title: 'Uygulama Tanıma ve DPI',
    description: 'Deep Packet Inspection teknolojisi ile ağ trafiğindeki uygulamaları gerçek zamanlı tanıyın ve sınıflandırın. Şifreli trafikte bile makine öğrenmesi algoritmaları sayesinde yüksek doğrulukla uygulama tespiti yapın. QoS politikalarınızı uygulama bazlı optimize edin, bant genişliği yönetimini iyileştirin ve müşteri deneyimini artırın.',
    icon: Eye,
    features: [
      'Layer 7 protokol analizi',
      'Şifreli trafik tanıma (ML tabanlı)',
      '5000+ uygulama veritabanı',
      'Özel protokol tanımlama desteği'
    ],
    benefits: [
      '%99.8 tanıma doğruluğu',
      '<1ms işleme gecikmesi',
      'Gerçek zamanlı QoS yönetimi'
    ]
  }
]

const subSolutions = [
  { name: 'Korelasyon', href: '/cozumler/telco/korelasyon', icon: Network },
  { name: 'Loglama', href: '/cozumler/telco/loglama', icon: Activity },
  { name: 'Uygulama Tanıma', href: '/cozumler/telco/uygulama-tanima', icon: Eye }
]

export default function TelcoSolutionsPage() {
  return (
    <>
      <Head>
        <title>Telco Çözümleri - Serrasoft</title>
        <meta name="description" content="Telekomünikasyon operatörleri için korelasyon, loglama ve uygulama tanıma çözümleri" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/cozumler">
                <motion.span 
                  className="text-blue-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Çözümlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Telco Çözümleri
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Telekomünikasyon operatörleri için özel geliştirilmiş korelasyon, loglama ve 
                uygulama tanıma çözümleri ile ağınızı daha akıllı ve verimli hale getirin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Demo Talep Et
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
                >
                  Teknik Döküman
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sub Solutions Navigation */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Çözüm Alanlarımız</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={solution.href}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-effect rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer group"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-lg font-semibold text-gray-800 group-hover:text-serrasoft-primary transition-colors">
                          {solution.name}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Detail */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Telco Çözümlerimiz</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Telekomünikasyon sektörünün ihtiyaçlarına özel tasarlanmış, 
                yüksek performanslı ve ölçeklenebilir çözümler
              </p>
            </motion.div>

            <div className="space-y-20">
              {telcoSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{solution.title}</h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{solution.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Temel Özellikler</h3>
                      <div className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={`/cozumler/telco/${solution.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-serrasoft-primary font-semibold hover:gap-4 transition-all"
                      >
                        Detaylı Bilgi
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">İş Değeri</h3>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg"
                        >
                          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                          <span className="font-medium text-gray-800">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Rakamlarla Başarılarımız</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '15+', label: 'Telco Müşteri' },
                  { value: '10M+', label: 'Günlük İşlem' },
                  { value: '%99.99', label: 'Uptime' },
                  { value: '24/7', label: 'Destek' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Telekom Altyapınızı Güçlendirin
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Korelasyon, loglama ve uygulama tanıma çözümlerimiz ile 
                ağınızı daha akıllı ve verimli hale getirin.
              </p>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Hemen İletişime Geçin
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-serrasoft-primary border-2 border-serrasoft-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all"
                >
                  Örnek Vaka İncele
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
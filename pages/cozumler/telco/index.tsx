import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Radio, 
  Signal, 
  Activity, 
  Server,
  Globe,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Cloud,
  Shield,
  Satellite
} from 'lucide-react'

const telcoSolutions = [
  {
    id: 'konteynerleme',
    title: 'Konteynerleme Çözümleri',
    description: 'Docker ve Kubernetes tabanlı modern konteyner orkestrasyon sistemleri',
    icon: Server,
    features: [
      'Otomatik ölçeklendirme',
      'Yük dengeleme',
      'Servis mesh entegrasyonu',
      'CI/CD pipeline desteği'
    ],
    benefits: [
      '%70 daha hızlı deployment',
      '%50 kaynak tasarrufu',
      '99.99% uptime garantisi'
    ]
  },
  {
    id: 'loglama',
    title: 'Gelişmiş Loglama Sistemleri',
    description: 'Gerçek zamanlı log toplama, analiz ve görselleştirme çözümleri',
    icon: Activity,
    features: [
      'Elasticsearch entegrasyonu',
      'Real-time log streaming',
      'Akıllı uyarı sistemleri',
      'Özelleştirilebilir dashboard'
    ],
    benefits: [
      'Saniyede 1M+ log işleme',
      'Otomatik anomali tespiti',
      'Detaylı performans metrikleri'
    ]
  },
  {
    id: 'dpi',
    title: 'DPI ve Uygulama Tanıma',
    description: 'Deep Packet Inspection ile gelişmiş trafik analizi ve uygulama tanıma',
    icon: Shield,
    features: [
      'Layer 7 protokol analizi',
      'Şifreli trafik analizi',
      'Makine öğrenmesi destekli tanıma',
      'Real-time trafik sınıflandırma'
    ],
    benefits: [
      '3000+ uygulama tanıma',
      '%99.8 doğruluk oranı',
      'Ultra düşük latency'
    ]
  },
  {
    id: 'vpn-filtreleme',
    title: 'VPN Filtreleme Çözümleri',
    description: 'Gelişmiş VPN tespit ve filtreleme sistemleri',
    icon: Shield,
    features: [
      'VPN protokol tespiti',
      'Tünel trafiği analizi',
      'Beyaz/kara liste yönetimi',
      'Detaylı raporlama'
    ],
    benefits: [
      'Tüm VPN tiplerini tespit',
      'Gerçek zamanlı filtreleme',
      'Esnek politika yönetimi'
    ]
  },
  {
    id: 'guvenli-internet',
    title: 'Güvenli İnternet Hizmetleri',
    description: 'BTK uyumlu güvenli internet ve içerik filtreleme çözümleri',
    icon: Globe,
    features: [
      'URL kategorilendirme',
      'İçerik filtreleme',
      'DNS güvenlik duvarı',
      'Ebeveyn kontrolleri'
    ],
    benefits: [
      'BTK 5651 uyumlu',
      '50M+ URL veritabanı',
      'Anlık güncelleme'
    ]
  }
]

const subSolutions = [
  { name: 'Konteynerleme', href: '/cozumler/telco/konteynerleme', icon: Server },
  { name: 'Loglama', href: '/cozumler/telco/loglama', icon: Activity },
  { name: 'Uygulama Tanıma', href: '/cozumler/telco/uygulama-tanima', icon: Shield },
  { name: 'VPN Filtreleme', href: '/cozumler/telco/vpn-filtreleme', icon: Shield },
  { name: 'Güvenlik İnternet', href: '/cozumler/telco/guvenlik-internet', icon: Globe },
  { name: 'DPI', href: '/cozumler/telco/dpi', icon: Shield },
  { name: 'Yüksek Güvenlikli Konteynerleme', href: '/cozumler/telco/konteynerleme-yuksek-guvenlikli', icon: Server },
]

export default function TelcoSolutionsPage() {
  return (
    <>
      <Head>
        <title>Telco Çözümleri - Serrasoft</title>
        <meta name="description" content="Telekomünikasyon operatörleri için özel geliştirilmiş çözümler" />
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
                Telekomünikasyon operatörleri için yüksek performanslı, ölçeklenebilir ve 
                güvenilir altyapı çözümleri. Modern teknolojiler ile ağınızı geleceğe taşıyın.
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
              <h2 className="text-2xl font-semibold mb-6">Telco Çözümlerimiz</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {subSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={solution.href}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-effect rounded-xl p-4 text-center hover:shadow-lg transition-all cursor-pointer group"
                      >
                        <solution.icon className="w-8 h-8 mx-auto mb-2 text-serrasoft-primary group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium text-gray-700 group-hover:text-serrasoft-primary transition-colors">
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
                      <h3 className="text-xl font-semibold mb-4">Özellikler</h3>
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
                    <h3 className="text-xl font-semibold mb-6">Faydaları</h3>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Telekom Altyapınızı Güçlendirin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Uzman ekibimizle iletişime geçin ve size özel çözümleri keşfedin
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Hemen İletişime Geçin
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
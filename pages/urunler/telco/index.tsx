import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Shield, 
  Eye,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Monitor,
  FileText,
  Search,
  BarChart3,
  Target,
  Brain,
  Database,
  HardDrive
} from 'lucide-react'

const telcoProducts = [
  {
    id: 'viznet-correlog',
    title: 'ViziNet Correlog',
    subtitle: 'Log Korelasyon Platformu',
    description: 'Telco operatörleri için gelişmiş log korelasyon ve analitik platformu. Network olaylarını gerçek zamanlı olarak analiz edin, korelasyonlar kurun ve proaktif operasyon yönetimi sağlayın.',
    icon: Network,
    features: [
      'Gerçek zamanlı korelasyon',
      'AI destekli analitik',
      'Ölçeklenebilir mimari',
      'Compliance raporlama'
    ],
    metrics: [
      { value: '100M+', label: 'Event/Saniye' },
      { value: '<100ms', label: 'Korelasyon Süresi' },
      { value: '99.99%', label: 'Uptime' }
    ],
    color: 'indigo',
    href: '/urunler/telco/viznet-correlog'
  },
  {
    id: 'zenginet-loglama',
    title: 'Zenginet Loglama',
    subtitle: 'Log Yönetim Platformu',
    description: 'Telco operatörleri için yüksek performanslı log toplama ve yönetim platformu. Ağ elementlerinizden gelen tüm log verilerini toplayın, işleyin ve operasyonel zeka için kullanın.',
    icon: Database,
    features: [
      'Yüksek performanslı toplama',
      'Akıllı log işleme',
      'Ölçeklenebilir depolama',
      'Gerçek zamanlı monitoring'
    ],
    metrics: [
      { value: '10M+', label: 'Log/Saniye' },
      { value: '99.9%', label: 'Data Integrity' },
      { value: 'Multi-PB', label: 'Storage' }
    ],
    color: 'emerald',
    href: '/urunler/telco/zenginet-loglama'
  },
  {
    id: 'zenginet-uygulama-tanimi',
    title: 'Zenginet Uygulama Tanımı',
    subtitle: 'DPI & Uygulama Tanıma',
    description: 'Gelişmiş DPI teknolojisi ve AI destekli uygulama tanıma platformu. Ağınızdaki tüm uygulamaları tespit edin, sınıflandırın ve performans optimizasyonu yapın.',
    icon: Eye,
    features: [
      'Gelişmiş DPI teknolojisi',
      'AI destekli tanıma',
      'Gerçek zamanlı analiz',
      'Performans optimizasyonu'
    ],
    metrics: [
      { value: '40Gbps+', label: 'Throughput' },
      { value: '5000+', label: 'Uygulama' },
      { value: '%99.5', label: 'Doğruluk' }
    ],
    color: 'orange',
    href: '/urunler/telco/zenginet-uygulama-tanimi'
  }
]

const telcoBenefits = [
  {
    title: 'Operasyonel Mükemmellik',
    description: 'Telco operasyonlarınızı optimize edin',
    icon: Target,
    benefits: ['Network optimization', 'Proactive monitoring', 'Automated operations']
  },
  {
    title: 'Gelir Artışı',
    description: 'Yeni gelir fırsatları yaratın',
    icon: BarChart3,
    benefits: ['Service differentiation', 'Premium offerings', 'Data monetization']
  },
  {
    title: 'Müşteri Deneyimi',
    description: 'Müşteri memnuniyetini artırın',
    icon: Shield,
    benefits: ['QoS improvement', 'Service reliability', 'Faster resolution']
  },
  {
    title: 'Compliance & Security',
    description: 'Güvenlik ve uyumluluk sağlayın',
    icon: FileText,
    benefits: ['Regulatory compliance', 'Security monitoring', 'Audit readiness']
  }
]

export default function TelcoProductsPage() {
  return (
    <>
      <Head>
        <title>Telco Ürünleri - Serrasoft</title>
        <meta name="description" content="Telco operatörleri için özel geliştirilmiş ürün portföyü" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-blue-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Telco Ürünleri
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Telco operatörleri için özel geliştirilmiş yenilikçi ürün portföyümüz. 
                Ağ yönetiminden uygulama analitiğine kadar kapsamlı çözümler.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Ürün Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
                >
                  Telco Katalog
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Telco Ürün Portföyü</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Telco operatörlerinin ağ yönetimi, performans optimizasyonu ve 
                müşteri deneyimi ihtiyaçlarına yönelik özel ürünler.
              </p>
            </motion.div>

            <div className="space-y-16">
              {telcoProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 rounded-xl flex items-center justify-center`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{product.title}</h3>
                        <p className="text-lg text-gray-600">{product.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, idx) => (
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
                    
                    <Link href={product.href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 text-${product.color}-600 font-semibold hover:gap-4 transition-all`}
                      >
                        Ürün Detayları
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h4 className="text-xl font-semibold mb-6 text-center">Performans Metrikleri</h4>
                    
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                      {product.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl font-bold text-${product.color}-600`}>{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`aspect-video bg-gradient-to-br from-${product.color}-50 to-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden`}>
                      {React.createElement(product.icon, { 
                        className: `w-24 h-24 text-${product.color}-600 relative z-10` 
                      })}
                      
                      {/* Subtle animated background */}
                      <div className="absolute inset-0">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-32 h-32 bg-${product.color}-200/20 rounded-full`}
                            style={{
                              left: `${20 + i * 30}%`,
                              top: `${30 + i * 20}%`,
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              delay: i * 0.5,
                              repeat: Infinity
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Telco Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Telco Operatörlerine Sağladığımız Değer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ürünlerimiz ile telco operatörlerine sağladığımız ana değer alanları
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {telcoBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Teknoloji Altyapımız</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { tech: 'High Performance', desc: 'Computing' },
                  { tech: 'Machine Learning', desc: 'Analytics' },
                  { tech: 'Real-time', desc: 'Processing' },
                  { tech: 'Distributed', desc: 'Architecture' }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold mb-2">{tech.tech}</div>
                    <div className="text-blue-200">{tech.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Telco Dönüşümünüzü Başlatın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Telco ürünlerimiz ile ağ operasyonlarınızı optimize edin, 
                müşteri deneyimini iyileştirin ve yeni gelir fırsatları yaratın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Ürün Demo Talep Et
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
                >
                  Telco Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
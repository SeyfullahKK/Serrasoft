import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Shield, 
  Database,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Monitor,
  FileText,
  HardDrive,
  CloudLightning,
  Gauge
} from 'lucide-react'

const productFeatures = [
  {
    title: 'Yüksek Performanslı Log Toplama',
    description: 'Telco altyapınızın tüm bileşenlerinden gelen logları gerçek zamanlı olarak toplayın ve işleyin.',
    icon: Database,
    features: [
      '10M+ log/saniye kapasitesi',
      'Multi-protocol support',
      'Distributed collection',
      'Buffer management'
    ]
  },
  {
    title: 'Akıllı Log İşleme',
    description: 'Gelişmiş filtreleme ve parsing teknolojileri ile log verilerinizi yapılandırın ve normalize edin.',
    icon: Gauge,
    features: [
      'Real-time parsing',
      'Smart filtering',
      'Data normalization',
      'Pattern extraction'
    ]
  },
  {
    title: 'Ölçeklenebilir Depolama',
    description: 'Telco operatörlerinin yüksek hacimli log verilerini etkin şekilde depolamak için optimize edilmiş mimari.',
    icon: HardDrive,
    features: [
      'Compressed storage',
      'Hot/Cold data tiering',
      'Automated archiving',
      'Retention policies'
    ]
  },
  {
    title: 'Gerçek Zamanlı Monitoring',
    description: 'Log verilerinizi canlı olarak izleyin, alarmlar kurun ve operasyonel durumu takip edin.',
    icon: Monitor,
    features: [
      'Real-time dashboards',
      'Custom alerting',
      'Threshold monitoring',
      'SLA tracking'
    ]
  }
]

const technicalSpecs = [
  { metric: '10M+', label: 'Log/Saniye Toplama' },
  { metric: '99.9%', label: 'Data Integrity' },
  { metric: '<5ms', label: 'Log Processing' },
  { metric: 'Multi-PB', label: 'Storage Capacity' }
]

const useCases = [
  {
    title: 'Network Element Monitoring',
    description: 'Tüm network elementlerinden log toplama ve izleme',
    icon: Network,
    benefits: ['BSS/OSS integration', 'Element health monitoring', 'Fault detection']
  },
  {
    title: 'Service Assurance',
    description: 'Müşteri hizmet kalitesini sağlamak için log analizi',
    icon: Shield,
    benefits: ['SLA monitoring', 'QoS tracking', 'Customer experience']
  },
  {
    title: 'Security & Fraud Detection',
    description: 'Güvenlik olayları ve fraud tespiti için log analizi',
    icon: Activity,
    benefits: ['Security events', 'Fraud patterns', 'Incident response']
  },
  {
    title: 'Operational Intelligence',
    description: 'Operasyonel verimlilik için log verisi analizi',
    icon: CloudLightning,
    benefits: ['Performance optimization', 'Capacity planning', 'Cost reduction']
  }
]

export default function ZenginetLoggingPage() {
  return (
    <>
      <Head>
        <title>Zenginet Loglama - Telco Log Yönetim Platformu - Serrasoft</title>
        <meta name="description" content="Telco operatörleri için yüksek performanslı log toplama ve yönetim platformu" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/telco">
                <motion.span 
                  className="text-emerald-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Telco Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Zenginet Loglama
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Telco operatörleri için tasarlanmış yüksek performanslı log yönetim platformu. 
                Ağ elementlerinizden gelen tüm log verilerini toplayın, işleyin ve 
                operasyonel zeka için kullanın.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Canlı Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all"
                >
                  Arquitecture Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Telco Log Yönetiminde Yeni Standart</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Loglama, telco operatörlerinin karmaşık ağ altyapılarından gelen 
                milyonlarca log kaydını etkin şekilde yönetmesi için geliştirilmiştir.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Yüksek Throughput',
                  desc: '10M+ log/saniye işleme kapasitesi',
                  icon: Zap,
                  color: 'yellow'
                },
                {
                  title: 'Telco Entegrasyonu',
                  desc: 'BSS/OSS sistemleri ile native entegrasyon',
                  icon: Network,
                  color: 'blue'
                },
                {
                  title: 'Güvenilir Depolama',
                  desc: 'Multi-tier storage architecture',
                  icon: HardDrive,
                  color: 'green'
                },
                {
                  title: 'Gerçek Zamanlı',
                  desc: 'Real-time processing ve alerting',
                  icon: Clock,
                  color: 'purple'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Platform Özellikleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Loglama'nın sunduğu kapsamlı özellikler ile telco log yönetimini 
                yeniden tanımlayın
              </p>
            </motion.div>

            <div className="space-y-16">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
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
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{feature.description}</p>
                    
                    <div className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-emerald-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Telco Kullanım Senaryoları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Loglama'yı telco operasyonlarınızın kritik alanlarında kullanın
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-emerald-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Performans Metrikleri</h2>
              
              {/* Performance Metrics with Log Flow Visualizations */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-4xl font-bold mb-2">{spec.metric}</div>
                    <div className="text-emerald-200 mb-4">{spec.label}</div>
                    
                    {/* Specific log visualizations for each metric */}
                    {index === 0 && (
                      // Log throughput visualization
                      <div className="h-16 flex items-center justify-center">
                        <div className="grid grid-cols-4 gap-1 w-20">
                          {[...Array(16)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-1 bg-white/40 rounded-full"
                              animate={{
                                scaleX: [0.5, 1.5, 0.5],
                                opacity: [0.4, 1, 0.4]
                              }}
                              transition={{
                                duration: 0.8,
                                delay: i * 0.05,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      // Data integrity check
                      <div className="h-16 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
                            <motion.div
                              className="w-6 h-6 bg-green-400 rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            />
                          </div>
                          <motion.div
                            className="absolute -inset-2 border border-white/20 rounded-full"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.8, 0, 0.8]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      // Processing speed
                      <div className="h-16 flex items-center justify-center">
                        <div className="flex space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-white/40 rounded-full"
                              animate={{
                                y: [0, -8, 0],
                                backgroundColor: ["rgba(255,255,255,0.4)", "rgba(255,255,255,1)", "rgba(255,255,255,0.4)"]
                              }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      // Storage visualization
                      <div className="h-16 flex items-center justify-center">
                        <div className="space-y-1">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex space-x-1"
                            >
                              {[...Array(6)].map((_, j) => (
                                <motion.div
                                  key={j}
                                  className="w-2 h-2 bg-white/30 rounded-sm"
                                  animate={{
                                    opacity: [0.3, 0.8, 0.3]
                                  }}
                                  transition={{
                                    duration: 2,
                                    delay: (i * 0.3) + (j * 0.1),
                                    repeat: Infinity
                                  }}
                                />
                              ))}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Mimari Avantajları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Telco operatörlerinin ihtiyaçları için özel olarak tasarlanmış mimari
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Distributed Architecture',
                  features: ['Horizontal scaling', 'Load balancing', 'Fault tolerance', 'Geographic distribution'],
                  icon: Network
                },
                {
                  title: 'Multi-Tier Storage',
                  features: ['Hot data access', 'Warm data storage', 'Cold data archiving', 'Cost optimization'],
                  icon: Database
                },
                {
                  title: 'Real-time Processing',
                  features: ['Stream processing', 'CEP (Complex Event Processing)', 'Real-time alerting', 'Live dashboards'],
                  icon: Activity
                }
              ].map((arch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <arch.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{arch.title}</h3>
                  <ul className="space-y-2">
                    {arch.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Telco Log Yönetiminizi Optimize Edin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Zenginet Loglama ile ağ elementlerinizden gelen log verilerini 
                etkin şekilde yönetin ve operasyonel zeka elde edin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Pilot Proje Başlat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all"
                >
                  Mimari Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
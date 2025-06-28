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
  Gauge,
  Search,
  BarChart3
} from 'lucide-react'

const productFeatures = [
  {
    title: 'ISS Odaklı Log Toplama',
    description: 'Internet Servis Sağlayıcıları için optimize edilmiş yüksek hacimli log toplama ve işleme sistemi.',
    icon: Database,
    features: [
      'Petabyte-scale log storage',
      'Real-time collection',
      'ISS protocol support',
      'Automated compliance'
    ]
  },
  {
    title: 'Yasal Uyumluluk Yönetimi',
    description: 'BTK 5651 ve diğer yasal zorunlulukları otomatik olarak karşılayan compliance motoru.',
    icon: FileText,
    features: [
      'BTK 5651 compliance',
      'GDPR support',
      'Automated reporting',
      'Data retention policies'
    ]
  },
  {
    title: 'Yüksek Performanslı İşleme',
    description: 'ISS ağlarının yüksek hacimli trafiğini gerçek zamanlı olarak işleyebilen performans.',
    icon: Gauge,
    features: [
      '10M+ log/saniye',
      'Real-time processing',
      'Distributed architecture',
      'Load balancing'
    ]
  },
  {
    title: 'Gelişmiş Arama ve Analiz',
    description: 'Log verilerinizi hızlı arama ve gelişmiş analiz özellikleri ile anlamlı hale getirin.',
    icon: Search,
    features: [
      'Full-text search',
      'Advanced filtering',
      'Custom dashboards',
      'Forensic analysis'
    ]
  }
]

const technicalSpecs = [
  { metric: '10M+', label: 'Log/Saniye Toplama' },
  { metric: '99.9%', label: 'Data Integrity' },
  { metric: 'PB', label: 'Storage Kapasitesi' },
  { metric: '<5ms', label: 'Query Response' }
]

const useCases = [
  {
    title: 'Legal Compliance',
    description: 'BTK 5651 ve diğer yasal zorunlulukları otomatik karşılama',
    icon: Shield,
    benefits: ['Automatic compliance', 'Audit readiness', 'Legal reporting']
  },
  {
    title: 'Network Monitoring',
    description: 'ISS ağ altyapısının sürekli izlenmesi ve performans analizi',
    icon: Monitor,
    benefits: ['Real-time monitoring', 'Performance analytics', 'Capacity planning']
  },
  {
    title: 'Security Operations',
    description: 'Güvenlik olaylarının tespiti ve forensik analiz',
    icon: Activity,
    benefits: ['Threat detection', 'Incident response', 'Forensic investigation']
  },
  {
    title: 'Business Intelligence',
    description: 'İş zekası ve operasyonel verimlilik için log analizi',
    icon: BarChart3,
    benefits: ['Business insights', 'Operational optimization', 'Cost reduction']
  }
]

export default function ZenginetLoggingISSPage() {
  return (
    <>
      <Head>
        <title>Zenginet Loglama - ISS Log Yönetim Platformu - Serrasoft</title>
        <meta name="description" content="Internet Servis Sağlayıcıları için yüksek performanslı log toplama ve yönetim platformu" />
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
              <Link href="/urunler/internet-servis-saglayicilari">
                <motion.span 
                  className="text-emerald-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← ISS Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Zenginet Loglama
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Internet Servis Sağlayıcıları için tasarlanmış yüksek performanslı log yönetim platformu. 
                Yasal zorunlulukları karşılayın, operasyonel zeka elde edin ve ağ güvenliğinizi artırın.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Compliance Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all"
                >
                  BTK 5651 Rehberi
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
                <span className="gradient-text">ISS'ler İçin Log Yönetimi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Loglama, Internet Servis Sağlayıcılarının yüksek hacimli 
                log verilerini etkin şekilde yönetmesi ve yasal zorunluklarını karşılaması için geliştirilmiştir.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Yüksek Hacim',
                  desc: 'Petabyte seviyesinde log depolama',
                  icon: HardDrive,
                  color: 'green'
                },
                {
                  title: 'Yasal Uyum',
                  desc: 'BTK 5651 ve GDPR compliance',
                  icon: Shield,
                  color: 'blue'
                },
                {
                  title: 'Gerçek Zamanlı',
                  desc: '10M+ log/saniye işleme kapasitesi',
                  icon: Zap,
                  color: 'yellow'
                },
                {
                  title: 'ISS Odaklı',
                  desc: 'ISS ihtiyaçları için özelleştirilmiş',
                  icon: Network,
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
                Zenginet Loglama'nın ISS'ler için sunduğu kapsamlı özellikler
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
              <h2 className="text-4xl font-bold mb-6">ISS Kullanım Alanları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Loglama'yı ISS operasyonlarınızın farklı alanlarında kullanın
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
              <div className="grid md:grid-cols-4 gap-8">
                {technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{spec.metric}</div>
                    <div className="text-emerald-200">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Yasal Uyumluluk Garantisi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ISS'lerin karşılaması gereken tüm yasal zorunluluklar için tam destek
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'BTK 5651 Uyumu',
                  features: ['Log retention policies', 'Automated reporting', 'Legal data format', 'Audit trail support'],
                  icon: FileText
                },
                {
                  title: 'GDPR Compliance',
                  features: ['Data privacy protection', 'Right to erasure', 'Data portability', 'Consent management'],
                  icon: Shield
                },
                {
                  title: 'Operational Excellence',
                  features: ['24/7 monitoring', 'Automated backup', 'Disaster recovery', 'SLA guarantee'],
                  icon: Monitor
                }
              ].map((compliance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <compliance.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{compliance.title}</h3>
                  <ul className="space-y-2">
                    {compliance.features.map((feature, idx) => (
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
                ISS Log Yönetiminizi Modernize Edin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Zenginet Loglama ile yasal zorunluluklarınızı karşılayın, 
                operasyonel verimliliğinizi artırın ve ağ güvenliğinizi güçlendirin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Compliance Analizi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all"
                >
                  ISS Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
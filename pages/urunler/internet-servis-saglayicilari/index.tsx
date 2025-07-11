import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Activity, 
  Shield, 
  Eye,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Monitor,
  Settings
} from 'lucide-react'

const issProducts = [
  {
    id: 'zenginet-loglama',
    title: 'Zenginet - Loglama',
    subtitle: 'ISS Log Yönetim Platformu',
    description: 'ISS altyapıları için yüksek hacimli trafik loglama ve analiz sistemi. Yasal zorunlulukları karşılayın ve operasyonel zeka elde edin.',
    icon: Activity,
    features: [
      'Real-time log collection',
      'Petabyte-scale storage', 
      'Compliance reporting',
      'Advanced analytics'
    ],
    metrics: [
      { value: '10M+', label: 'Log/Saniye' },
      { value: '99.9%', label: 'Data Integrity' },
      { value: 'PB', label: 'Storage' }
    ],
    color: 'emerald',
    href: '/urunler/internet-servis-saglayicilari/zenginet-loglama'
  },
  {
    id: 'vpn-zenginet',
    title: 'VPN: Zenginet',
    subtitle: 'VPN Tespit ve Yönetim',
    description: 'VPN ve proxy trafiği tespit ve yönetim çözümü. ISS ağınızda VPN kullanımını izleyin ve politikalarınızı uygulayın.',
    icon: Lock,
    features: [
      'VPN protocol detection',
      'Obfuscated VPN identification',
      'Policy enforcement', 
      'Whitelist management'
    ],
    metrics: [
      { value: '99.5%', label: 'Detection Rate' },
      { value: '40Gbps+', label: 'Throughput' },
      { value: '<5ms', label: 'Latency' }
    ],
    color: 'blue',
    href: '/urunler/internet-servis-saglayicilari/vpn-zenginet'
  },
  {
    id: 'guvenli-internet-zenginet',
    title: 'Güvenli İnternet: Zenginet',
    subtitle: 'Güvenlik ve Tehdit Koruması',
    description: 'ISS ağları için kapsamlı güvenlik ve tehdit koruması. Müşterilerinizi zararlı içeriklerden koruyun.',
    icon: Shield,
    features: [
      'DDoS protection',
      'Malware detection',
      'Botnet identification',
      'Threat intelligence'
    ],
    metrics: [
      { value: '99.9%', label: 'Threat Detection' },
      { value: '100Gbps+', label: 'Protection' },
      { value: '24/7', label: 'Monitoring' }
    ],
    color: 'red',
    href: '/urunler/internet-servis-saglayicilari/guvenli-internet-zenginet'
  },
  {
    id: 'uygulama-tanimi-zenginet',
    title: 'Uygulama Tanımı: Zenginet',
    subtitle: 'DPI ve Uygulama Analizi',
    description: 'AI destekli uygulama tanıma ve sınıflandırma sistemi. ISS ağınızdaki tüm uygulamaları tespit edin ve yönetin.',
    icon: Eye,
    features: [
      'ML-based detection',
      '5000+ applications',
      'Encrypted traffic analysis',
      'Custom app profiles'
    ],
    metrics: [
      { value: '5000+', label: 'Uygulama' },
      { value: '99.9%', label: 'Doğruluk' },
      { value: '40Gbps+', label: 'Throughput' }
    ],
    color: 'orange',
    href: '/urunler/internet-servis-saglayicilari/uygulama-tanimi-zenginet'
  },
  {
    id: 'korelasyon-viznet-correlog',
    title: 'Korelasyon: ViziNet Correlog',
    description: 'ISS operasyonları için gelişmiş log korelasyon ve network analitik çözümü',
    icon: Activity,
    color: 'from-purple-500 to-indigo-600',
    features: [
      'Gerçek zamanlı log korelasyon',
      'ISS compliance reporting', 
      'Network anomaly detection',
      'Custom analytics dashboards'
    ],
    metrics: [
      { value: '100M+', label: 'Event/Saniye' },
      { value: '<100ms', label: 'Korelasyon' },
      { value: '99.99%', label: 'Uptime' }
    ],
    benefits: [
      'Proaktif problem tespiti',
      'Yasal uyumluluk',
      'Network görünürlüğü',
      'Operasyonel verimlilik'
    ],
    href: '/urunler/internet-servis-saglayicilari/korelasyon-viznet-correlog'
  },
  {
    id: 'dpi-zenginet',
    title: 'DPI: Zenginet',
    subtitle: 'Deep Packet Inspection',
    description: 'Deep Packet Inspection ile network traffic analysis ve classification. ISS ağınızda tam görünürlük sağlayın.',
    icon: Monitor,
    features: [
      'Layer 7 inspection',
      '100Gbps+ throughput',
      'Protocol detection',
      'Custom signatures'
    ],
    metrics: [
      { value: '100Gbps+', label: 'Throughput' },
      { value: 'Layer 7', label: 'Deep Inspection' },
      { value: '<1ms', label: 'Latency' }
    ],
    color: 'purple',
    href: '/urunler/internet-servis-saglayicilari/dpi-zenginet'
  }
]

export default function ISSProductsPage() {
  return (
    <>
      <Head>
        <title>İnternet Servis Sağlayıcıları Ürünleri - Serrasoft</title>
        <meta name="description" content="ISS'ler için özel geliştirilmiş ZeroNet serisi ürünler ve platformlar" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-900 to-green-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-teal-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                İnternet Servis Sağlayıcıları Ürünleri
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                ISS'ler için özel tasarlanmış ZeroNet serisi ürünler. 
                Ağ trafiğini analiz edin, güvenliği artırın, compliance sağlayın.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  ZeroNet Katalog
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition-all"
                >
                  Compliance Rehberi
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ISS Challenges */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">ISS Sektörünün Zorlukları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Artan internet trafiği, güvenlik tehditleri ve yasal zorunluluklar 
                ISS'leri yeni çözümler arayışına itiyor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Traffic Growth',
                  desc: 'Exponential büyüyen internet trafiği',
                  icon: Globe
                },
                {
                  title: 'Security Threats',
                  desc: 'Artan siber saldırılar ve tehditler',
                  icon: Shield
                },
                {
                  title: 'Legal Compliance',
                  desc: 'BTK 5651 ve diğer yasal zorunluluklar',
                  icon: Activity
                },
                {
                  title: 'Cost Pressure',
                  desc: 'Artan maliyetler ve kar marjı baskısı',
                  icon: Settings
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">ISS Ürün Portföyü</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Internet Servis Sağlayıcıları için özel geliştirilmiş 6 ana ürün ile 
                ağ yönetimi, güvenlik ve compliance ihtiyaçlarınızı karşılayın.
              </p>
            </motion.div>

            <div className="space-y-16">
              {issProducts.map((product, index) => (
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
                    <div className="grid grid-cols-3 gap-4">
                      {product.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                      <product.icon className={`w-24 h-24 text-${product.color}-600`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ZeroNet Technology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">ZeroNet Teknolojisi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ISS ihtiyaçları için özel geliştirilmiş yüksek performanslı teknoloji stack
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'High Performance Engine',
                  description: 'Ultra-hızlı packet processing ve analysis',
                  features: ['100Gbps+ throughput', 'Hardware acceleration', 'Zero-copy architecture', 'DPDK integration'],
                  icon: Server
                },
                {
                  title: 'AI-Powered Analytics',
                  description: 'Machine learning ile gelişmiş traffic analizi',
                  features: ['Pattern recognition', 'Anomaly detection', 'Predictive analytics', 'Self-learning algorithms'],
                  icon: Eye
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Büyüyen ISS ihtiyaçlarına uyum',
                  features: ['Horizontal scaling', 'Cloud-native design', 'Microservices architecture', 'Auto-scaling'],
                  icon: Network
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <p className="text-gray-600 mb-6">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
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

        {/* Compliance & Legal */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Compliance & Legal Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Yasal zorunlulukları yerine getirmek için kapsamlı compliance desteği
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  {
                    title: 'BTK 5651 Uyumu',
                    description: 'Türkiye\'deki yasal zorunluluklar için tam destek'
                  },
                  {
                    title: 'GDPR Compliance',
                    description: 'Avrupa veri koruma yönetmeliği uyumlulugu'
                  },
                  {
                    title: 'Data Retention',
                    description: 'Yasal veri saklama gereksinimlerini karşılama'
                  },
                  {
                    title: 'Audit Support',
                    description: 'Denetim süreçleri için raporlama ve destek'
                  }
                ].map((compliance, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-3">{compliance.title}</h3>
                    <p className="text-gray-600">{compliance.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Legal Requirements Coverage</h3>
                <div className="space-y-4">
                  {[
                    { requirement: 'Log Retention', coverage: '100%', icon: Activity },
                    { requirement: 'Data Privacy', coverage: '100%', icon: Shield },
                    { requirement: 'Audit Trail', coverage: '100%', icon: Eye },
                    { requirement: 'Compliance Reporting', coverage: '100%', icon: Settings }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-teal-600" />
                        <span className="font-medium">{item.requirement}</span>
                      </div>
                      <span className="text-xl font-bold text-green-600">{item.coverage}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-teal-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">ZeroNet Performance Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '100Gbps+', label: 'Throughput Capacity' },
                  { value: '10M+', label: 'Logs/Second' },
                  { value: '5000+', label: 'Application Support' },
                  { value: '99.99%', label: 'Detection Accuracy' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-teal-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-green-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ISS Altyapınızı Güçlendirin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                ZeroNet ürünleri ile network intelligence kazanın, 
                güvenliği artırın ve compliance sağlayın.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                ISS Çözümleri Danışmanlığı
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Lock, 
  Shield, 
  Eye,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Monitor,
  AlertTriangle,
  Settings,
  BarChart3,
  Globe,
  Target
} from 'lucide-react'

const productFeatures = [
  {
    title: 'VPN Protokol Tespiti',
    description: 'ISS ağınızda kullanılan tüm VPN protokollerini gerçek zamanlı olarak tespit edin.',
    icon: Eye,
    features: [
      'OpenVPN detection',
      'IPSec identification',
      'WireGuard recognition',
      'Obfuscated VPN tracking'
    ]
  },
  {
    title: 'Politika Yönetimi',
    description: 'VPN kullanımı için esnek politikalar tanımlayın ve otomatik olarak uygulayın.',
    icon: Settings,
    features: [
      'Custom policy rules',
      'Whitelist management',
      'Automatic enforcement',
      'Real-time blocking'
    ]
  },
  {
    title: 'Trafik Analizi',
    description: 'VPN trafiğini detaylı analiz edin ve bandwidth kullanım raporları oluşturun.',
    icon: BarChart3,
    features: [
      'Traffic profiling',
      'Bandwidth monitoring',
      'Usage analytics',
      'Performance metrics'
    ]
  },
  {
    title: 'ISS Uyumlu Çözüm',
    description: 'ISS altyapınıza sorunsuz entegrasyon ve yüksek performanslı işleme.',
    icon: Network,
    features: [
      '40Gbps+ throughput',
      'Carrier-grade reliability',
      'Scalable architecture',
      'Low latency processing'
    ]
  }
]

const technicalSpecs = [
  { metric: '99.5%', label: 'VPN Detection Rate' },
  { metric: '40Gbps+', label: 'Throughput' },
  { metric: '<5ms', label: 'Processing Latency' },
  { metric: '24/7', label: 'Monitoring' }
]

const useCases = [
  {
    title: 'Bandwidth Management',
    description: 'VPN trafiğini tespit ederek bandwidth kullanımını optimize edin',
    icon: Monitor,
    benefits: ['Traffic shaping', 'QoS enforcement', 'Cost optimization']
  },
  {
    title: 'Content Policy',
    description: 'İçerik politikalarınızı VPN bypass olmadan uygulayın',
    icon: Shield,
    benefits: ['Policy enforcement', 'Content filtering', 'Legal compliance']
  },
  {
    title: 'Security Enhancement',
    description: 'VPN kullanımını izleyerek güvenlik risklerini azaltın',
    icon: Lock,
    benefits: ['Risk mitigation', 'Threat prevention', 'Security monitoring']
  },
  {
    title: 'Customer Analytics',
    description: 'Müşteri davranışlarını analiz ederek hizmet kalitesini artırın',
    icon: Target,
    benefits: ['Usage insights', 'Service optimization', 'Customer satisfaction']
  }
]

export default function VPNZenginetPage() {
  return (
    <>
      <Head>
        <title>VPN: Zenginet - ISS VPN Tespit ve Yönetim Sistemi - Serrasoft</title>
        <meta name="description" content="Internet Servis Sağlayıcıları için gelişmiş VPN tespit ve trafik yönetim çözümü" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/internet-servis-saglayicilari">
                <motion.span 
                  className="text-blue-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← ISS Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                VPN: Zenginet
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Internet Servis Sağlayıcıları için gelişmiş VPN tespit ve trafik yönetim sistemi. 
                VPN kullanımını izleyin, politikalarınızı uygulayın ve bandwidth yönetiminizi optimize edin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  VPN Analiz Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
                >
                  Politika Rehberi
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
                <span className="gradient-text">ISS'ler İçin VPN Yönetimi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                VPN Zenginet, ISS'lerin VPN trafiğini tespit etmesi, yönetmesi ve 
                optimize etmesi için geliştirilmiş kapsamlı bir çözümdür.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Yüksek Tespit Oranı',
                  desc: '%99.5 VPN tespit doğruluğu',
                  icon: Target,
                  color: 'green'
                },
                {
                  title: 'Gerçek Zamanlı',
                  desc: 'Anlık VPN trafik analizi',
                  icon: Zap,
                  color: 'yellow'
                },
                {
                  title: 'Otomatik Politika',
                  desc: 'Akıllı trafik yönetimi',
                  icon: Settings,
                  color: 'blue'
                },
                {
                  title: 'ISS Ölçekli',
                  desc: '40Gbps+ throughput kapasitesi',
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

        {/* VPN Detection Challenges */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">VPN Tespit Zorlukları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern VPN teknolojileri giderek daha karmaşık hale gelen trafik maskeleme yöntemleri kullanıyor
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Obfuscated VPN',
                  desc: 'Trafik şifreleme ve maskeleme',
                  icon: Eye,
                  challenge: 'Normal HTTP/HTTPS trafiği gibi görünür'
                },
                {
                  title: 'Protocol Diversity',
                  desc: 'Çoklu VPN protokolleri',
                  icon: Network,
                  challenge: 'OpenVPN, IPSec, WireGuard ve daha fazlası'
                },
                {
                  title: 'Bandwidth Impact',
                  desc: 'VPN trafiğinin bant genişliği etkisi',
                  icon: AlertTriangle,
                  challenge: 'Kontrol edilmeyen bandwidth kullanımı'
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 mb-4">{challenge.desc}</p>
                  <p className="text-sm text-red-600 italic">{challenge.challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">VPN Zenginet Özellikleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Gelişmiş teknoloji ile tüm VPN türlerini tespit edin ve yönetin
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
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
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
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-blue-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">ISS Kullanım Senaryoları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                VPN Zenginet'i ISS operasyonlarınızın farklı alanlarında kullanın
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-blue-600">
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
                    <div className="text-blue-200">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                VPN Trafiğinizi Kontrol Altına Alın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                VPN Zenginet ile VPN kullanımını tespit edin, politikalarınızı uygulayın 
                ve bandwidth yönetiminizi optimize edin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  VPN Tespit Analizi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
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
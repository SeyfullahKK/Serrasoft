import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Monitor, 
  Brain,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Settings,
  BarChart3,
  Globe,
  Target,
  Cpu,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react'

const productFeatures = [
  {
    title: 'Gelişmiş DPI Motoru',
    description: 'Deep Packet Inspection ile ISS ağınızdaki tüm uygulamaları gerçek zamanlı tespit edin.',
    icon: Search,
    features: [
      'Layer 7 deep inspection',
      '5000+ application signatures',
      'Encrypted traffic analysis',
      'Real-time classification'
    ]
  },
  {
    title: 'AI Destekli Tanıma',
    description: 'Machine learning algoritmaları ile bilinmeyen uygulamaları otomatik tespit edin.',
    icon: Brain,
    features: [
      'ML-based detection',
      'Behavioral analysis',
      'Pattern recognition',
      'Self-learning algorithms'
    ]
  },
  {
    title: 'QoS ve Bandwidth Yönetimi',
    description: 'Uygulama bazında QoS politikaları uygulayın ve bandwidth kullanımını optimize edin.',
    icon: Settings,
    features: [
      'Application-based QoS',
      'Dynamic bandwidth allocation',
      'Traffic shaping',
      'Priority management'
    ]
  },
  {
    title: 'Detaylı Analitik ve Raporlama',
    description: 'Uygulama kullanım istatistikleri ve müşteri davranış analizleri elde edin.',
    icon: BarChart3,
    features: [
      'Real-time statistics',
      'Historical trending',
      'Customer insights',
      'Custom reporting'
    ]
  }
]

const applicationCategories = [
  {
    category: 'Video Streaming',
    description: 'Netflix, YouTube, Twitch, Disney+',
    apps: '500+',
    icon: Monitor,
    color: 'red'
  },
  {
    category: 'Social Media',
    description: 'Facebook, Instagram, TikTok, Twitter',
    apps: '300+',
    icon: Globe,
    color: 'blue'
  },
  {
    category: 'Gaming',
    description: 'Steam, Epic Games, PlayStation, Xbox',
    apps: '800+',
    icon: Target,
    color: 'green'
  },
  {
    category: 'Business Apps',
    description: 'Microsoft 365, Zoom, Teams, Slack',
    apps: '1200+',
    icon: Settings,
    color: 'purple'
  },
  {
    category: 'P2P & File Sharing',
    description: 'BitTorrent, eMule, Direct Connect',
    apps: '200+',
    icon: Network,
    color: 'orange'
  },
  {
    category: 'VoIP',
    description: 'WhatsApp Call, Skype, Viber',
    apps: '150+',
    icon: Zap,
    color: 'yellow'
  }
]

const technicalSpecs = [
  { metric: '5000+', label: 'Uygulama Tanıma' },
  { metric: '99.9%', label: 'Doğruluk Oranı' },
  { metric: '40Gbps+', label: 'Throughput' },
  { metric: '<1ms', label: 'Classification Latency' }
]

const useCases = [
  {
    title: 'Bandwidth Management',
    description: 'Uygulama bazında bandwidth yönetimi ve optimizasyonu',
    icon: TrendingUp,
    benefits: ['Cost optimization', 'QoS enforcement', 'Performance boost']
  },
  {
    title: 'Customer Analytics',
    description: 'Müşteri uygulama kullanım davranışlarını analiz edin',
    icon: BarChart3,
    benefits: ['Usage insights', 'Service planning', 'Revenue optimization']
  },
  {
    title: 'Network Planning',
    description: 'Uygulama trendlerine göre ağ kapasitesi planlayın',
    icon: Network,
    benefits: ['Capacity planning', 'Traffic engineering', 'Infrastructure optimization']
  },
  {
    title: 'Security Enhancement',
    description: 'Şüpheli uygulama aktivitelerini tespit edin',
    icon: Eye,
    benefits: ['Threat detection', 'Anomaly identification', 'Risk mitigation']
  }
]

export default function UygulamaTanimiZenginetPage() {
  return (
    <>
      <Head>
        <title>Uygulama Tanımı: Zenginet - ISS DPI ve Uygulama Analiz Sistemi - Serrasoft</title>
        <meta name="description" content="Internet Servis Sağlayıcıları için AI destekli uygulama tanıma ve DPI çözümü" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 to-red-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/internet-servis-saglayicilari">
                <motion.span 
                  className="text-orange-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← ISS Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Uygulama Tanımı: Zenginet
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Internet Servis Sağlayıcıları için AI destekli uygulama tanıma ve DPI sistemi. 
                5000+ uygulamayı gerçek zamanlı tespit edin, QoS politikalarınızı optimize edin ve müşteri deneyimini artırın.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  DPI Analiz Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-700 transition-all"
                >
                  Uygulama Kataloğu
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">5000+ Uygulama Tanıma Kapasitesi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Popüler streaming platformlarından iş uygulamalarına, 
                gaming servislerinden P2P trafiğine kadar geniş uygulama yelpazesi
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {applicationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="text-xl font-bold text-orange-600">{category.apps}</div>
                  <div className="text-xs text-gray-500">uygulamalar</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-orange-600">
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
                    <div className="text-orange-200">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ISS Ağınızda Tam Uygulama Görünürlüğü
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Uygulama Tanımı Zenginet ile 5000+ uygulamayı tespit edin, 
                QoS politikalarınızı optimize edin ve müşteri deneyimini artırın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  DPI Demo Talebi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-700 transition-all"
                >
                  ISS QoS Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

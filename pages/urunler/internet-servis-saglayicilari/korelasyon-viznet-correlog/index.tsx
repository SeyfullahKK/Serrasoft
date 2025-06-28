import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Network, 
  Activity, 
  Brain,
  Server,
  Search,
  ArrowRight,
  CheckCircle,
  Zap,
  Monitor,
  TrendingUp,
  Settings,
  BarChart3,
  Globe,
  Target,
  AlertTriangle,
  Clock
} from 'lucide-react'

const technicalSpecs = [
  { metric: '100M+', label: 'Event/Saniye' },
  { metric: '<100ms', label: 'Korelasyon Süresi' },
  { metric: '99.99%', label: 'Uptime SLA' },
  { metric: 'PB+', label: 'Data Retention' }
]

const useCases = [
  {
    title: 'Network Operations',
    description: 'NOC operasyonları için gerçek zamanlı network monitoring',
    icon: Monitor,
    benefits: ['Proactive monitoring', 'Fast incident response', 'SLA management']
  },
  {
    title: 'Security Operations',
    description: 'SOC için güvenlik olaylarının korelasyonu ve analizi',
    icon: AlertTriangle,
    benefits: ['Threat correlation', 'Security analytics', 'Incident investigation']
  },
  {
    title: 'Performance Management',
    description: 'ISS ağ performansının sürekli izlenmesi ve optimizasyonu',
    icon: TrendingUp,
    benefits: ['Performance optimization', 'Capacity planning', 'Quality assurance']
  },
  {
    title: 'Customer Experience',
    description: 'Müşteri deneyimini etkileyen faktörlerin analizi',
    icon: Target,
    benefits: ['Customer insights', 'Service quality', 'Satisfaction improvement']
  }
]

export default function KorelasyonViziNetCorrelogPage() {
  return (
    <>
      <Head>
        <title>Korelasyon: ViziNet Correlog - ISS Log Korelasyon ve Analitik Platformu - Serrasoft</title>
        <meta name="description" content="Internet Servis Sağlayıcıları için gelişmiş log korelasyon ve network analitik çözümü" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/internet-servis-saglayicilari">
                <motion.span 
                  className="text-indigo-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← ISS Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Korelasyon: ViziNet Correlog
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Internet Servis Sağlayıcıları için gelişmiş log korelasyon ve network analitik platformu. 
                Milyonlarca network olayını gerçek zamanlı ilişkilendirin ve operasyonel zeka elde edin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Korelasyon Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all"
                >
                  NOC Dashboard
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
                <span className="gradient-text">ISS Log Korelasyon Zorlukları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern ISS ağları her saniye milyonlarca log kaydı üretiyor. 
                Bu verileri anlamlı hale getirmek ve operasyonel zeka elde etmek büyük bir zorluk.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Data Volume',
                  desc: 'Petabyte seviyesinde log verisi',
                  icon: Server,
                  challenge: '100M+ event/saniye'
                },
                {
                  title: 'Real-time Processing',
                  desc: 'Gerçek zamanlı analiz ihtiyacı',
                  icon: Clock,
                  challenge: '<100ms response time'
                },
                {
                  title: 'Complex Correlations',
                  desc: 'Çok kaynaklı veri ilişkilendirme',
                  icon: Network,
                  challenge: 'Multi-dimensional analysis'
                },
                {
                  title: 'Operational Intelligence',
                  desc: 'Actionable insights üretme',
                  icon: Brain,
                  challenge: 'Pattern recognition'
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 mb-3">{challenge.desc}</p>
                  <p className="text-sm font-semibold text-indigo-600">{challenge.challenge}</p>
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
              <h2 className="text-4xl font-bold mb-6">ISS Kullanım Alanları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ViziNet Correlog'u ISS operasyonlarınızın farklı alanlarında kullanın
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
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-indigo-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Korelasyon Performans Metrikleri</h2>
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
                    <div className="text-indigo-200">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ISS Log Verilerinizi Operasyonel Zekaya Dönüştürün
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                ViziNet Correlog ile milyonlarca network olayını gerçek zamanlı ilişkilendirin, 
                proaktif monitoring yapın ve operasyonel verimliliğinizi artırın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Korelasyon Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all"
                >
                  NOC Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
 
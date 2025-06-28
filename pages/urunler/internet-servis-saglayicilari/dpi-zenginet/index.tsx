import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Monitor, 
  Eye, 
  Cpu,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Settings,
  BarChart3,
  Globe,
  Target,
  Filter,
  Search,
  TrendingUp,
  Shield
} from 'lucide-react'

const technicalSpecs = [
  { metric: '100Gbps+', label: 'Throughput Kapasitesi' },
  { metric: 'Layer 7', label: 'Deep Inspection' },
  { metric: '<1ms', label: 'Processing Latency' },
  { metric: '1000+', label: 'Protocol Signatures' }
]

const useCases = [
  {
    title: 'Network Optimization',
    description: 'DPI verilerine dayalı ağ optimizasyonu ve kapasite planlama',
    icon: TrendingUp,
    benefits: ['Traffic engineering', 'Capacity planning', 'Cost optimization']
  },
  {
    title: 'QoS Management',
    description: 'Uygulama bazında QoS politikaları ve servis kalitesi yönetimi',
    icon: Settings,
    benefits: ['Service prioritization', 'SLA enforcement', 'Customer satisfaction']
  },
  {
    title: 'Security Enhancement',
    description: 'DPI ile güvenlik tehditleri ve anormal trafik tespiti',
    icon: Shield,
    benefits: ['Threat detection', 'Anomaly identification', 'Security analytics']
  },
  {
    title: 'Revenue Optimization',
    description: 'Trafik analizi ile gelir optimizasyonu ve yeni hizmet fırsatları',
    icon: BarChart3,
    benefits: ['Usage analytics', 'Service planning', 'Revenue generation']
  }
]

export default function DPIZenginetPage() {
  return (
    <>
      <Head>
        <title>DPI: Zenginet - ISS Deep Packet Inspection Sistemi - Serrasoft</title>
        <meta name="description" content="Internet Servis Sağlayıcıları için yüksek performanslı Deep Packet Inspection ve trafik analizi çözümü" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/internet-servis-saglayicilari">
                <motion.span 
                  className="text-purple-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← ISS Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                DPI: Zenginet
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Internet Servis Sağlayıcıları için yüksek performanslı Deep Packet Inspection sistemi. 
                100Gbps+ throughput ile Layer 7 analizi yapın, trafik yönetiminizi optimize edin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  DPI Performance Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all"
                >
                  Protokol Kataloğu
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DPI Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">ISS Seviyesinde Deep Packet Inspection</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                DPI Zenginet, ISS ağlarının yüksek hacimli trafiğini gerçek zamanlı analiz ederek 
                network görünürlüğü ve trafik yönetimi sağlar.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Carrier-Grade',
                  desc: '100Gbps+ işleme kapasitesi',
                  icon: Server,
                  color: 'blue'
                },
                {
                  title: 'Layer 7 Analysis',
                  desc: 'Uygulama seviyesi inceleme',
                  icon: Eye,
                  color: 'purple'
                },
                {
                  title: 'Real-time',
                  desc: '<1ms işleme gecikmesi',
                  icon: Zap,
                  color: 'yellow'
                },
                {
                  title: 'Protocol Rich',
                  desc: '1000+ protokol desteği',
                  icon: Filter,
                  color: 'green'
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
                DPI Zenginet'i ISS operasyonlarınızın farklı alanlarında kullanın
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-purple-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">DPI Performans Metrikleri</h2>
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
                    <div className="text-purple-200">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ISS Ağınızda Tam Trafik Görünürlüğü
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                DPI Zenginet ile 100Gbps+ throughput'ta Layer 7 analizi yapın, 
                trafik yönetiminizi optimize edin ve network intelligence elde edin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  DPI Performance Testi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all"
                >
                  ISS Trafik Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

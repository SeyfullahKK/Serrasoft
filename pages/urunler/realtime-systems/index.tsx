import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Activity, 
  Database, 
  Cloud,
  Server,
  Cpu,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Monitor,
  Settings,
  Eye
} from 'lucide-react'

const realtimeProducts = [
  {
    id: 'streaming-analytics',
    title: 'Real-Time Streaming Analytics',
    description: 'Gerçek zamanlı veri akışları için yüksek performanslı analitik motor',
          icon: Activity,
    features: [
      'Stream processing',
      'Complex event processing',
      'Real-time aggregations',
      'Low-latency analytics'
    ],
    benefits: [
      'Instant insights',
      'Predictive analytics',
      'Operational intelligence'
    ]
  },
  {
    id: 'event-processing',
    title: 'Complex Event Processing',
    description: 'Karmaşık event pattern matching ve gerçek zamanlı decision making',
    icon: Activity,
    features: [
      'Pattern recognition',
      'Event correlation',
      'Rule-based processing',
      'Multi-stream fusion'
    ],
    benefits: [
      'Automated responses',
      'Anomaly detection',
      'Business process optimization'
    ]
  },
  {
    id: 'time-series-db',
    title: 'Time-Series Database',
    description: 'Yüksek frekanslı zaman serisi verileri için optimize edilmiş veritabanı',
          icon: Monitor,
    features: [
      'High ingestion rate',
      'Data compression',
      'Time-based queries',
      'Retention policies'
    ],
    benefits: [
      'Efficient storage',
      'Fast queries',
      'Historical analysis'
    ]
  },
  {
    id: 'realtime-dashboard',
    title: 'Real-Time Dashboard Engine',
    description: 'Canlı veri görselleştirme ve monitoring için dashboard platformu',
    icon: Monitor,
    features: [
      'Live data visualization',
      'Custom widgets',
      'Alert management',
      'Interactive charts'
    ],
    benefits: [
      'Real-time visibility',
      'Quick decision making',
      'Operational awareness'
    ]
  },
  {
    id: 'low-latency-messaging',
    title: 'Ultra-Low Latency Messaging',
    description: 'Mikrosaniye seviyesinde gecikme ile mesajlaşma sistemi',
    icon: Zap,
    features: [
      'Sub-millisecond latency',
      'High throughput',
      'Deterministic performance',
      'Zero-copy operations'
    ],
    benefits: [
      'Ultra-fast communication',
      'Predictable performance',
      'High-frequency operations'
    ]
  },
  {
    id: 'realtime-monitoring',
    title: 'Real-Time System Monitoring',
    description: 'Sistem performansı ve health için gerçek zamanlı izleme',
          icon: Zap,
    features: [
      'System metrics collection',
      'Performance monitoring',
      'Health checking',
      'Auto-scaling triggers'
    ],
    benefits: [
      'Proactive monitoring',
      'Performance optimization',
      'System reliability'
    ]
  }
]

export default function RealtimeSystemsPage() {
  return (
    <>
      <Head>
        <title>Real-Time Systems - Serrasoft</title>
        <meta name="description" content="Gerçek zamanlı sistemler için ultra-düşük gecikme çözümleri" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 to-pink-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-red-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Real-Time Systems
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Mikrosaniye seviyesinde performans gerektiren uygulamalar için 
                ultra-düşük gecikme ve yüksek throughput çözümleri.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Performance Benchmarks
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-700 transition-all"
                >
                  Latency Optimizasyonu
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Real-Time Performance</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mission-critical uygulamalar için garantili performans metrikleri
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Ultra-Low Latency',
                  metric: '<1μs',
                  desc: 'Message processing latency',
                  icon: Zap
                },
                {
                  title: 'High Throughput',
                  metric: '10M+',
                  desc: 'Events per second',
                  icon: Zap
                },
                {
                  title: 'Deterministic',
                  metric: '99.99%',
                  desc: 'Timing predictability',
                  icon: Activity
                },
                {
                  title: 'Zero Downtime',
                  metric: '99.999%',
                  desc: 'System availability',
                  icon: Activity
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-effect rounded-2xl p-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{metric.metric}</div>
                  <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                  <p className="text-gray-600">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {realtimeProducts.map((product, index) => (
                <motion.div
                  key={product.id}
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
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{product.title}</h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{product.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Temel Özellikler</h3>
                      <div className="space-y-3">
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
                    </div>
                    
                    <Link href={`/urunler/realtime-systems/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-red-600 font-semibold hover:gap-4 transition-all"
                      >
                        Ürün Detayları
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">Performans Avantajları</h3>
                    <div className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-transparent rounded-lg"
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

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Real-Time Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kritik gerçek zamanlı uygulamalar için optimize edilmiş çözümler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Financial Trading',
                  description: 'Algorithmic trading ve high-frequency trading platformları',
                  features: ['Sub-microsecond latency', 'Market data processing', 'Risk management', 'Order execution'],
                  icon: Activity
                },
                {
                  title: 'Industrial Automation',
                  description: 'Real-time kontrol sistemleri ve monitoring',
                  features: ['Process control', 'Safety systems', 'Predictive maintenance', 'Quality assurance'],
                  icon: Cpu
                },
                {
                  title: 'Gaming & Media',
                  description: 'Online gaming ve live streaming platformları',
                  features: ['Real-time multiplayer', 'Live streaming', 'Content delivery', 'Player analytics'],
                  icon: Monitor
                }
              ].map((usecase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <usecase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{usecase.title}</h3>
                  <p className="text-gray-600 mb-6">{usecase.description}</p>
                  <ul className="space-y-2">
                    {usecase.features.map((feature, idx) => (
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

        {/* Stats Section */}
        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Real-Time Performance Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '<500ns', label: 'Average Latency' },
                  { value: '100M+', label: 'Events/Second' },
                  { value: '0', label: 'Message Loss' },
                  { value: '24/7', label: 'Continuous Operation' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-red-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Real-Time Performansı Deneyimleyin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Kritik uygulamalarınız için ultra-düşük gecikme çözümleri. 
                Performance benchmark'larımızı test edin.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Performance Test Rezervasyonu
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
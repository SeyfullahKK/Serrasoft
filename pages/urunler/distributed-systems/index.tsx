import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Database, 
  Network, 
  Activity, 
  Server,
  Cloud,
  Cpu,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Lock,
  Monitor,
  Settings,
  Eye
} from 'lucide-react'

const distributedProducts = [
  {
    id: 'microservices-platform',
    title: 'Microservices Platform',
    description: 'Kurumsal microservices mimarisi için kapsamlı geliştirme ve deployment platformu',
          icon: Network,
    features: [
      'Service mesh integration',
      'Container orchestration',
      'API gateway',
      'Service discovery'
    ],
    benefits: [
      'Scalable architecture',
      'Independent deployment',
      'Technology diversity'
    ]
  },
  {
    id: 'distributed-database',
    title: 'Distributed Database',
    description: 'Yüksek erişilebilirlik ve performans için dağıtık veritabanı çözümleri',
    icon: Database,
    features: [
      'Multi-master replication',
      'Automatic sharding',
      'ACID compliance',
      'Global distribution'
    ],
    benefits: [
      'High availability',
      'Horizontal scaling',
      'Data consistency'
    ]
  },
  {
    id: 'message-queue',
    title: 'Enterprise Message Queue',
    description: 'Yüksek hacimli mesaj işleme için enterprise-grade message queue sistemi',
    icon: Network,
    features: [
      'High throughput',
      'Message durability',
      'Dead letter handling',
      'Multi-protocol support'
    ],
    benefits: [
      'Asynchronous processing',
      'System decoupling',
      'Fault tolerance'
    ]
  },
  {
    id: 'distributed-cache',
    title: 'Distributed Cache',
    description: 'Dağıtık caching sistemi ile application performance optimizasyonu',
    icon: Server,
    features: [
      'In-memory caching',
      'Distributed consistency',
      'Auto-scaling',
      'Multi-tier architecture'
    ],
    benefits: [
      'Performance improvement',
      'Reduced latency',
      'Cost optimization'
    ]
  },
  {
    id: 'workflow-engine',
    title: 'Distributed Workflow Engine',
    description: 'Karmaşık iş süreçleri için dağıtık workflow yönetim sistemi',
    icon: Settings,
    features: [
      'Visual workflow designer',
      'State management',
      'Error handling',
      'Event-driven processing'
    ],
    benefits: [
      'Process automation',
      'Business agility',
      'Operational efficiency'
    ]
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability',
    description: 'Distributed systems için kapsamlı monitoring ve observability platformu',
    icon: Monitor,
    features: [
      'Distributed tracing',
      'Metrics collection',
      'Log aggregation',
      'Alerting system'
    ],
    benefits: [
      'System visibility',
      'Performance insights',
      'Proactive monitoring'
    ]
  }
]

export default function DistributedSystemsPage() {
  return (
    <>
      <Head>
        <title>Distributed Systems - Serrasoft</title>
        <meta name="description" content="Modern distributed systems için ölçeklenebilir ve güvenilir çözümler" />
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
              <Link href="/urunler">
                <motion.span 
                  className="text-indigo-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Distributed Systems
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Modern distributed architectures için kapsamlı çözümler. 
                Microservices'den distributed databases'e, message queues'den workflow engines'e.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Architecture Guide
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all"
                >
                  Migration Kılavuzu
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {distributedProducts.map((product, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                    
                    <Link href={`/urunler/distributed-systems/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all"
                      >
                        Ürün Detayları
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">Teknik Faydalar</h3>
                    <div className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg"
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

        {/* Architecture Patterns */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Distributed Architecture Patterns</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven design patterns ile scalable ve resilient sistemler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Event-Driven Architecture',
                  description: 'Asynchronous event processing ile loose coupling',
                  patterns: ['Event Sourcing', 'CQRS', 'Saga Pattern', 'Event Streaming'],
                  icon: Activity
                },
                {
                  title: 'Service Mesh',
                  description: 'Service-to-service communication management',
                  patterns: ['Circuit Breaker', 'Retry Pattern', 'Bulkhead', 'Rate Limiting'],
                  icon: Network
                },
                {
                  title: 'Data Patterns',
                  description: 'Distributed data management strategies',
                  patterns: ['Database per Service', 'Shared Database', 'Data Lake', 'Event Store'],
                  icon: Database
                }
              ].map((pattern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <pattern.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pattern.title}</h3>
                  <p className="text-gray-600 mb-6">{pattern.description}</p>
                  <ul className="space-y-2">
                    {pattern.patterns.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-indigo-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Distributed Systems Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '1M+', label: 'Messages/Second' },
                  { value: '99.99%', label: 'System Availability' },
                  { value: '<10ms', label: 'Inter-Service Latency' },
                  { value: '1000+', label: 'Concurrent Services' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-indigo-200">{stat.label}</div>
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
                Distributed Architecture'a Geçin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Modern distributed systems ile uygulamalarınızı scale edin. 
                Uzman ekibimizle migration stratejinizi planlayın.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Migration Danışmanlığı
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
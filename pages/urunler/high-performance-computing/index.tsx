import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Zap, 
  Database, 
  Server,
  Cloud,
  Activity,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Monitor,
  Settings,
  Eye
} from 'lucide-react'

const hpcProducts = [
  {
    id: 'parallel-computing-framework',
    title: 'Parallel Computing Framework',
    description: 'Massively parallel uygulamalar için optimize edilmiş computing framework',
    icon: Cpu,
    features: [
      'Multi-core processing',
      'GPU acceleration',
      'Distributed computing',
      'Memory optimization'
    ],
    benefits: [
      'Exponential performance gain',
      'Resource efficiency',
      'Scalable computation'
    ]
  },
  {
    id: 'cluster-management',
    title: 'HPC Cluster Management',
    description: 'Yüksek performanslı computing cluster\'ları için yönetim platformu',
    icon: Server,
    features: [
      'Job scheduling',
      'Resource allocation',
      'Load balancing',
      'Performance monitoring'
    ],
    benefits: [
      'Optimal resource utilization',
      'Workflow automation',
      'Performance optimization'
    ]
  },
  {
    id: 'scientific-computing',
    title: 'Scientific Computing Suite',
    description: 'Bilimsel hesaplamalar için özelleştirilmiş computing araçları',
          icon: Monitor,
    features: [
      'Numerical analysis',
      'Statistical computing',
      'Data visualization',
      'Algorithm optimization'
    ],
    benefits: [
      'Research acceleration',
      'Data insights',
      'Scientific discovery'
    ]
  },
  {
    id: 'big-data-processing',
    title: 'Big Data Processing Engine',
    description: 'Büyük veri setleri için yüksek performanslı işleme motoru',
    icon: Database,
    features: [
      'Distributed processing',
      'Stream analytics',
      'Machine learning',
      'Data pipelines'
    ],
    benefits: [
      'Fast data processing',
      'Real-time analytics',
      'Predictive insights'
    ]
  },
  {
    id: 'ai-acceleration',
    title: 'AI/ML Acceleration Platform',
    description: 'Yapay zeka ve machine learning için hardware-accelerated platform',
    icon: Zap,
    features: [
      'GPU/TPU optimization',
      'Model training',
      'Inference acceleration',
      'AutoML capabilities'
    ],
    benefits: [
      'Faster model training',
      'Improved accuracy',
      'Cost optimization'
    ]
  },
  {
    id: 'quantum-simulation',
    title: 'Quantum Computing Simulator',
    description: 'Quantum algoritmaları için classical HPC simulation platform',
    icon: Settings,
    features: [
      'Quantum gate simulation',
      'Qubit modeling',
      'Error correction',
      'Algorithm testing'
    ],
    benefits: [
      'Quantum algorithm development',
      'Research acceleration',
      'Cost-effective testing'
    ]
  }
]

export default function HPCPage() {
  return (
    <>
      <Head>
        <title>High Performance Computing - Serrasoft</title>
        <meta name="description" content="Yüksek performanslı bilişim için supercomputing çözümleri" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900 to-blue-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-cyan-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                High Performance Computing
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Supercomputing seviyesinde hesaplama gücü gerektiren uygulamalar için 
                optimize edilmiş HPC platformları ve çözümleri.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-cyan-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  HPC Mimarisi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-700 transition-all"
                >
                  Performance Analizi
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HPC Capabilities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">HPC Kapasiteleri</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Petaflop seviyesinde hesaplama gücü ile en karmaşık problemleri çözün
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Computing Power',
                  metric: '1+ PFlops',
                  desc: 'Peak performance capability',
                  icon: Cpu
                },
                {
                  title: 'Memory Bandwidth',
                  metric: '10+ TB/s',
                  desc: 'High-speed memory access',
                  icon: Zap
                },
                {
                  title: 'Parallel Efficiency',
                  metric: '95%+',
                  desc: 'Scaling efficiency',
                  icon: Monitor
                },
                {
                  title: 'Storage Throughput',
                  metric: '1+ PB/s',
                  desc: 'I/O performance',
                  icon: Database
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-effect rounded-2xl p-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{capability.metric}</div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {hpcProducts.map((product, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
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
                    
                    <Link href={`/urunler/high-performance-computing/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all"
                      >
                        Ürün Detayları
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">HPC Avantajları</h3>
                    <div className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg"
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

        {/* HPC Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">HPC Uygulama Alanları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kritik bilimsel ve endüstriyel problemler için HPC çözümleri
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Scientific Research',
                  description: 'Akademik araştırma ve bilimsel keşifler',
                  applications: ['Particle Physics', 'Climate Modeling', 'Genomics', 'Astronomy'],
                  icon: Monitor
                },
                {
                  title: 'Engineering Simulation',
                  description: 'Mühendislik tasarım ve simülasyon',
                  applications: ['CFD Analysis', 'Structural Analysis', 'Crash Simulation', 'Aerodynamics'],
                  icon: Settings
                },
                {
                  title: 'Financial Computing',
                  description: 'Finansal modeling ve risk analizi',
                  applications: ['Risk Modeling', 'Portfolio Optimization', 'Fraud Detection', 'Algorithmic Trading'],
                  icon: Activity
                }
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <application.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{application.title}</h3>
                  <p className="text-gray-600 mb-6">{application.description}</p>
                  <ul className="space-y-2">
                    {application.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HPC Architecture */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">HPC Mimarisi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern HPC sistemleri için optimize edilmiş mimari yaklaşımları
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: 'Compute Nodes',
                    description: 'Yüksek performanslı CPU ve GPU cluster\'ları',
                    specs: ['Multi-core CPUs', 'GPU acceleration', 'High-speed interconnect', 'NUMA optimization']
                  },
                  {
                    title: 'Storage System',
                    description: 'Parallel file systems ve high-speed storage',
                    specs: ['Parallel filesystem', 'NVMe storage', 'Burst buffers', 'Data tiering']
                  },
                  {
                    title: 'Network Fabric',
                    description: 'Ultra-low latency network infrastructure',
                    specs: ['InfiniBand/Ethernet', 'RDMA support', 'Fat-tree topology', 'Adaptive routing']
                  }
                ].map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-3">{component.title}</h3>
                    <p className="text-gray-600 mb-4">{component.description}</p>
                    <div className="space-y-2">
                      {component.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Performance Specifications</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Peak Performance', value: '1+ Exaflops', icon: Cpu },
                    { label: 'Memory Capacity', value: '100+ TB', icon: Database },
                    { label: 'Storage Bandwidth', value: '1+ PB/s', icon: Server },
                    { label: 'Network Latency', value: '<1μs', icon: Zap }
                  ].map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <spec.icon className="w-6 h-6 text-cyan-600" />
                        <span className="font-medium">{spec.label}</span>
                      </div>
                      <span className="text-xl font-bold text-cyan-600">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-cyan-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">HPC Performance Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '1+ EFlops', label: 'Computing Power' },
                  { value: '100K+', label: 'CPU Cores' },
                  { value: '10K+', label: 'GPU Units' },
                  { value: '95%+', label: 'Parallel Efficiency' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-cyan-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Supercomputing Gücünü Keşfedin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                En karmaşık hesaplamalı problemler için HPC çözümleri. 
                Araştırmanızı ve inovasyonunuzu hızlandırın.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                HPC Konsültasyonu
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
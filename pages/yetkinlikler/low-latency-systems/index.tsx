import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Timer, 
  Zap, 
  TrendingUp, 
  Cpu, 
  ArrowLeft,
  CheckCircle,
  Activity,
  BarChart3,
  Clock,
  Bolt
} from 'lucide-react'

const LowLatencySystemsPage = () => {
  const technologies = [
    {
      title: 'Ultra-low Latency Messaging',
      description: 'Nanosecond-level messaging ve inter-process communication',
      icon: Bolt,
      features: ['Zero-copy Messaging', 'Lock-free Algorithms', 'RDMA Support', 'Custom Protocols']
    },
    {
      title: 'High-frequency Trading',
      description: 'Microsecond trading systems ve market data processing',
      icon: TrendingUp,
      features: ['FPGA Acceleration', 'Kernel Bypass', 'Co-location', 'Direct Market Access']
    },
    {
      title: 'Edge Computing Platform',
      description: 'Edge locations için ultra-low latency processing',
      icon: Activity,
      features: ['Edge Orchestration', 'CDN Integration', '5G Edge', 'Real-time Analytics']
    },
    {
      title: 'Hardware Acceleration',
      description: 'FPGA ve GPU tabanlı hızlandırma çözümleri',
      icon: Cpu,
      features: ['FPGA Programming', 'GPU Computing', 'Custom ASICs', 'Hardware Offloading']
    }
  ]

  const performanceMetrics = [
    { metric: '<100ns', label: 'Message Latency', description: 'Nanosecond-level messaging' },
    { metric: '<1μs', label: 'Trading Latency', description: 'Microsecond trading execution' },
    { metric: '10M+', label: 'Messages/sec', description: 'High-frequency throughput' },
    { metric: '99.999%', label: 'Determinism', description: 'Predictable performance' }
  ]

  const technologies_stack = [
    'DPDK', 'RDMA/InfiniBand', 'FPGA', 'GPU CUDA', 'Kernel Bypass',
    'Zero-copy', 'Lock-free Data Structures', 'Memory Mapping', 'CPU Affinity',
    'Real-time OS', 'Custom Protocols', 'Hardware Timestamping'
  ]

  const useCases = [
    {
      title: 'Financial Trading',
      description: 'High-frequency trading ve arbitrage systems',
      applications: ['Algorithmic Trading', 'Market Making', 'Arbitrage Detection', 'Risk Management'],
      latency: '<1μs'
    },
    {
      title: 'Gaming & Esports',
      description: 'Competitive gaming ve real-time multiplayer systems',
      applications: ['Game State Sync', 'Anti-cheat Systems', 'Matchmaking', 'Live Streaming'],
      latency: '<5ms'
    },
    {
      title: 'Industrial Automation',
      description: 'Real-time control systems ve robotics',
      applications: ['PLC Control', 'Robot Coordination', 'Safety Systems', 'Process Control'],
      latency: '<100μs'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/yetkinlikler" className="hover:text-serrasoft-primary transition-colors">
              Yetkinlikler
            </Link>
            <span>/</span>
            <span className="text-gray-900">Low Latency Systems</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative">
          <Link href="/yetkinlikler">
            <motion.div
              className="inline-flex items-center gap-2 text-orange-200 hover:text-white transition-colors mb-8 cursor-pointer"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Yetkinliklere Geri Dön</span>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Low Latency Systems
              </h1>
            </div>
            <p className="text-xl text-orange-100 mb-8">
              Ultra-düşük gecikme sistemleri ve high-frequency trading teknolojileri 
              ile kritik timing requirements'ı nanosecond precision ile karşılıyoruz.
            </p>
            <div className="flex justify-start">
              <motion.a
                href="#performance-metrics"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
                style={{ scrollMarginTop: '100px' }}
              >
                Keşfet
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section id="performance-metrics" className="py-20 bg-white" style={{ scrollMarginTop: '100px' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Ultra-low Latency Performance</span>
            </h2>
            <p className="text-xl text-gray-600">Nanosecond precision ile kritik timing requirements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-effect rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">{metric.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Low-latency Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hardware-software co-design ile ultimate performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{tech.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ultra-low Latency Technologies</h2>
            <p className="text-gray-600">Hardware acceleration ve optimization techniques</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {technologies_stack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Critical Latency Applications</span>
            </h2>
            <p className="text-xl text-gray-600">Microsecond-level timing kritik uygulamalar</p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">{useCase.latency}</div>
                    <div className="text-sm text-gray-500">Target Latency</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {useCase.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Latency Optimization Techniques</h2>
            <p className="text-gray-600">Hardware ve software optimizasyon metodları</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hardware Optimization',
                techniques: ['FPGA Programming', 'Custom ASICs', 'RDMA/InfiniBand', 'Hardware Timestamping'],
                icon: Cpu
              },
              {
                title: 'Software Optimization',
                techniques: ['Lock-free Algorithms', 'Zero-copy Messaging', 'Kernel Bypass', 'CPU Affinity'],
                icon: Zap
              },
              {
                title: 'Network Optimization',
                techniques: ['Direct Market Access', 'Co-location', 'Custom Protocols', 'Multicast'],
                icon: Activity
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.techniques.map((technique, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{technique}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Microsecond Matters in Your Business?
            </h2>
            <p className="text-xl opacity-90">
              Ultra-low latency ihtiyaçlarınızı nanosecond precision ile çözelim
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LowLatencySystemsPage 
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Database, 
  GitBranch, 
  MessageSquare, 
  Activity, 
  ArrowLeft,
  CheckCircle,
  Server,
  Layers,
  Globe,
  Zap
} from 'lucide-react'

const DistributedSystemsPage = () => {
  const technologies = [
    {
      title: 'Microservices Platform',
      description: 'Container-based microservices orchestration ve management',
      icon: GitBranch,
      features: ['Service Discovery', 'API Gateway', 'Circuit Breaker', 'Load Balancing']
    },
    {
      title: 'Distributed Database',
      description: 'NoSQL ve NewSQL distributed database çözümleri',
      icon: Database,
      features: ['Horizontal Scaling', 'ACID Compliance', 'Multi-region Replication', 'Auto-sharding']
    },
    {
      title: 'Message Queue Systems',
      description: 'High-throughput asynchronous messaging platformları',
      icon: MessageSquare,
      features: ['Event Streaming', 'Dead Letter Queue', 'Message Ordering', 'At-least-once Delivery']
    },
    {
      title: 'Distributed Cache',
      description: 'In-memory distributed caching ve session management',
      icon: Server,
      features: ['Redis Cluster', 'Memcached', 'Session Replication', 'Cache Invalidation']
    }
  ]

  const architecturePatterns = [
    'Event Sourcing', 'CQRS', 'Saga Pattern', 'Two-Phase Commit', 'Eventual Consistency',
    'CAP Theorem', 'BASE Properties', 'Microservices', 'Service Mesh', 'Event-Driven Architecture'
  ]

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Scalable e-commerce microservices architecture',
      applications: ['Order Management', 'Inventory System', 'Payment Processing', 'Recommendation Engine']
    },
    {
      title: 'Financial Services',
      description: 'Mission-critical banking ve fintech solutions',
      applications: ['Real-time Transactions', 'Risk Management', 'Fraud Detection', 'Regulatory Compliance']
    },
    {
      title: 'IoT & Telemetry',
      description: 'Large-scale IoT data processing platforms',
      applications: ['Device Management', 'Time-series Data', 'Real-time Analytics', 'Edge Computing']
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
            <span className="text-gray-900">Distributed Systems</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative">
          <Link href="/yetkinlikler">
            <motion.div
              className="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8 cursor-pointer"
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Distributed Systems
              </h1>
            </div>
            <p className="text-xl text-purple-100 mb-8">
              Ölçeklenebilir mikroservis mimarileri ve distributed computing platformları 
              ile modern uygulamaların kompleks ihtiyaçlarını karşılıyoruz.
            </p>
            <div className="flex justify-start">
              <motion.a
                href="#technologies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
                style={{ scrollMarginTop: '100px' }}
              >
                Keşfet
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20" style={{ scrollMarginTop: '100px' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Distributed Computing Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern distributed systems'in tüm katmanlarında uzman çözümler
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
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

      {/* Architecture Patterns Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Architecture Patterns & Principles</h2>
            <p className="text-gray-600">Modern distributed systems design patterns</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {architecturePatterns.map((pattern, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {pattern}
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
              <span className="gradient-text">Uygulama Alanları</span>
            </h2>
            <p className="text-xl text-gray-600">Farklı sektörlerde başarılı distributed architectures</p>
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
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {useCase.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Microservices Mimarisine Geçin
            </h2>
            <p className="text-xl opacity-90">
              Monolitik uygulamanızı modern microservices architecture'a dönüştürelim
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DistributedSystemsPage 
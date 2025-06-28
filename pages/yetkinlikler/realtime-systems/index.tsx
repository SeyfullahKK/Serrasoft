import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Activity, 
  Zap, 
  BarChart3, 
  Globe, 
  ArrowLeft,
  CheckCircle,
  Monitor,
  TrendingUp,
  Clock,
  Radio
} from 'lucide-react'

const RealtimeSystemsPage = () => {
  const technologies = [
    {
      title: 'Stream Processing Engine',
      description: 'Real-time data streaming ve event processing platformu',
      icon: Activity,
      features: ['Apache Kafka', 'Apache Storm', 'Windowing Operations', 'Complex Event Processing']
    },
    {
      title: 'Real-time Analytics',
      description: 'Anlık veri analizi ve dashboard sistemleri',
      icon: BarChart3,
      features: ['Time-series Analysis', 'Live Dashboards', 'Anomaly Detection', 'Predictive Analytics']
    },
    {
      title: 'Time-series Database',
      description: 'High-frequency time-series data storage ve querying',
      icon: TrendingUp,
      features: ['InfluxDB', 'TimescaleDB', 'Data Compression', 'Fast Queries']
    },
    {
      title: 'Event Streaming Platform',
      description: 'Distributed event streaming ve messaging architecture',
      icon: Radio,
      features: ['Event Sourcing', 'Topic Partitioning', 'Consumer Groups', 'Exactly-once Semantics']
    }
  ]

  const capabilities = [
    'Stream Processing', 'Complex Event Processing', 'Time-series Analysis', 'Event Sourcing',
    'Real-time ETL', 'Live Dashboards', 'Anomaly Detection', 'Predictive Analytics',
    'Data Visualization', 'Alert Systems', 'Monitoring & Observability', 'Performance Metrics'
  ]

  const useCases = [
    {
      title: 'Financial Trading',
      description: 'High-frequency trading ve risk management systems',
      applications: ['Market Data Processing', 'Algorithmic Trading', 'Risk Monitoring', 'Compliance Reporting']
    },
    {
      title: 'IoT & Sensor Networks',
      description: 'Large-scale IoT data processing ve analytics',
      applications: ['Sensor Data Processing', 'Device Monitoring', 'Predictive Maintenance', 'Environmental Monitoring']
    },
    {
      title: 'Gaming & Live Events',
      description: 'Real-time gaming backends ve live event processing',
      applications: ['Player Analytics', 'Live Leaderboards', 'Event Processing', 'Chat Systems']
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
            <span className="text-gray-900">Realtime Systems</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-teal-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative">
          <Link href="/yetkinlikler">
            <motion.div
              className="inline-flex items-center gap-2 text-green-200 hover:text-white transition-colors mb-8 cursor-pointer"
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
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Realtime Systems
              </h1>
            </div>
            <p className="text-xl text-green-100 mb-8">
              Gerçek zamanlı veri işleme ve streaming analytics çözümleri 
              ile anlık decision-making ve real-time insights sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
              >
                Stream Processing Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all border border-white/20"
              >
                Real-time Dashboard
              </motion.button>
            </div>
          </motion.div>
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
              <span className="gradient-text">Real-time Processing Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Millisecond-level response times ile kritik işlemler
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
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

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Real-time Processing Capabilities</h2>
            <p className="text-gray-600">Anlık veri işleme ve analytics yetenekleri</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((capability, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {capability}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-gray-600">Real-time systems performans göstergeleri</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '<1ms', label: 'Latency', icon: Clock },
              { metric: '1M+', label: 'Events/sec', icon: Zap },
              { metric: '99.99%', label: 'Availability', icon: Monitor },
              { metric: '100TB+', label: 'Daily Volume', icon: BarChart3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.metric}</h3>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
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
            <p className="text-xl text-gray-600">Critical real-time processing ihtiyaçları</p>
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
                      <Activity className="w-4 h-4 text-green-500" />
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Real-time Data Processing İhtiyacınız Var mı?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kritik işlemlerinizi millisecond-level latency ile çözüme kavuşturalım
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Real-time Sistem Analizi
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RealtimeSystemsPage 
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Network, 
  Database, 
  Zap, 
  Timer, 
  Cpu,
  ArrowRight,
  TrendingUp,
  Shield,
  Activity
} from 'lucide-react'

const yetkinlikler = [
  {
    id: 'networking-solutions',
    title: 'Networking Solutions',
    description: 'Modern network altyapıları, SDN teknolojileri ve next-generation network çözümleri',
    icon: Network,
    color: 'from-blue-500 to-cyan-500',
    features: ['SDN & NFV', 'Network Security', 'Load Balancing', 'WiFi Management'],
    link: '/yetkinlikler/networking-solutions'
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    description: 'Ölçeklenebilir mikroservis mimarileri ve distributed computing platformları',
    icon: Database,
    color: 'from-purple-500 to-indigo-500',
    features: ['Microservices', 'Message Queues', 'Distributed Cache', 'Service Mesh'],
    link: '/yetkinlikler/distributed-systems'
  },
  {
    id: 'realtime-systems',
    title: 'Realtime Systems',
    description: 'Gerçek zamanlı veri işleme ve streaming analytics çözümleri',
    icon: Activity,
    color: 'from-green-500 to-teal-500',
    features: ['Stream Processing', 'Real-time Analytics', 'Event Streaming', 'Live Dashboards'],
    link: '/yetkinlikler/realtime-systems'
  },
  {
    id: 'low-latency-systems',
    title: 'Low Latency Systems',
    description: 'Ultra-düşük gecikme sistemleri ve high-frequency trading teknolojileri',
    icon: Timer,
    color: 'from-orange-500 to-red-500',
    features: ['Ultra-low Latency', 'High Frequency Trading', 'Edge Computing', 'Hardware Acceleration'],
    link: '/yetkinlikler/low-latency-systems'
  },
  {
    id: 'high-performance-computing',
    title: 'High Performance Computing',
    description: 'Supercomputing, parallel processing ve büyük ölçekli hesaplama sistemleri',
    icon: Cpu,
    color: 'from-pink-500 to-rose-500',
    features: ['Parallel Computing', 'GPU Acceleration', 'Cluster Management', 'Scientific Computing'],
    link: '/yetkinlikler/high-performance-computing'
  }
]

const stats = [
  { number: '15+', label: 'Yıl Deneyim', icon: TrendingUp },
  { number: '500+', label: 'Tamamlanan Proje', icon: Shield },
  { number: '50+', label: 'Uzman Geliştirici', icon: Network },
  { number: '99.9%', label: 'Sistem Uptime', icon: Activity }
]

const YetkinliklerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-serrasoft-primary/30 to-serrasoft-accent/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Teknoloji Yetkinliklerimiz</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Modern teknolojilerde derin expertise ile karmaşık sistemleri 
              basit ve ölçeklenebilir çözümlere dönüştürüyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
              >
                Projelerimizi İnceleyin
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all border border-white/20 text-white"
              >
                Teknik Konsültasyon
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yetkinlikler Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Core Teknoloji Alanları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her teknoloji alanında derin uzmanlık ve kanıtlanmış başarı geçmişi
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {yetkinlikler.map((yetkinlik, index) => (
              <motion.div
                key={yetkinlik.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={yetkinlik.link}>
                  <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${yetkinlik.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <yetkinlik.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-serrasoft-primary transition-colors">
                      {yetkinlik.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {yetkinlik.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {yetkinlik.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-serrasoft-primary rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-serrasoft-primary font-medium group-hover:gap-4 transition-all">
                      <span>Detayları Görüntüle</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Projenizde Hangi Teknolojiye İhtiyacınız Var?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Uzman ekibimizle birlikte en karmaşık teknik challengeları çözelim
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-serrasoft-primary px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Ücretsiz Teknik Konsültasyon
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default YetkinliklerPage 
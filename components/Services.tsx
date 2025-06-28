import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Network, 
  Globe, 
  Shield, 
  Activity, 
  Database,
  Signal,
  Building2,
  Users,
  Cpu,
  Cloud,
  Zap,
  Monitor,
  Search,
  BarChart
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Network Monitoring & Management & Security',
    description: 'Ağ izleme, yönetimi ve güvenliği konularında uzman çözümler.',
    color: 'from-green-400 to-teal-600',
    link: '/yetkinlikler/networking-solutions'
  },
  {
    icon: BarChart,
    title: 'Big Data Analysis & Management',
    description: 'Büyük veri analizi ve yönetimi için profesyonel çözümler.',
    color: 'from-blue-400 to-cyan-600',
    link: '/yetkinlikler/distributed-systems'
  },
  {
    icon: Activity,
    title: 'Traffic Analysis & Correlation',
    description: 'Trafik analizi ve korelasyon servisleri ile ağ trafiği yönetimi.',
    color: 'from-purple-400 to-indigo-600',
    link: '/cozumler'
  },
  {
    icon: Search,
    title: 'Deep Packet Inspection (DPI)',
    description: 'Derinlemesine paket incelemesi teknolojileri ve çözümleri.',
    color: 'from-orange-400 to-red-600',
    link: '/urunler/zenginet-dpi'
  },
  {
    icon: Database,
    title: 'Distributed Systems',
    description: 'Dağıtık sistem mimarileri ve yüksek performans çözümleri.',
    color: 'from-indigo-400 to-purple-600',
    link: '/yetkinlikler/distributed-systems'
  },
  {
    icon: Network,
    title: 'Telco Çözümleri',
    description: 'Telekomünikasyon operatörleri için özel çözümler.',
    color: 'from-cyan-400 to-blue-600',
    link: '/cozumler/telco'
  },
  {
    icon: Globe,
    title: 'İSS Çözümleri',
    description: 'Internet servis sağlayıcıları için ZengiNet serisi ürünler.',
    color: 'from-red-400 to-pink-600',
    link: '/cozumler/internet-servis-saglayicilari'
  },
  {
    icon: Building2,
    title: 'Kurumsal Çözümler',
    description: 'Kurumsal yatırımcılar için network görünürlülük çözümleri.',
    color: 'from-yellow-400 to-orange-600',
    link: '/cozumler/enterprise'
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Network monitoring ve güvenliğinden büyük veri analizine, 
            deep packet inspection'dan dağıtık sistemlere kadar geniş teknoloji yelpazesinde uzman çözümler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <Link href={service.link}>
                <div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-serrasoft-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/cozumler">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Tüm Çözümleri Görüntüle
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 
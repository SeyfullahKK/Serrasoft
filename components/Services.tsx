import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Server, 
  Globe, 
  Building2, 
  ArrowRight,
  Signal,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react'

const solutions = [
  {
    id: 'telco',
    title: 'Telco Çözümleri',
    description: 'Telekomünikasyon sektörüne özel geliştirilmiş yüksek performanslı çözümler',
    icon: Server,
    color: 'from-blue-500 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100',
    features: [
      'Korelasyon',
      'Loglama', 
      'Uygulama Tanıma'
    ],
    href: '/cozumler/telco',
    stats: { label: 'Operatör', value: 'Çözümleri' }
  },
  {
    id: 'iss',
    title: 'İSS',
    description: 'İSS\'ler için özel tasarlanmış, yüksek trafikli ağları yönetebilen güçlü çözümler',
    icon: Globe,
    color: 'from-purple-500 to-purple-700',
    bgGradient: 'from-purple-50 to-purple-100',
    features: [
      'Akıllı Trafik Kayıt',
      'Gelişmiş VPN Koruma',
      'Kapsamlı İnternet Güvenlik'
    ],
    href: '/cozumler/internet-servis-saglayicilari',
    stats: { label: 'İSS', value: 'Çözümleri' }
  },
  {
    id: 'enterprise',
    title: 'Enterprise Çözümler',
    description: 'Kurumsal işletmeler için uçtan uca dijital dönüşüm ve teknoloji çözümleri',
    icon: Building2,
    color: 'from-green-500 to-green-700',
    bgGradient: 'from-green-50 to-green-100',
    features: [
      'High Performance Computing',
      'Low Latency Systems',
      '5651 Kanun Uyumu'
    ],
    href: '/cozumler/enterprise',
    stats: { label: 'Kurumsal', value: 'Çözümler' }
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Sektöre Özel Çözümler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Telekom operatörleri, internet servis sağlayıcıları ve kurumsal işletmeler için 
            özel olarak tasarlanmış, yüksek performanslı ve güvenilir teknoloji çözümleri
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform opacity-30`} />
              
              <div className="relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                      {solution.title}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${solution.color} text-white`}>
                      {solution.stats.label} {solution.stats.value}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={solution.href}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r ${solution.color} text-white font-semibold hover:shadow-lg transition-all group`}
                  >
                    Keşfedin
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

        
        
      </div>
    </section>
  )
}

export default Services 
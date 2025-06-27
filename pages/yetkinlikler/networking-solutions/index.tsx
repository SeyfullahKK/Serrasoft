import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Network, 
  Shield, 
  Wifi, 
  Router, 
  ArrowLeft,
  CheckCircle,
  Activity,
  Lock,
  Zap,
  Globe
} from 'lucide-react'

const NetworkingSolutionsPage = () => {
  const technologies = [
    {
      title: 'SDN Controller',
      description: 'Software-defined networking ile merkezi network yönetimi',
      icon: Network,
      features: ['OpenFlow Protocol', 'Network Orchestration', 'Policy Management', 'Dynamic Routing']
    },
    {
      title: 'Next-Gen Firewall',
      description: 'Application-aware güvenlik duvarı çözümleri',
      icon: Shield,
      features: ['Deep Packet Inspection', 'Application Control', 'Intrusion Prevention', 'Threat Intelligence']
    },
    {
      title: 'Load Balancer',
      description: 'Intelligent traffic distribution ve high availability',
      icon: Activity,
      features: ['Layer 4/7 Load Balancing', 'Health Monitoring', 'SSL Termination', 'Auto Scaling']
    },
    {
      title: 'WiFi Management',
      description: 'Enterprise wireless network management platformu',
      icon: Wifi,
      features: ['Centralized Management', 'Guest Access', 'RADIUS Integration', 'RF Optimization']
    }
  ]

  const protocols = [
    'OpenFlow', 'NETCONF', 'RESTCONF', 'SNMP', 'BGP', 'OSPF', 'MPLS', 'VXLAN', 
    '802.11ac/ax', 'WPA3', 'RADIUS', 'TACACS+', 'IPSec', 'SSL/TLS'
  ]

  const useCases = [
    {
      title: 'Telco Network Infrastructure',
      description: 'Carrier-grade network solutions with 99.999% uptime',
      applications: ['5G Core Networks', 'Edge Computing', 'Network Slicing', 'NFV Orchestration']
    },
    {
      title: 'Enterprise Campus Networks',
      description: 'Scalable and secure enterprise networking',
      applications: ['Branch Connectivity', 'Zero Trust Architecture', 'SD-WAN', 'Network Segmentation']
    },
    {
      title: 'Data Center Networking',
      description: 'High-performance data center fabrics',
      applications: ['Leaf-Spine Architecture', 'Container Networking', 'Multi-tenancy', 'Micro-segmentation']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/yetkinlikler" className="hover:text-serrasoft-primary transition-colors">
              Yetkinlikler
            </Link>
            <span>/</span>
            <span className="text-gray-900">Networking Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative">
          <Link href="/yetkinlikler">
            <motion.div
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 cursor-pointer"
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
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Networking Solutions
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Modern network altyapıları, SDN teknolojileri ve next-generation network çözümleri 
              ile işletmenizin connectivity ihtiyaçlarını karşılıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
              >
                Çözümlerimizi İnceleyin
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all border border-white/20"
              >
                Teknik Demo
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
              <span className="gradient-text">Network Teknolojileri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern network infrastructure'ın tüm katmanlarında uzman çözümler
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
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

      {/* Protocols Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Desteklenen Protokoller & Standartlar</h2>
            <p className="text-gray-600">Industry-standard protokoller ile tam uyumluluk</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {protocols.map((protocol, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {protocol}
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
            <p className="text-xl text-gray-600">Farklı sektörlerde başarılı implementasyonlar</p>
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
                      <Globe className="w-4 h-4 text-blue-500" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Network Altyapınızı Modernize Edin
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Uzman ekibimizle birlikte networking ihtiyaçlarınızı analiz edelim
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Ücretsiz Network Analizi
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NetworkingSolutionsPage 
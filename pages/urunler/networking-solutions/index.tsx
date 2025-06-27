import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Network, 
  Shield, 
  Activity, 
  Router,
  Wifi,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Server,
  Lock,
  Monitor,
  Settings,
  Eye
} from 'lucide-react'

const networkingProducts = [
  {
    id: 'sdn-controller',
    title: 'SDN Controller',
    description: 'Software-Defined Networking kontrolcüsü ile ağ altyapınızı merkezi olarak yönetin',
    icon: Network,
    features: [
      'Centralized network control',
      'Dynamic flow management',
      'Network automation',
      'Policy enforcement'
    ],
    benefits: [
      'Ağ yönetimi kolaylığı',
      'Operasyonel verimlilik',
      'Dinamik konfigürasyon'
    ]
  },
  {
    id: 'network-firewall',
    title: 'Next-Gen Firewall',
    description: 'Yeni nesil güvenlik duvarı ile ağınızı gelişmiş tehditlerden koruyun',
    icon: Shield,
    features: [
      'Deep packet inspection',
      'Application awareness',
      'Intrusion prevention',
      'Geo-blocking'
    ],
    benefits: [
      'Gelişmiş güvenlik',
      'Application control',
      'Threat protection'
    ]
  },
  {
    id: 'load-balancer',
    title: 'Intelligent Load Balancer',
    description: 'Akıllı yük dağıtım sistemi ile uygulama performansını optimize edin',
    icon: Activity,
    features: [
      'Advanced algorithms',
      'Health monitoring',
      'SSL termination',
      'Auto-scaling'
    ],
    benefits: [
      'Yüksek erişilebilirlik',
      'Performance optimization',
      'Scalability'
    ]
  },
  {
    id: 'wifi-management',
    title: 'WiFi Management Platform',
    description: 'Kurumsal WiFi ağlarınızı merkezi olarak yönetin ve optimize edin',
    icon: Wifi,
    features: [
      'Centralized management',
      'Performance analytics',
      'Guest access control',
      'Security policies'
    ],
    benefits: [
      'WiFi performance artışı',
      'Güvenlik kontrolü',
      'Kullanıcı deneyimi'
    ]
  },
  {
    id: 'network-monitoring',
    title: 'Network Monitoring Suite',
    description: 'Kapsamlı ağ izleme ve performans analizi çözümleri',
    icon: Monitor,
    features: [
      'Real-time monitoring',
      'Traffic analysis',
      'Anomaly detection',
      'Custom dashboards'
    ],
    benefits: [
      'Proaktif sorun tespiti',
      'Network visibility',
      'Performance insights'
    ]
  },
  {
    id: 'vpn-gateway',
    title: 'Enterprise VPN Gateway',
    description: 'Kurumsal VPN çözümleri ile güvenli uzaktan erişim sağlayın',
    icon: Lock,
    features: [
      'Multi-protocol support',
      'High availability',
      'User authentication',
      'Policy management'
    ],
    benefits: [
      'Güvenli remote access',
      'Compliance',
      'Centralized control'
    ]
  }
]

const subProducts = [
  { name: 'SDN Controller', href: '/urunler/networking-solutions/sdn-controller', icon: Network },
  { name: 'Next-Gen Firewall', href: '/urunler/networking-solutions/network-firewall', icon: Shield },
  { name: 'Intelligent Load Balancer', href: '/urunler/networking-solutions/load-balancer', icon: Activity },
  { name: 'WiFi Management Platform', href: '/urunler/networking-solutions/wifi-management', icon: Wifi },
  { name: 'Network Monitoring Suite', href: '/urunler/networking-solutions/network-monitoring', icon: Monitor },
  { name: 'Enterprise VPN Gateway', href: '/urunler/networking-solutions/vpn-gateway', icon: Lock },
]

export default function NetworkingSolutionsPage() {
  return (
    <>
      <Head>
        <title>Networking Solutions - Serrasoft</title>
        <meta name="description" content="Modern ağ altyapıları için networking çözümleri ve ürünler" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-900 to-teal-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-green-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Networking Solutions
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Modern ağ altyapıları için yeni nesil networking çözümleri. 
                SDN'den WiFi yönetimine, güvenlik duvarından load balancing'e kadar.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Çözüm Arşitektürü
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all"
                >
                  Teknik Dokümantasyon
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sub Products Navigation */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Networking Ürün Ailesi</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {subProducts.map((product, index) => (
                  <motion.div
                    key={product.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={product.href}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-effect rounded-xl p-4 text-center hover:shadow-lg transition-all cursor-pointer group"
                      >
                        <product.icon className="w-8 h-8 mx-auto mb-2 text-green-600 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                          {product.name}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Network Challenges Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Modern Ağ Zorlukları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dijital dönüşüm ile birlikte ağ altyapıları daha karmaşık hale geliyor. 
                Güvenlik, performans ve yönetilebilirlik kritik hale geldi.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Network Complexity',
                  desc: 'Artan cihaz sayısı ve karmaşık topology',
                  icon: Network
                },
                {
                  title: 'Security Threats',
                  desc: 'Çeşitlenen siber güvenlik tehditleri',
                  icon: Shield
                },
                {
                  title: 'Performance Demands',
                  desc: 'Yüksek performans ve düşük latency ihtiyacı',
                  icon: Activity
                },
                {
                  title: 'Scalability',
                  desc: 'Büyüyen ihtiyaçlara uyum sağlama',
                  icon: Globe
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {networkingProducts.map((product, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
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
                    
                    <Link href={`/urunler/networking-solutions/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-green-600 font-semibold hover:gap-4 transition-all"
                      >
                        Ürün Detayları
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">İş Değeri</h3>
                    <div className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg"
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

        {/* Network Protocols */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Desteklenen Protokoller</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-standard protokoller ve yeni nesil teknolojilerle tam uyumluluk
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Routing Protocols',
                  protocols: ['BGP', 'OSPF', 'ISIS', 'RIP', 'EIGRP', 'MPLS'],
                  icon: Router
                },
                {
                  title: 'Security Protocols',
                  protocols: ['IPSec', 'TLS/SSL', 'WPA3', 'RADIUS', 'TACACS+', 'PKI'],
                  icon: Shield
                },
                {
                  title: 'Management',
                  protocols: ['SNMP', 'NETCONF', 'RESTCONF', 'OpenFlow', 'gRPC', 'YANG'],
                  icon: Settings
                },
                {
                  title: 'Quality of Service',
                  protocols: ['DiffServ', 'IntServ', 'MPLS-TE', 'WRED', 'PBR', 'SBR'],
                  icon: Activity
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.protocols.map((protocol, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                        {protocol}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Network Performance Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '100K+', label: 'Managed Devices' },
                  { value: '<100ms', label: 'Response Time' },
                  { value: '99.99%', label: 'Network Uptime' },
                  { value: '10Gbps+', label: 'Throughput' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-green-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Network Architecture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern ağ mimarisi yaklaşımları ile optimize edilmiş çözümler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Control Plane',
                  description: 'Merkezi kontrol ve politika yönetimi',
                  features: ['SDN Controller', 'Policy Engine', 'Network Automation', 'Orchestration'],
                  icon: Network
                },
                {
                  title: 'Data Plane',
                  description: 'Yüksek performanslı veri işleme',
                  features: ['Packet Processing', 'Traffic Engineering', 'QoS Enforcement', 'Load Balancing'],
                  icon: Server
                },
                {
                  title: 'Management Plane',
                  description: 'İzleme, analiz ve raporlama',
                  features: ['Network Monitoring', 'Analytics', 'Reporting', 'Troubleshooting'],
                  icon: Eye
                }
              ].map((plane, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <plane.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{plane.title}</h3>
                  <p className="text-gray-600 mb-6">{plane.description}</p>
                  <ul className="space-y-2">
                    {plane.features.map((feature, idx) => (
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Network Altyapınızı Modernize Edin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Yeni nesil networking çözümleri ile ağınızı geleceğe hazırlayın. 
                Uzman ekibimizle network mimarinizi optimize edin.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Network Değerlendirmesi Talep Et
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
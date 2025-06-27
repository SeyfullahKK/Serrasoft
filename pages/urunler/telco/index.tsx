import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Radio, 
  Activity, 
  Signal,
  Satellite,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Server,
  Shield,
  Globe,
  Eye,
  Settings
} from 'lucide-react'

const telcoProducts = [
  {
    id: 'network-monitoring',
    title: 'Ağ İzleme Platformu',
    description: 'Telco operatörler için gerçek zamanlı ağ performans izleme ve optimizasyon',
    icon: Activity,
    features: [
      'Real-time network monitoring',
      'Performance analytics',
      'Fault detection',
      'SLA reporting'
    ],
    benefits: [
      'Network uptime artışı',
      'Proaktif sorun çözümü',
      'Operasyonel maliyet azalması'
    ]
  },
  {
    id: 'billing-revenue-assurance',
    title: 'Billing & Revenue Assurance',
    description: 'Telco faturalandırma ve gelir güvence sistemleri',
    icon: Server,
    features: [
      'Real-time charging',
      'Revenue leakage detection',
      'Fraud management',
      'Multi-service billing'
    ],
    benefits: [
      'Gelir kaybı önleme',
      'Fraud detection',
      'Müşteri memnuniyeti'
    ]
  },
  {
    id: 'customer-experience-management',
    title: 'Customer Experience Management',
    description: 'Müşteri deneyimi izleme ve iyileştirme çözümleri',
    icon: Eye,
    features: [
      'End-to-end visibility',
      'QoE monitoring',
      'Customer journey analytics',
      'Predictive insights'
    ],
    benefits: [
      'Müşteri memnuniyeti artışı',
      'Churn önleme',
      'Service quality improvement'
    ]
  },
  {
    id: '5g-core-solutions',
    title: '5G Core Solutions',
    description: '5G ağ altyapısı ve core network çözümleri',
    icon: Signal,
    features: [
      '5G SA/NSA support',
      'Network slicing',
      'Edge computing',
      'Ultra-low latency'
    ],
    benefits: [
      'Next-gen services',
      'Network efficiency',
      'Innovation enablement'
    ]
  },
  {
    id: 'network-security',
    title: 'Telco Network Security',
    description: 'Telco altyapıları için özelleştirilmiş güvenlik çözümleri',
    icon: Shield,
    features: [
      'DDoS protection',
      'Intrusion detection',
      'Security orchestration',
      'Threat intelligence'
    ],
    benefits: [
      'Network güvenliği',
      'Compliance sağlama',
      'Risk yönetimi'
    ]
  },
  {
    id: 'iot-device-management',
    title: 'IoT Device Management',
    description: 'IoT cihazları için kapsamlı yönetim ve güvenlik platformu',
    icon: Settings,
    features: [
      'Device provisioning',
      'Remote management',
      'Security compliance',
      'Lifecycle management'
    ],
    benefits: [
      'Operasyonel verimlilik',
      'Güvenli IoT ekosistemi',
      'Ölçeklenebilir yönetim'
    ]
  }
]

const subProducts = [
  { name: 'Ağ İzleme Platformu', href: '/urunler/telco/network-monitoring', icon: Activity },
  { name: 'Billing & Revenue Assurance', href: '/urunler/telco/billing-revenue-assurance', icon: Server },
  { name: 'Customer Experience Management', href: '/urunler/telco/customer-experience-management', icon: Eye },
  { name: '5G Core Solutions', href: '/urunler/telco/5g-core-solutions', icon: Signal },
  { name: 'Telco Network Security', href: '/urunler/telco/network-security', icon: Shield },
  { name: 'IoT Device Management', href: '/urunler/telco/iot-device-management', icon: Settings },
]

export default function TelcoProductsPage() {
  return (
    <>
      <Head>
        <title>Telco Ürünleri - Serrasoft</title>
        <meta name="description" content="Telco operatörler için özel geliştirilmiş yazılım ürünleri ve platformlar" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 to-red-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-orange-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Telco Ürünleri
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Telekomunikasyon operatörleri için yeni nesil teknolojiler. 
                5G'den IoT'ye, ağ yönetiminden müşteri deneyimine kadar kapsamlı çözümler.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Ürün Kataloğu
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-700 transition-all"
                >
                  Demo Talep Et
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
              <h2 className="text-2xl font-semibold mb-6">Telco Ürün Portföyü</h2>
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
                        <product.icon className="w-8 h-8 mx-auto mb-2 text-orange-600 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
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

        {/* Telco Challenges Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Telco Sektörünün Zorlukları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5G dönüşümü, artan veri trafiği ve değişen müşteri beklentileri 
                telco operatörleri yeni çözümler arayışına itiyor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: '5G Dönüşümü',
                  desc: 'Next-gen network altyapısına geçiş',
                  icon: Signal
                },
                {
                  title: 'Network Complexity',
                  desc: 'Karmaşık ağ yapılarının yönetimi',
                  icon: Network
                },
                {
                  title: 'Customer Experience',
                  desc: 'Müşteri deneyimi beklentilerinin artması',
                  icon: Eye
                },
                {
                  title: 'IoT Explosion',
                  desc: 'Milyarlarca IoT cihazının yönetimi',
                  icon: Settings
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
              {telcoProducts.map((product, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
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
                    
                    <Link href={`/urunler/telco/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all"
                      >
                        Ürün Detayları
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">İş Faydaları</h3>
                    <div className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-lg"
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

        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Desteklenen Teknolojiler</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-standard teknolojiler ve protokollerle tam uyumluluk
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Network Protocols',
                  techs: ['5G NR', '4G LTE', 'IMS', 'SIP', 'Diameter', 'HTTP/2'],
                  icon: Signal
                },
                {
                  title: 'Standards',
                  techs: ['3GPP', 'ETSI', 'TMF', 'MEF', 'ITU-T', 'IETF'],
                  icon: Globe
                },
                {
                  title: 'Cloud & DevOps',
                  techs: ['Kubernetes', 'Docker', 'OpenStack', 'AWS', 'Azure', 'CI/CD'],
                  icon: Network
                },
                {
                  title: 'Security',
                  techs: ['PKI', 'OAuth', 'TLS 1.3', 'IPSec', 'RBAC', 'Zero Trust'],
                  icon: Shield
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                  <div className="space-y-2">
                    {tech.techs.map((item, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-orange-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Telco Performans Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '50+', label: 'Telco Operatörü' },
                  { value: '1B+', label: 'İşlem/Gün' },
                  { value: '99.99%', label: 'Network Uptime' },
                  { value: '<1ms', label: 'Latency' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-orange-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Telco Dönüşümünüzü Hızlandırın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Next-generation telco ürünlerimiz ile ağınızı modernize edin 
                ve müşterilerinize daha iyi hizmet sunun.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Ürün Demo Rezervasyonu
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
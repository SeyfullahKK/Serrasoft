import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  AlertTriangle, 
  Eye,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Monitor,
  Lock,
  Settings,
  BarChart3,
  Globe,
  Target,
  Bug,
  Wifi
} from 'lucide-react'

const productFeatures = [
  {
    title: 'DDoS Koruması',
    description: 'ISS ağınızı DDoS saldırılarına karşı koruyun ve hizmet sürekliliğini sağlayın.',
    icon: Shield,
    features: [
      'Volumetric attack mitigation',
      'Protocol-based protection',
      'Application layer defense',
      'Real-time threat analysis'
    ]
  },
  {
    title: 'Malware Tespiti',
    description: 'Gelişmiş malware tespit sistemleri ile müşterilerinizi zararlı yazılımlardan koruyun.',
    icon: Bug,
    features: [
      'Zero-day malware detection',
      'Behavioral analysis',
      'Signature-based scanning',
      'Machine learning algorithms'
    ]
  },
  {
    title: 'Botnet Tanımlama',
    description: 'Botnet trafiğini tespit edin ve infected cihazları belirleyerek müşterilerinizi uyarın.',
    icon: Network,
    features: [
      'C&C communication detection',
      'Botnet behavior analysis',
      'Infected device identification',
      'Automated customer notification'
    ]
  },
  {
    title: 'Tehdit İstihbaratı',
    description: 'Global tehdit istihbaratı ile ISS ağınızı proaktif olarak koruyun.',
    icon: Eye,
    features: [
      'Global threat feeds',
      'IP reputation scoring',
      'Domain intelligence',
      'IoC correlation'
    ]
  }
]

const technicalSpecs = [
  { metric: '99.9%', label: 'Threat Detection' },
  { metric: '100Gbps+', label: 'DDoS Protection' },
  { metric: '24/7', label: 'Security Monitoring' },
  { metric: '<1ms', label: 'Inspection Latency' }
]

const threatTypes = [
  {
    title: 'DDoS Saldırıları',
    description: 'Volumetric, protocol ve application layer saldırılar',
    icon: Zap,
    stats: '100Gbps+ koruma kapasitesi'
  },
  {
    title: 'Malware Dağıtımı',
    description: 'Trojan, ransomware ve zero-day malware',
    icon: Bug,
    stats: '%99.9 tespit doğruluğu'
  },
  {
    title: 'Botnet Aktivitesi',
    description: 'C&C iletişimi ve botnet koordinasyonu',
    icon: Network,
    stats: 'Real-time tespit'
  },
  {
    title: 'Data Exfiltration',
    description: 'Veri sızıntısı ve unauthorized erişim',
    icon: Lock,
    stats: 'Proaktif engellem'
  }
]

const useCases = [
  {
    title: 'Customer Protection',
    description: 'Müşterilerinizi cyber tehditlerden koruyarak güven oluşturun',
    icon: Shield,
    benefits: ['Brand reputation', 'Customer loyalty', 'Service quality']
  },
  {
    title: 'Network Security',
    description: 'ISS altyapınızın güvenliğini artırın ve riskleri azaltın',
    icon: Monitor,
    benefits: ['Infrastructure protection', 'Risk mitigation', 'Compliance']
  },
  {
    title: 'Threat Intelligence',
    description: 'Global tehdit istihbaratı ile proaktif güvenlik sağlayın',
    icon: Eye,
    benefits: ['Early warning', 'Proactive defense', 'Threat hunting']
  },
  {
    title: 'Incident Response',
    description: 'Güvenlik olaylarına hızlı ve etkili müdahale edin',
    icon: Target,
    benefits: ['Rapid response', 'Damage control', 'Recovery speed']
  }
]

export default function GuvenliInternetZenginetPage() {
  return (
    <>
      <Head>
        <title>Güvenli İnternet: Zenginet - ISS Güvenlik ve Tehdit Koruması - Serrasoft</title>
        <meta name="description" content="Internet Servis Sağlayıcıları için kapsamlı güvenlik ve tehdit koruması sistemi" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 to-orange-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/internet-servis-saglayicilari">
                <motion.span 
                  className="text-red-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← ISS Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Güvenli İnternet: Zenginet
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Internet Servis Sağlayıcıları için kapsamlı güvenlik ve tehdit koruması sistemi. 
                Müşterilerinizi cyber tehditlerden koruyun, ağ güvenliğinizi artırın ve hizmet kalitesinizi yükseltin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Güvenlik Analizi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-700 transition-all"
                >
                  Tehdit Raporu
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Threat Landscape */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Günümüz Cyber Tehdit Manzarası</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ISS'ler, sürekli gelişen cyber tehditlerin hedefindedir. 
                Müşterilerinizi korumak ve hizmet sürekliliğinizi sağlamak için proaktif güvenlik gereklidir.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <threat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{threat.title}</h3>
                  <p className="text-gray-600 mb-3">{threat.description}</p>
                  <p className="text-sm font-semibold text-red-600">{threat.stats}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Güvenli İnternet Zenginet Özellikleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kapsamlı güvenlik çözümü ile ISS ağınızı ve müşterilerinizi koruyun
              </p>
            </motion.div>

            <div className="space-y-16">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
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
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{feature.description}</p>
                    
                    <div className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-red-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">ISS Güvenlik Faydaları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Güvenli İnternet Zenginet ile ISS operasyonlarınızın güvenliğini artırın
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-time Security Dashboard */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">Gerçek Zamanlı Güvenlik Dashboard</h2>
                <p className="text-xl text-gray-600 mb-8">
                  ISS ağınızın güvenlik durumunu anlık olarak izleyin ve 
                  tehditlere proaktif olarak müdahale edin.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Real-time threat monitoring',
                    'Security incident alerts',
                    'Traffic anomaly detection',
                    'Customer impact analysis',
                    'Automated response actions'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Aktif Tehditler', value: '127', color: 'red' },
                    { label: 'Bloke Edilen', value: '1.2K', color: 'green' },
                    { label: 'Güvenli Trafik', value: '99.2%', color: 'blue' },
                    { label: 'Yanıt Süresi', value: '<1ms', color: 'purple' }
                  ].map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold text-${metric.color}-600`}>{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <Monitor className="w-24 h-24 text-red-600" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Güvenlik Performans Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{spec.metric}</div>
                    <div className="text-red-200">{spec.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ISS Güvenliğinizi Gelişmiş Seviyeye Taşıyın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Güvenli İnternet Zenginet ile müşterilerinizi cyber tehditlerden koruyun, 
                ağ güvenliğinizi artırın ve hizmet kalitesinizi yükseltin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Güvenlik Değerlendirmesi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-700 transition-all"
                >
                  ISS Güvenlik Danışmanlığı
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
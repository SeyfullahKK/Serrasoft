import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Shield, 
  Database,
  Eye,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Monitor,
  FileText,
  Search,
  AlertTriangle,
  BarChart3,
  Settings
} from 'lucide-react'

const productFeatures = [
  {
    title: 'Gerçek Zamanlı Korelasyon',
    description: 'Telco ağlarınızdaki tüm log verilerini gerçek zamanlı olarak ilişkilendirerek anlamlı bilgiler çıkarın.',
    icon: Network,
    features: [
      'Multi-source event correlation',
      'Real-time pattern matching',
      'Adaptive learning algorithms',
      'Custom correlation rules'
    ]
  },
  {
    title: 'Gelişmiş Analitik Motoru',
    description: 'Machine learning ve AI destekli analitik motoru ile network anomalilerini proaktif olarak tespit edin.',
    icon: BarChart3,
    features: [
      'Predictive analytics',
      'Anomaly detection',
      'Trend analysis',
      'Performance forecasting'
    ]
  },
  {
    title: 'Ölçeklenebilir Mimari',
    description: 'Telco operatörlerinin yüksek hacimli veri ihtiyaçlarını karşılayan ölçeklenebilir ve dayanıklı mimari.',
    icon: Server,
    features: [
      'Horizontal scaling',
      'Load balancing',
      'High availability',
      'Disaster recovery'
    ]
  },
  {
    title: 'Compliance ve Raporlama',
    description: 'Telco düzenlemelerine uyum sağlayan otomatik raporlama ve denetim trail özellikleri.',
    icon: FileText,
    features: [
      'Regulatory compliance',
      'Automated reporting',
      'Audit trail generation',
      'Custom dashboard'
    ]
  }
]

const technicalSpecs = [
  { metric: '100M+', label: 'Event/Saniye İşleme' },
  { metric: '99.99%', label: 'Sistem Uptime' },
  { metric: '<100ms', label: 'Korelasyon Süresi' },
  { metric: 'PB', label: 'Veri Kapasitesi' }
]

const useCases = [
  {
    title: 'Network Operations Center (NOC)',
    description: 'NOC operasyonlarını optimize edin ve incident response sürenizi azaltın',
    icon: Monitor,
    benefits: ['Faster incident detection', 'Reduced MTTR', 'Proactive monitoring']
  },
  {
    title: 'Security Operations',
    description: 'Telco ağlarınızda güvenlik olaylarını tespit edin ve analiz edin',
    icon: Shield,
    benefits: ['Threat detection', 'Security analytics', 'Forensic investigation']
  },
  {
    title: 'Performance Management',
    description: 'Ağ performansını izleyin ve optimizasyon fırsatlarını belirleyin',
    icon: Activity,
    benefits: ['Performance monitoring', 'Capacity planning', 'SLA management']
  },
  {
    title: 'Compliance Reporting',
    description: 'Düzenleyici gereksinimleri karşılayan otomatik raporlar oluşturun',
    icon: FileText,
    benefits: ['Automated compliance', 'Audit readiness', 'Risk management']
  }
]

export default function ViziNetCorrelogPage() {
  return (
    <>
      <Head>
        <title>ViziNet Correlog - Telco Log Korelasyon Platformu - Serrasoft</title>
        <meta name="description" content="Telco operatörleri için gelişmiş log korelasyon ve analitik platformu" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler/telco">
                <motion.span 
                  className="text-indigo-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Telco Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                ViziNet Correlog
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Telco operatörleri için tasarlanmış gelişmiş log korelasyon platformu. 
                Network olaylarını gerçek zamanlı olarak analiz edin, korelasyonlar kurun 
                ve proaktif operasyon yönetimi sağlayın.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Ürün Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all"
                >
                  Teknik Özellikler
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Neden ViziNet Correlog?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Telco operatörlerinin karmaşık ağ altyapılarında oluşan milyonlarca log verisini 
                anlamlı hale getiren gelişmiş korelasyon teknolojisi.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Hızlı Korelasyon',
                  desc: 'Milisaniye seviyesinde event korelasyonu',
                  icon: Zap,
                  color: 'yellow'
                },
                {
                  title: 'Akıllı Analiz',
                  desc: 'AI destekli pattern recognition',
                  icon: Eye,
                  color: 'blue'
                },
                {
                  title: 'Yüksek Performans',
                  desc: '100M+ event/saniye işleme kapasitesi',
                  icon: Activity,
                  color: 'green'
                },
                {
                  title: 'Telco Odaklı',
                  desc: 'Telco operatörleri için özelleştirilmiş',
                  icon: Network,
                  color: 'purple'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
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
              <h2 className="text-4xl font-bold mb-6">Temel Özellikler</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ViziNet Correlog'un sunduğu gelişmiş özellikler ile telco operasyonlarınızı yeni seviyeye taşıyın
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
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                    <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-indigo-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Kullanım Alanları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ViziNet Correlog'u telco operasyonlarınızın farklı alanlarında kullanın
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
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

        {/* Technical Specifications */}
        <section className="py-20 bg-indigo-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Teknik Özellikler</h2>
              
              {/* Performance Metrics with Visualizations */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-4xl font-bold mb-2">{spec.metric}</div>
                    <div className="text-indigo-200 mb-4">{spec.label}</div>
                    
                    {/* Specific visualizations for each metric */}
                    {index === 0 && (
                      // Event processing visualization
                      <div className="h-16 flex items-center justify-center">
                        <div className="flex space-x-1">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-8 bg-white/30 rounded"
                              animate={{
                                height: [8, 24, 8],
                                opacity: [0.3, 1, 0.3]
                              }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      // Uptime indicator
                      <div className="h-16 flex items-center justify-center">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-green-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "99.99%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      // Speed indicator
                      <div className="h-16 flex items-center justify-center">
                        <motion.div
                          className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    )}
                    
                    {index === 3 && (
                      // Storage capacity
                      <div className="h-16 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 bg-white/30 rounded"
                              animate={{
                                backgroundColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ViziNet Correlog ile Telco Operasyonlarınızı İyileştirin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Gelişmiş log korelasyon teknolojisi ile network olaylarını proaktif olarak 
                yönetin ve operasyonel verimliliğinizi artırın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Demo Talep Et
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all"
                >
                  Satış Ekibiyle İletişim
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
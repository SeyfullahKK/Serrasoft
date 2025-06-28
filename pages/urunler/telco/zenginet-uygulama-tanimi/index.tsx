import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Shield, 
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
  BarChart3,
  Target,
  Brain,
  Fingerprint
} from 'lucide-react'

const productFeatures = [
  {
    title: 'Gelişmiş DPI Teknolojisi',
    description: 'Layer 7 seviyesinde derinlemesine paket incelemesi ile ağınızdaki tüm uygulamaları tespit edin.',
    icon: Search,
    features: [
      'Layer 7 deep packet inspection',
      '5000+ application signatures',
      'Encrypted traffic analysis',
      'Behavioral pattern recognition'
    ]
  },
  {
    title: 'AI Destekli Uygulama Tanıma',
    description: 'Machine learning algoritmaları ile bilinmeyen uygulamaları otomatik olarak sınıflandırın.',
    icon: Brain,
    features: [
      'Machine learning classification',
      'Dynamic signature learning',
      'Zero-day application detection',
      'Adaptive intelligence'
    ]
  },
  {
    title: 'Gerçek Zamanlı Analiz',
    description: 'Ağ trafiğini gerçek zamanlı olarak analiz ederek anlık uygulama görünürlüğü sağlayın.',
    icon: Activity,
    features: [
      'Real-time classification',
      'Live traffic monitoring',
      'Instant application alerts',
      'Dynamic policy enforcement'
    ]
  },
  {
    title: 'Performans Optimizasyonu',
    description: 'Uygulama bazlı QoS politikaları ile ağ performansınızı optimize edin.',
    icon: Target,
    features: [
      'Application-aware QoS',
      'Bandwidth optimization',
      'Traffic shaping',
      'SLA enforcement'
    ]
  }
]

const technicalSpecs = [
  { metric: '40Gbps+', label: 'Throughput Kapasitesi' },
  { metric: '5000+', label: 'Uygulama İmzası' },
  { metric: '%99.5', label: 'Doğruluk Oranı' },
  { metric: '<1ms', label: 'Latency Overhead' }
]

const applicationCategories = [
  {
    category: 'Social Media & Messaging',
    apps: ['WhatsApp', 'Telegram', 'Facebook', 'Instagram', 'TikTok', 'Twitter'],
    icon: Network
  },
  {
    category: 'Video Streaming',
    apps: ['YouTube', 'Netflix', 'Amazon Prime', 'Disney+', 'Twitch', 'Zoom'],
    icon: Monitor
  },
  {
    category: 'Gaming & Entertainment',
    apps: ['Steam', 'Epic Games', 'PUBG', 'Fortnite', 'League of Legends', 'Spotify'],
    icon: Activity
  },
  {
    category: 'Business Applications',
    apps: ['Microsoft 365', 'Google Workspace', 'Salesforce', 'SAP', 'Oracle', 'Teams'],
    icon: Shield
  }
]

const useCases = [
  {
    title: 'Network Analytics',
    description: 'Ağ trafiğindeki uygulama dağılımını analiz edin',
    icon: BarChart3,
    benefits: ['Traffic composition', 'Usage patterns', 'Capacity planning']
  },
  {
    title: 'QoS Management',
    description: 'Uygulama bazlı servis kalitesi yönetimi',
    icon: Target,
    benefits: ['Application prioritization', 'Bandwidth allocation', 'SLA compliance']
  },
  {
    title: 'Security Monitoring',
    description: 'Güvenlik açısından riskli uygulamaları tespit edin',
    icon: Shield,
    benefits: ['Threat detection', 'Policy enforcement', 'Compliance monitoring']
  },
  {
    title: 'Customer Experience',
    description: 'Müşteri deneyimini iyileştirmek için uygulama performansını izleyin',
    icon: Eye,
    benefits: ['Performance monitoring', 'User experience', 'Service optimization']
  }
]

export default function ZenginetAppRecognitionPage() {
  return (
    <>
      <Head>
        <title>Zenginet Uygulama Tanımı - Telco DPI Platformu - Serrasoft</title>
        <meta name="description" content="Telco operatörleri için gelişmiş DPI ve uygulama tanıma teknolojisi" />
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
              <Link href="/urunler/telco">
                <motion.span 
                  className="text-orange-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Telco Ürünlerine Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Zenginet Uygulama Tanımı
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Telco operatörleri için gelişmiş DPI teknolojisi ve AI destekli uygulama tanıma platformu. 
                Ağınızdaki tüm uygulamaları tespit edin, sınıflandırın ve optimize edin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Canlı Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-700 transition-all"
                >
                  DPI Analizi
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
                <span className="gradient-text">Telco Ağlarında Uygulama Görünürlüğü</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Uygulama Tanımı, telco operatörlerinin ağlarında akan trafiği 
                uygulama seviyesinde anlayabilmesi için gelişmiş DPI teknolojisi sunar.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'DPI Teknolojisi',
                  desc: 'Layer 7 seviyesinde paket inceleme',
                  icon: Search,
                  color: 'blue'
                },
                {
                  title: 'AI Destekli',
                  desc: 'Machine learning ile uygulama tanıma',
                  icon: Brain,
                  color: 'purple'
                },
                {
                  title: 'Yüksek Performans',
                  desc: '40Gbps+ throughput kapasitesi',
                  icon: Zap,
                  color: 'yellow'
                },
                {
                  title: 'Gerçek Zamanlı',
                  desc: 'Anlık uygulama sınıflandırması',
                  icon: Clock,
                  color: 'green'
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
              <h2 className="text-4xl font-bold mb-6">Platform Yetenekleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Uygulama Tanımı'nın sunduğu gelişmiş özellikler ile ağ trafiğinizi 
                derinlemesine anlayın ve optimize edin
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
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
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
                    <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-orange-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Desteklenen Uygulama Kategorileri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5000+ uygulama imzası ile geniş uygulama yelpazesini destekliyoruz
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{category.category}</h3>
                  <div className="space-y-2">
                    {category.apps.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Fingerprint className="w-4 h-4 text-orange-500" />
                        {app}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Telco Kullanım Alanları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uygulama tanıma teknolojisini telco operasyonlarınızın farklı alanlarında kullanın
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-orange-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Teknik Performans</h2>
              
              {/* Performance Metrics with DPI Visualizations */}
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
                    <div className="text-orange-200 mb-4">{spec.label}</div>
                    
                    {/* DPI-specific visualizations for each metric */}
                    {index === 0 && (
                      // Throughput visualization
                      <div className="h-16 flex items-center justify-center">
                        <div className="relative w-20 h-8">
                          {/* Data flow */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded"
                            animate={{
                              x: ["-100%", "200%"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          <div className="w-full h-full border-2 border-white/30 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      // Application signatures
                      <div className="h-16 flex items-center justify-center">
                        <div className="grid grid-cols-5 gap-1">
                          {[...Array(15)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 bg-white/30 rounded-full"
                              animate={{
                                backgroundColor: [
                                  "rgba(255,255,255,0.3)",
                                  "rgba(255,255,255,0.8)",
                                  "rgba(34,197,94,0.8)",
                                  "rgba(255,255,255,0.3)"
                                ]
                              }}
                              transition={{
                                duration: 3,
                                delay: i * 0.1,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      // Accuracy indicator
                      <div className="h-16 flex items-center justify-center">
                        <div className="relative">
                          <svg className="w-16 h-16" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="rgba(255,255,255,0.3)"
                              strokeWidth="8"
                              fill="none"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="rgba(34,197,94,1)"
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 0.995 }}
                              transition={{ duration: 2, delay: 0.5 }}
                              style={{ 
                                transformOrigin: "50% 50%",
                                transform: "rotate(-90deg)"
                              }}
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      // Latency visualization
                      <div className="h-16 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <motion.div
                            className="w-4 h-4 bg-white/50 rounded-full"
                            animate={{
                              x: [0, 32, 0],
                              scale: [1, 0.8, 1]
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <div className="w-4 h-4 bg-white/30 rounded-full" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">İş Değeri ve Faydalar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Zenginet Uygulama Tanımı ile elde edeceğiniz operasyonel ve iş faydaları
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Gelir Optimizasyonu',
                  features: ['Traffic-based pricing', 'Premium service tiers', 'Application-specific packages', 'Data monetization'],
                  icon: BarChart3
                },
                {
                  title: 'Operasyonel Verimlilik',
                  features: ['Automated QoS', 'Intelligent traffic routing', 'Proactive network management', 'Resource optimization'],
                  icon: Target
                },
                {
                  title: 'Müşteri Deneyimi',
                  features: ['Application performance monitoring', 'Quality assurance', 'Personalized services', 'SLA compliance'],
                  icon: Eye
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
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
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ağ Trafiğinizi Derinlemesine Anlayın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Zenginet Uygulama Tanımı ile telco ağınızdaki her uygulamayı tespit edin, 
                analiz edin ve optimize edin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Performans Analizi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-700 transition-all"
                >
                  Teknik Konsültasyon
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
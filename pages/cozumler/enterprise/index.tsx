import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Shield, 
  Activity, 
  Database,
  Cloud,
  Lock,
  ArrowRight,
  CheckCircle,
  Zap,
  Network,
  Server,
  Eye,
  Users,
  Smartphone
} from 'lucide-react'

const enterpriseSolutions = [
  {
    id: 'kurumsal-guvenlik',
    title: 'Kurumsal Güvenlik',
    description: 'Kapsamlı siber güvenlik çözümleri ile kurumsal verilerinizi koruyun',
    icon: Shield,
    features: [
      'Multi-layer güvenlik duvarı',
      'DLP (Data Loss Prevention)',
      'SIEM entegrasyonu',
      'Threat intelligence'
    ],
    benefits: [
      'Siber saldırı koruması',
      'Compliance sağlama',
      'Risk minimizasyonu'
    ]
  },
  {
    id: 'network-monitoring',
    title: 'Network Monitoring',
    description: 'Kurumsal ağ trafiğinizi gerçek zamanlı izleyin ve optimize edin',
    icon: Activity,
    features: [
      'Real-time monitoring',
      'Performance analytics',
      'Anomaly detection',
      'Custom dashboards'
    ],
    benefits: [
      'Proaktif sorun tespiti',
      'Ağ performansı artışı',
      'Downtime önleme'
    ]
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'Kurumsal verilerinizi etkin şekilde yönetin ve analiz edin',
    icon: Database,
    features: [
      'Big data analytics',
      'Data warehouse çözümleri',
      'Business intelligence',
      'Predictive analytics'
    ],
    benefits: [
      'Veri odaklı kararlar',
      'Operasyonel verimlilik',
      'Rekabet avantajı'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Esnek ve ölçeklenebilir bulut altyapısı çözümleri',
    icon: Cloud,
    features: [
      'Hybrid cloud',
      'Auto-scaling',
      'Load balancing',
      'Disaster recovery'
    ],
    benefits: [
      'Maliyet optimizasyonu',
      'Esneklik ve ölçeklenebilirlik',
      'İş sürekliliği'
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control',
    description: 'Gelişmiş erişim kontrolü ve kimlik yönetimi sistemi',
    icon: Lock,
    features: [
      'Multi-factor authentication',
      'Role-based access',
      'Single sign-on (SSO)',
      'User provisioning'
    ],
    benefits: [
      'Güvenli erişim',
      'Kullanıcı deneyimi iyileştirme',
      'Yönetim kolaylığı'
    ]
  },
  {
    id: 'mobile-device-management',
    title: 'Mobile Device Management',
    description: 'Kurumsal mobil cihaz yönetimi ve güvenliği',
    icon: Smartphone,
    features: [
      'Device enrollment',
      'App management',
      'Remote wipe',
      'Compliance policies'
    ],
    benefits: [
      'BYOD desteği',
      'Güvenli mobility',
      'Merkezi yönetim'
    ]
  }
]

const subSolutions = [
  { name: 'Kurumsal Güvenlik', href: '/cozumler/enterprise/kurumsal-guvenlik', icon: Shield },
  { name: 'Network Monitoring', href: '/cozumler/enterprise/network-monitoring', icon: Activity },
  { name: 'Data Management', href: '/cozumler/enterprise/data-management', icon: Database },
  { name: 'Cloud Infrastructure', href: '/cozumler/enterprise/cloud-infrastructure', icon: Cloud },
  { name: 'Access Control', href: '/cozumler/enterprise/access-control', icon: Lock },
  { name: 'Mobile Device Management', href: '/cozumler/enterprise/mobile-device-management', icon: Smartphone },
]

export default function EnterprisePage() {
  return (
    <>
      <Head>
        <title>Kurumsal Çözümler - Serrasoft</title>
        <meta name="description" content="Kurumsal işletmeler için özel geliştirilmiş yazılım çözümleri ve hizmetler" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/cozumler">
                <motion.span 
                  className="text-blue-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Çözümlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Kurumsal Çözümler
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Modern işletmeler için tasarlanmış kapsamlı teknoloji çözümleri. 
                Dijital dönüşümünüzü hızlandırın ve rekabet avantajı kazanın.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Çözüm Danışmanlığı
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all"
                >
                  Örnek Projeler
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sub Solutions Navigation */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Kurumsal Çözüm Alanları</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {subSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={solution.href}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-effect rounded-xl p-4 text-center hover:shadow-lg transition-all cursor-pointer group"
                      >
                        <solution.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {solution.name}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Challenges Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Kurumsal İşletmelerin Zorlukları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Günümüzün hızla değişen iş dünyasında kurumsal işletmeler karmaşık 
                teknolojik zorluklar ve artan güvenlik tehditleri ile karşı karşıya.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Dijital Dönüşüm',
                  desc: 'Legacy sistemlerden modern çözümlere geçiş',
                  icon: Cloud
                },
                {
                  title: 'Siber Güvenlik',
                  desc: 'Artan siber saldırılara karşı koruma',
                  icon: Shield
                },
                {
                  title: 'Veri Yönetimi',
                  desc: 'Büyük veri hacimlerini etkin kullanma',
                  icon: Database
                },
                {
                  title: 'Ölçeklenebilirlik',
                  desc: 'Büyüyen iş ihtiyaçlarına adaptasyon',
                  icon: Network
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
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
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{solution.title}</h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{solution.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Temel Özellikler</h3>
                      <div className="space-y-3">
                        {solution.features.map((feature, idx) => (
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
                    
                    <Link href={`/cozumler/enterprise/${solution.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                      >
                        Detaylı Bilgi
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">İş Değeri</h3>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg"
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

        {/* Enterprise Stats */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Kurumsal Başarı Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: 'Kurumsal Müşteri' },
                  { value: '%40', label: 'Verimlilik Artışı' },
                  { value: '24/7', label: 'Teknik Destek' },
                  { value: '%99.9', label: 'Sistem Uptime' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Sektörel Çözümler</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Farklı sektörlerin özel ihtiyaçlarına yönelik özelleştirilmiş çözümler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Finans ve Bankacılık',
                  features: ['Fraud Detection', 'Risk Management', 'Compliance', 'Payment Security'],
                  icon: Building2
                },
                {
                  title: 'Sağlık ve İlaç',
                  features: ['Patient Data Management', 'HIPAA Compliance', 'Telemedicine', 'Drug Discovery'],
                  icon: Activity
                },
                {
                  title: 'E-ticaret ve Perakende',
                  features: ['Inventory Management', 'Customer Analytics', 'Omnichannel', 'Supply Chain'],
                  icon: Users
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Dijital Dönüşümünüzü Başlatın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Kurumsal çözümlerimiz ile işletmenizi geleceğe taşıyın. 
                Uzman ekibimizle ücretsiz danışmanlık alın.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Ücretsiz Danışmanlık Talep Et
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
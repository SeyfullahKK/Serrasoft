import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Database, 
  Cloud, 
  Users,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Monitor,
  Settings,
  Eye
} from 'lucide-react'

const enterpriseProducts = [
  {
    id: 'enterprise-security-platform',
    title: 'Enterprise Security Platform',
    description: 'Kapsamlı kurumsal güvenlik yönetimi için entegre platform',
    icon: Shield,
    features: [
      'SIEM integration',
      'Threat detection',
      'Identity management',
      'Compliance monitoring'
    ],
    benefits: [
      'Centralized security',
      'Risk reduction',
      'Compliance assurance'
    ]
  },
  {
    id: 'data-management-suite',
    title: 'Enterprise Data Management',
    description: 'Kurumsal veri yönetimi ve analitik için kapsamlı platform',
    icon: Database,
    features: [
      'Data warehouse',
      'Business intelligence',
      'Data governance',
      'Analytics platform'
    ],
    benefits: [
      'Data-driven decisions',
      'Operational efficiency',
      'Business insights'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Enterprise Cloud Platform',
    description: 'Hybrid ve multi-cloud altyapı yönetimi platformu',
    icon: Cloud,
    features: [
      'Multi-cloud management',
      'Container orchestration',
      'DevOps automation',
      'Cost optimization'
    ],
    benefits: [
      'Scalability',
      'Cost efficiency',
      'Agility improvement'
    ]
  },
  {
    id: 'identity-access-management',
    title: 'Identity & Access Management',
    description: 'Kurumsal kimlik ve erişim yönetimi çözümü',
    icon: Lock,
    features: [
      'Single sign-on (SSO)',
      'Multi-factor authentication',
      'Role-based access',
      'User provisioning'
    ],
    benefits: [
      'Security enhancement',
      'User experience',
      'Compliance support'
    ]
  },
  {
    id: 'collaboration-platform',
    title: 'Enterprise Collaboration',
    description: 'Modern iş gücü için kapsamlı işbirliği platformu',
    icon: Users,
    features: [
      'Team collaboration',
      'Document management',
      'Video conferencing',
      'Project management'
    ],
    benefits: [
      'Productivity increase',
      'Remote work support',
      'Communication efficiency'
    ]
  },
  {
    id: 'mobile-device-management',
    title: 'Enterprise Mobility Management',
    description: 'Kurumsal mobil cihaz ve uygulama yönetimi',
    icon: Eye,
    features: [
      'Device enrollment',
      'App distribution',
      'Security policies',
      'Remote management'
    ],
    benefits: [
      'BYOD support',
      'Security compliance',
      'Productivity enablement'
    ]
  }
]

export default function EnterpriseProductsPage() {
  return (
    <>
      <Head>
        <title>Kurumsal Ürünler - Serrasoft</title>
        <meta name="description" content="Modern işletmeler için kurumsal yazılım ürünleri ve platformlar" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-violet-900 to-purple-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/urunler">
                <motion.span 
                  className="text-violet-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Ürünlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Kurumsal Ürünler
              </h1>
              <p className="text-xl text-violet-100 mb-8">
                Modern işletmeler için entegre kurumsal çözümler. 
                Güvenlikten veri yönetimine, bulut altyapısından işbirliğine.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-violet-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Enterprise Suite
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-violet-700 transition-all"
                >
                  Digital Transformation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Needs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Modern İşletme İhtiyaçları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dijital çağda kurumsal işletmeler hızla değişen teknoloji 
                ve müşteri beklentilerine uyum sağlamak zorunda.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'Digital Transformation',
                  desc: 'Legacy sistemlerden modern çözümlere geçiş',
                  icon: Cloud
                },
                {
                  title: 'Data-Driven Decisions',
                  desc: 'Veri odaklı karar verme süreçleri',
                  icon: Database
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Artan güvenlik ve compliance gereksinimleri',
                  icon: Shield
                },
                {
                  title: 'Remote Workforce',
                  desc: 'Hibrit çalışma modellerinin desteklenmesi',
                  icon: Users
                }
              ].map((need, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <need.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{need.title}</h3>
                  <p className="text-gray-600">{need.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {enterpriseProducts.map((product, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                    
                    <Link href={`/urunler/enterprise/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-violet-600 font-semibold hover:gap-4 transition-all"
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
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-violet-50 to-transparent rounded-lg"
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

        {/* Industry Solutions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Sektörel Uygulamalar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Farklı sektörlerin özel ihtiyaçlarına yönelik kurumsal çözümler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Finansal Hizmetler',
                  description: 'Bankacılık ve finans sektörü için özel çözümler',
                  features: ['Risk Management', 'Fraud Detection', 'Regulatory Compliance', 'Core Banking'],
                  icon: Network
                },
                {
                  title: 'Sağlık & İlaç',
                  description: 'Healthcare ve pharmaceutical industry çözümleri',
                  features: ['Patient Management', 'Clinical Trials', 'Drug Discovery', 'Medical Imaging'],
                  icon: Monitor
                },
                {
                  title: 'Manufacturing',
                  description: 'Üretim ve imalat sektörü için Industry 4.0 çözümleri',
                  features: ['Smart Manufacturing', 'Supply Chain', 'Quality Management', 'Predictive Maintenance'],
                  icon: Settings
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
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
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

        {/* Enterprise Architecture */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Enterprise Architecture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Scalable ve secure kurumsal mimari için modern yaklaşımlar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: 'Microservices Architecture',
                    description: 'Modular ve scalable uygulama mimarisi'
                  },
                  {
                    title: 'API-First Design',
                    description: 'Entegrasyon odaklı sistem tasarımı'
                  },
                  {
                    title: 'Cloud-Native',
                    description: 'Modern cloud platformları için optimize edilmiş'
                  },
                  {
                    title: 'Zero Trust Security',
                    description: 'Modern güvenlik modellemesi'
                  }
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Architecture Benefits</h3>
                <div className="space-y-4">
                  {[
                    { benefit: 'Scalability', value: '1000x', icon: Cloud },
                    { benefit: 'Reliability', value: '99.99%', icon: Shield },
                    { benefit: 'Performance', value: '<100ms', icon: Zap },
                    { benefit: 'Security', value: 'Zero Trust', icon: Lock }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-violet-600" />
                        <span className="font-medium">{item.benefit}</span>
                      </div>
                      <span className="text-xl font-bold text-violet-600">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-violet-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-12">Enterprise Success Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: 'Enterprise Customers' },
                  { value: '40%', label: 'Productivity Increase' },
                  { value: '24/7', label: 'Support Coverage' },
                  { value: '99.9%', label: 'System Uptime' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-violet-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Kurumsal Dönüşümünüzü Başlatın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Modern enterprise çözümleri ile işletmenizi geleceğe taşıyın. 
                Digital transformation journey'nizi planlayalım.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Enterprise Konsültasyonu
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
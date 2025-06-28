import React, { useState } from 'react'
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
  Lock,
  Monitor,
  Settings,
  Eye,
  Home,
  ChevronRight,
  Activity,
  Building2,
  Package,
  Cpu,
  Zap
} from 'lucide-react'

const enterpriseProducts = [
  {
    id: 'network-security',
    title: 'Network Security Platform',
    subtitle: 'Kurumsal Ağ Güvenliği',
    description: 'Advanced threat protection ve network monitoring ile kurumsal ağ altyapınızı koruyun.',
    icon: Shield,
    color: 'blue',
    features: [
      'Next-generation firewall',
      'Intrusion detection system',
      'Network traffic analysis',
      'Advanced threat protection'
    ],
    metrics: [
      { value: '99.99%', label: 'Uptime' },
      { value: '40Gbps', label: 'Throughput' },
      { value: '<1ms', label: 'Latency' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Enterprise Data Analytics',
    subtitle: 'Kurumsal Veri Analizi',
    description: 'Big data processing ve real-time analytics ile işletme zekası elde edin.',
    icon: Database,
    color: 'emerald',
    features: [
      'Real-time data processing',
      'Business intelligence dashboards',
      'Predictive analytics',
      'Data warehouse management'
    ],
    metrics: [
      { value: '100TB+', label: 'Data Processing' },
      { value: '10M+', label: 'Records/sec' },
      { value: '<100ms', label: 'Query Time' }
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    subtitle: 'Bulut Altyapı Yönetimi',
    description: 'Hybrid ve multi-cloud ortamları için kapsamlı altyapı yönetim platformu.',
    icon: Cloud,
    color: 'purple',
    features: [
      'Multi-cloud orchestration',
      'Container management',
      'Auto-scaling solutions',
      'Cost optimization'
    ],
    metrics: [
      { value: '1000+', label: 'VMs' },
      { value: '99.9%', label: 'Availability' },
      { value: '30%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'collaboration',
    title: 'Enterprise Collaboration',
    subtitle: 'Kurumsal İşbirliği',
    description: 'Modern iş gücü için entegre iletişim ve işbirliği platformu.',
    icon: Users,
    color: 'orange',
    features: [
      'Unified communications',
      'Project management',
      'Document collaboration',
      'Video conferencing'
    ],
    metrics: [
      { value: '10K+', label: 'Users' },
      { value: '24/7', label: 'Support' },
      { value: '50%', label: 'Productivity Gain' }
    ]
  }
]

export default function EnterpriseProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(0)

  return (
    <>
      <Head>
        <title>Enterprise Ürünler - Serrasoft</title>
        <meta name="description" content="Kurumsal işletmeler için enterprise-grade yazılım çözümleri ve platformlar" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Network Nodes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i % 3) * 25}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
            
            {/* Network Connections */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              {[...Array(6)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${10 + (i * 15)}%`}
                  y1={`${30 + (i % 2) * 20}%`}
                  x2={`${25 + (i * 15)}%`}
                  y2={`${50 + (i % 3) * 15}%`}
                  stroke="#3B82F6"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </svg>
            
            {/* Gradient Orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-xl" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-500 mb-8">
              <Link href="/" className="hover:text-gray-700 transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/urunler" className="hover:text-gray-700 transition-colors">
                Ürünler
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Enterprise</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Enterprise
                    <motion.span 
                      className="block font-medium text-blue-600"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Ürün Portföyü
                    </motion.span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Kurumsal işletmeler için ölçeklenebilir, güvenli ve yüksek performanslı 
                    yazılım çözümleri. Modern enterprise mimarisi ile geliştirilmiş platformlar
                    ile dijital dönüşümünüzü destekliyoruz.
                  </motion.p>
                  
                  {/* Key Features */}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {[
                      { icon: Shield, label: 'Enterprise Security', color: 'text-green-600' },
                      { icon: Database, label: 'Big Data Analytics', color: 'text-blue-600' },
                      { icon: Cloud, label: 'Cloud Infrastructure', color: 'text-purple-600' }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`p-2 rounded-lg bg-gray-50 ${feature.color}`}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{feature.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <motion.button 
                      onClick={() => {
                        const productsSection = document.querySelector('#products-section');
                        if (productsSection) {
                          productsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ürünleri Keşfedin
                      <ArrowRight className="inline-block w-5 h-5 ml-2" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Interactive Visualization */}
              <div className="lg:col-span-5">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {/* Main Container */}
                  <div className="relative w-full h-[500px] bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    
                    {/* Animated Network Topology */}
                    <div className="absolute inset-0 p-12">
                      {/* Central Hub - Enterprise Products */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: ["0 4px 20px rgba(59, 130, 246, 0.3)", "0 8px 30px rgba(59, 130, 246, 0.5)", "0 4px 20px rgba(59, 130, 246, 0.3)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Package className="w-10 h-10 text-white" />
                      </motion.div>
                     
                      {/* Product Category Nodes */}
                      {[
                        { x: 15, y: 15, icon: Shield, delay: 0, color: 'bg-green-500' },
                        { x: 85, y: 25, icon: Database, delay: 0.5, color: 'bg-emerald-500' },
                        { x: 10, y: 85, icon: Cloud, delay: 1.0, color: 'bg-purple-500' },
                        { x: 90, y: 80, icon: Users, delay: 1.5, color: 'bg-orange-500' }
                      ].map((node, index) => (
                        <motion.div
                          key={index}
                          className={`absolute w-16 h-16 ${node.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}
                          style={{ left: `${node.x}%`, top: `${node.y}%` }}
                          animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            delay: node.delay,
                            repeat: Infinity
                          }}
                        >
                          <node.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      ))}
                     
                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        {[
                          { x1: "50%", y1: "50%", x2: "15%", y2: "15%" },
                          { x1: "50%", y1: "50%", x2: "85%", y2: "25%" },
                          { x1: "50%", y1: "50%", x2: "10%", y2: "85%" },
                          { x1: "50%", y1: "50%", x2: "90%", y2: "80%" }
                        ].map((line, index) => (
                          <motion.line
                            key={index}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{
                              duration: 1.5,
                              delay: 0.5 + (index * 0.2),
                              repeat: Infinity,
                              repeatType: "reverse",
                              repeatDelay: 2
                            }}
                          />
                        ))}
                       <defs>
                         <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                           <stop offset="0%" stopColor="#3B82F6" />
                           <stop offset="100%" stopColor="#8B5CF6" />
                         </linearGradient>
                       </defs>
                     </svg>
                     
                     {/* Data Flow Particles */}
                     {[...Array(16)].map((_, i) => (
                       <motion.div
                         key={i}
                         className="absolute w-2 h-2 bg-blue-400 rounded-full"
                         style={{
                           left: "50%",
                           top: "50%"
                         }}
                         animate={{
                           x: [0, Math.cos(i * 22.5 * Math.PI / 180) * 160],
                           y: [0, Math.sin(i * 22.5 * Math.PI / 180) * 160],
                           opacity: [1, 0.2, 1],
                           scale: [0, 1.2, 0]
                         }}
                         transition={{
                           duration: 2.5,
                           delay: i * 0.1,
                           repeat: Infinity
                         }}
                       />
                     ))}
                   </div>
                 </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products-section" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Ürün Portföyümüz</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise düzeyinde güvenilirlik ve performans sunan kapsamlı ürün yelpazesi
              </p>
            </div>

            {/* Product Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {enterpriseProducts.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedProduct === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {product.title}
                </button>
              ))}
            </div>

            {/* Selected Product */}
            <motion.div
              key={selectedProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${
                      enterpriseProducts[selectedProduct].color === 'blue' ? 'bg-blue-600' :
                      enterpriseProducts[selectedProduct].color === 'emerald' ? 'bg-emerald-600' :
                      enterpriseProducts[selectedProduct].color === 'purple' ? 'bg-purple-600' :
                      'bg-orange-600'
                    } rounded-xl flex items-center justify-center`}>
                      {React.createElement(enterpriseProducts[selectedProduct].icon, { 
                        className: "w-8 h-8 text-white" 
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-gray-900">
                        {enterpriseProducts[selectedProduct].title}
                      </h3>
                      <p className="text-gray-600">{enterpriseProducts[selectedProduct].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {enterpriseProducts[selectedProduct].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {enterpriseProducts[selectedProduct].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {enterpriseProducts[selectedProduct].metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className={`text-2xl font-bold ${
                          enterpriseProducts[selectedProduct].color === 'blue' ? 'text-blue-600' :
                          enterpriseProducts[selectedProduct].color === 'emerald' ? 'text-emerald-600' :
                          enterpriseProducts[selectedProduct].color === 'purple' ? 'text-purple-600' :
                          'text-orange-600'
                        }`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
                    {/* Dynamic visualization based on selected product */}
                    {selectedProduct === 0 && (
                      // Network Security Visualization
                      <div className="h-full flex flex-col items-center justify-center">
                        <div className="relative mb-8">
                          <Shield className="w-16 h-16 text-blue-600 mb-4" />
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { icon: Network, label: 'Firewall', delay: 0 },
                              { icon: Eye, label: 'Monitor', delay: 0.3 },
                              { icon: Lock, label: 'Secure', delay: 0.6 },
                              { icon: CheckCircle, label: 'Protect', delay: 0.9 }
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                className="flex flex-col items-center"
                                animate={{
                                  y: [0, -8, 0],
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                  duration: 2,
                                  delay: item.delay,
                                  repeat: Infinity
                                }}
                              >
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
                                  <item.icon className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="text-xs text-gray-600">{item.label}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">40Gbps</div>
                          <div className="text-sm text-gray-600">Throughput</div>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 1 && (
                      // Data Analytics Visualization
                      <div className="h-full flex flex-col items-center justify-center">
                        <div className="relative mb-8">
                          <Database className="w-16 h-16 text-emerald-600 mb-4" />
                          <div className="grid grid-cols-4 gap-1">
                            {[...Array(16)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-3 h-8 bg-emerald-400 rounded"
                                animate={{
                                  height: [8, 20, 8],
                                  backgroundColor: ["#34D399", "#10B981", "#34D399"]
                                }}
                                transition={{
                                  duration: 1.5,
                                  delay: i * 0.05,
                                  repeat: Infinity
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">100TB+</div>
                          <div className="text-sm text-gray-600">Data Processing</div>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 2 && (
                      // Cloud Infrastructure Visualization
                      <div className="h-full flex flex-col items-center justify-center">
                        <div className="relative mb-8">
                          <Cloud className="w-16 h-16 text-purple-600 mb-4" />
                          <div className="relative w-32 h-20">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-8 h-8 bg-purple-400 rounded-lg"
                                style={{
                                  left: `${i * 25}%`,
                                  top: `${i * 20}%`
                                }}
                                animate={{
                                  y: [0, -10, 0],
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 5, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.3,
                                  repeat: Infinity
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">1000+</div>
                          <div className="text-sm text-gray-600">Virtual Machines</div>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 3 && (
                      // Collaboration Visualization
                      <div className="h-full flex flex-col items-center justify-center">
                        <div className="relative mb-8">
                          <Users className="w-16 h-16 text-orange-600 mb-4" />
                          <div className="relative w-32 h-20">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-4 h-4 bg-orange-400 rounded-full"
                                style={{
                                  left: `${(i % 3) * 40}%`,
                                  top: `${Math.floor(i / 3) * 50}%`
                                }}
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.7, 1, 0.7]
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
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">10K+</div>
                          <div className="text-sm text-gray-600">Active Users</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6 text-gray-800">
                Enterprise Avantajları
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kurumsal düzeyde güvenilirlik, ölçeklenebilirlik ve performans
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Ölçeklenebilirlik',
                  description: 'Büyüyen iş ihtiyaçlarınıza uyum sağlayan esnek mimari',
                  icon: Network,
                  color: 'blue'
                },
                {
                  title: 'Güvenlik',
                  description: 'Enterprise-grade güvenlik protokolleri ve compliance',
                  icon: Lock,
                  color: 'emerald'
                },
                {
                  title: 'Performans',
                  description: 'Yüksek performans ve düşük gecikme süreleri',
                  icon: Monitor,
                  color: 'purple'
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="text-center bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className={`w-16 h-16 ${
                    benefit.color === 'blue' ? 'bg-blue-600' :
                    benefit.color === 'emerald' ? 'bg-emerald-600' :
                    'bg-purple-600'
                  } rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center text-white">
              <h2 className="text-4xl font-light mb-12">Enterprise Başarı Metrikleri</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: 'Enterprise Müşteri' },
                  { value: '99.9%', label: 'Sistem Uptime' },
                  { value: '24/7', label: 'Destek Hizmeti' },
                  { value: '40%', label: 'Verimlilik Artışı' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="text-4xl font-light mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-white mb-6">
                Enterprise Çözümlerimizi Keşfedin
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Kurumsal ihtiyaçlarınız için özelleştirilmiş çözümler hakkında bilgi alın.
              </p>
              <motion.button 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                İletişime Geçin
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
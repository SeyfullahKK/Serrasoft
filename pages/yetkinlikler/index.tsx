import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { 
  Network, 
  Database, 
  Activity, 
  Cpu,
  Timer,
  ArrowRight,
  Home,
  ChevronRight,
  CheckCircle,
  Zap
} from 'lucide-react'

// Renk sınıflarını döndüren yardımcı fonksiyon
const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: { bg: string; text: string; bgLight: string; border: string; gradient: string } } = {
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      bgLight: 'bg-blue-200/20',
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600'
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      bgLight: 'bg-purple-200/20',
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600'
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      bgLight: 'bg-emerald-200/20',
      border: 'border-emerald-200',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    orange: {
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      bgLight: 'bg-orange-200/20',
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-orange-600'
    },
    pink: {
      bg: 'bg-pink-600',
      text: 'text-pink-600',
      bgLight: 'bg-pink-200/20',
      border: 'border-pink-200',
      gradient: 'from-pink-500 to-pink-600'
    }
  }
  return colorMap[color] || colorMap.blue
}

const yetkinlikler = [
  {
    id: 'networking-solutions',
    title: 'Networking Solutions',
    subtitle: 'Modern Ağ Altyapıları',
    description: 'SDN teknolojileri, next-generation firewall ve network security çözümleri ile modern ağ altyapıları.',
    icon: Network,
    color: 'blue',
    features: [
      'Software Defined Networking',
      'Next-generation Firewall',
      'Network Security',
      'Load Balancing'
    ],
    metrics: [
      { value: '99.99%', label: 'Uptime' },
      { value: '40Gbps', label: 'Throughput' },
      { value: '<1ms', label: 'Latency' }
    ],
    link: '/yetkinlikler/networking-solutions'
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    subtitle: 'Dağıtık Sistem Mimarileri',
    description: 'Mikroservis mimarileri, distributed computing ve ölçeklenebilir sistem tasarımları.',
    icon: Database,
    color: 'purple',
    features: [
      'Microservices Architecture',
      'Distributed Databases',
      'Message Queues',
      'Service Mesh'
    ],
    metrics: [
      { value: '1000x', label: 'Scalability' },
      { value: '99.9%', label: 'Availability' },
      { value: '<100ms', label: 'Response Time' }
    ],
    link: '/yetkinlikler/distributed-systems'
  },
  {
    id: 'realtime-systems',
    title: 'Real-time Systems',
    subtitle: 'Gerçek Zamanlı Sistemler',
    description: 'Streaming analytics, real-time data processing ve event-driven architecture çözümleri.',
    icon: Activity,
    color: 'emerald',
    features: [
      'Stream Processing',
      'Real-time Analytics',
      'Event Streaming',
      'Live Dashboards'
    ],
    metrics: [
      { value: '10M+', label: 'Events/sec' },
      { value: '<5ms', label: 'Processing Time' },
      { value: '100TB', label: 'Data Volume' }
    ],
    link: '/yetkinlikler/realtime-systems'
  },
  {
    id: 'low-latency-systems',
    title: 'Low Latency Systems',
    subtitle: 'Ultra Düşük Gecikme',
    description: 'High-frequency trading, ultra-low latency sistemleri ve hardware acceleration.',
    icon: Timer,
    color: 'orange',
    features: [
      'Ultra-low Latency',
      'Hardware Acceleration',
      'High Frequency Trading',
      'Edge Computing'
    ],
    metrics: [
      { value: '<1μs', label: 'Latency' },
      { value: '1M+', label: 'TPS' },
      { value: '99.99%', label: 'Precision' }
    ],
    link: '/yetkinlikler/low-latency-systems'
  },
  {
    id: 'high-performance-computing',
    title: 'High Performance Computing',
    subtitle: 'Yüksek Performans Hesaplama',
    description: 'Supercomputing, parallel processing ve büyük ölçekli hesaplama sistemleri.',
    icon: Cpu,
    color: 'pink',
    features: [
      'Parallel Computing',
      'GPU Acceleration',
      'Cluster Management',
      'Scientific Computing'
    ],
    metrics: [
      { value: '100+', label: 'TFLOPS' },
      { value: '10K+', label: 'Cores' },
      { value: '500TB', label: 'Memory' }
    ],
    link: '/yetkinlikler/high-performance-computing'
  }
]

const YetkinliklerPage = () => {
  useEffect(() => {
    // Navbar'ı sayfa temasıyla uyumlu hale getir
    const navbar = document.querySelector('nav')
    if (navbar) {
      navbar.style.background = 'rgba(255, 255, 255, 1)'
      navbar.style.backdropFilter = 'blur(10px)'
      navbar.style.borderBottom = 'none'
      navbar.style.boxShadow = 'none'
    }

    // Cleanup function - sayfa değiştiğinde orijinal stili geri yükle
    return () => {
      if (navbar) {
        navbar.style.background = ''
        navbar.style.backdropFilter = ''
        navbar.style.borderBottom = ''
        navbar.style.boxShadow = ''
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Teknolojik Yetkinliklerimiz - Serrasoft</title>
        <meta name="description" content="Modern teknoloji alanlarında derin uzmanlık ve kanıtlanmış başarı geçmişi" />
      </Head>
      
      <main className="min-h-screen pt-24 bg-white">
        {/* Breadcrumb */}
        <div className="bg-white">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/">
                <Home className="w-4 h-4 hover:text-gray-700 cursor-pointer transition-colors" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-800 font-medium">Yetkinlikler</span>
            </div>
          </div>
        </div>

        {/* Hero Section with Gradient */}
        <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Sol Taraf - İçerik */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-5xl font-light text-gray-800">
                    Teknolojik Yetkinliklerimiz
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Modern teknoloji alanlarında derin uzmanlık ile karmaşık sistemleri basit ve ölçeklenebilir 
                  çözümlere dönüştürüyoruz. Networking solutions'dan distributed systems'e, real-time processing'den 
                  high-performance computing'e kadar geniş bir yelpazede uzmanlaşmış ekibimizle, işletmenizin 
                  teknolojik ihtiyaçlarına en uygun çözümleri sunuyoruz.
                </p>
              </motion.div>

              {/* Sağ Taraf - Animasyonlu Teknoloji Görselleştirmesi */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-96 lg:h-[500px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden">
                  
                  {/* Merkez Hub */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 4px 20px rgba(59, 130, 246, 0.3)",
                        "0 8px 30px rgba(147, 51, 234, 0.4)",
                        "0 4px 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Cpu className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Teknoloji Düğümleri */}
                  {[
                    { icon: Network, x: 20, y: 20, color: 'from-blue-500 to-blue-600', delay: 0 },
                    { icon: Database, x: 80, y: 25, color: 'from-purple-500 to-purple-600', delay: 0.5 },
                    { icon: Activity, x: 15, y: 75, color: 'from-emerald-500 to-emerald-600', delay: 1.0 },
                    { icon: Timer, x: 85, y: 80, color: 'from-orange-500 to-orange-600', delay: 1.5 },
                    { icon: Cpu, x: 50, y: 10, color: 'from-pink-500 to-pink-600', delay: 2.0 }
                  ].map((node, index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-12 h-12 bg-gradient-to-r ${node.color} rounded-full flex items-center justify-center shadow-md`}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.15, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        delay: node.delay,
                        repeat: Infinity
                      }}
                    >
                      <node.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  ))}

                  {/* Veri Akış Çizgileri */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[
                      { x1: "50%", y1: "50%", x2: "20%", y2: "20%" },
                      { x1: "50%", y1: "50%", x2: "80%", y2: "25%" },
                      { x1: "50%", y1: "50%", x2: "15%", y2: "75%" },
                      { x1: "50%", y1: "50%", x2: "85%", y2: "80%" },
                      { x1: "50%", y1: "50%", x2: "50%", y2: "10%" }
                    ].map((line, index) => (
                      <motion.line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#techGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 0], 
                          opacity: [0, 0.6, 0] 
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.3,
                          repeat: Infinity
                        }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Veri Parçacıkları */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%"
                      }}
                      animate={{
                        x: [0, Math.cos(i * 30 * Math.PI / 180) * 140],
                        y: [0, Math.sin(i * 30 * Math.PI / 180) * 140],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.2,
                        repeat: Infinity
                      }}
                    />
                  ))}

                  {/* Floating Code Elements */}
                  {['API', 'SDK', 'ML', 'AI', 'IoT'].map((text, index) => (
                    <motion.div
                      key={text}
                      className="absolute text-xs font-mono text-gray-400 bg-white/50 backdrop-blur-sm px-2 py-1 rounded"
                      style={{
                        left: `${15 + index * 15}%`,
                        top: `${30 + (index % 2) * 30}%`
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.4,
                        repeat: Infinity
                      }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Yetkinlikler Grid */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="space-y-32">
              {yetkinlikler.map((yetkinlik, index) => {
                const colors = getColorClasses(yetkinlik.color)
                
                return (
                  <motion.div
                    key={yetkinlik.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`grid lg:grid-cols-2 gap-16 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Yetkinlik Info */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-20 h-20 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <yetkinlik.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <div>
                          <h2 className="text-4xl font-light text-gray-800">{yetkinlik.title}</h2>
                          <p className="text-xl text-gray-500 mt-1">{yetkinlik.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        {yetkinlik.description}
                      </p>
                      
                      <div className="mb-10">
                        <h3 className="text-lg font-semibold mb-6 text-gray-800">Temel Teknolojiler</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {yetkinlik.features.map((feature, idx) => (
                            <motion.div 
                              key={idx} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 hover:border-gray-200 transition-all"
                            >
                              <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                              <span className="text-gray-700">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <Link href={yetkinlik.link}>
                        <motion.span 
                          whileHover={{ x: 5 }}
                          className={`inline-flex items-center gap-3 ${colors.text} font-semibold text-lg hover:gap-5 transition-all cursor-pointer`}
                        >
                          Detayları İncele
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </Link>
                    </div>
                    
                    {/* Performance Metrics Card */}
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className={`bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                    >
                      <h4 className="text-2xl font-semibold mb-8 text-center text-gray-800">Performans Metrikleri</h4>
                      
                      <div className="grid grid-cols-3 gap-6 mb-10">
                        {yetkinlik.metrics.map((metric, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring" }}
                            className="text-center"
                          >
                            <div className={`text-3xl font-bold ${colors.text} mb-2`}>
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className={`aspect-video bg-gradient-to-br from-gray-50 to-${yetkinlik.color}-50/30 rounded-xl flex items-center justify-center relative overflow-hidden`}>
                        <yetkinlik.icon className={`w-32 h-32 ${colors.text} opacity-10 absolute`} />
                        <yetkinlik.icon className={`w-20 h-20 ${colors.text} relative z-10`} />
                        
                        {/* Animated Circles */}
                        <div className="absolute inset-0">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-24 h-24 ${colors.bgLight} rounded-full`}
                              style={{
                                left: `${25 + i * 25}%`,
                                top: `${20 + i * 20}%`,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 4,
                                delay: i * 0.8,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light text-white mb-8">
                Teknoloji Yetkinliklerimizi Keşfedin
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Projenizde hangi teknolojiye ihtiyacınız var? 
                Uzman ekibimizle birlikte en uygun çözümü bulalım.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default YetkinliklerPage 
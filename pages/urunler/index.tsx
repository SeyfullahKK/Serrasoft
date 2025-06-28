import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Package, 
  Network, 
  Building2, 
  ArrowRight, 
  Star, 
  Server, 
  Activity,
  Home,
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Users
} from 'lucide-react'

const productCategories = [
  {
    id: 'zenginet-dpi',
    title: 'ZengiNet DPI',
    subtitle: 'Derinlemesine Paket Analizi',
    description: 'İnternet trafik analizini derinlemesine gerçekleştiren güçlü araç. Ağ üzerinde iletilen veri paketlerini detaylı analiz ederek güvenlik tehditlerini tespit eder.',
    icon: Zap,
    features: [
      'Derinlemesine Trafik Analizi',
      'Güvenlik ve Tehdit Algılama', 
      'İstatistiksel Raporlama',
      '5651 Kanununa Uyum'
    ],
    highlights: [
      { 
        name: 'Protokol Analizi', 
        desc: 'HTTP, HTTPS, FTP, DNS gibi protokollerin detaylı analizi', 
        icon: Network
      },
      { 
        name: 'Tehdit Tespiti', 
        desc: 'Zararlı yazılım, botnet, DDoS saldırılarının erken tespiti', 
        icon: Shield
      },
      { 
        name: 'Esnek Raporlama', 
        desc: 'Kullanıcı dostu ve detaylı analiz raporları', 
        icon: Activity
      }
    ],
    color: 'from-purple-500 to-pink-600',
    href: '/urunler/zenginet-dpi',
    stats: [
      { value: '100Gbps+', label: 'İşleme Kapasitesi' },
      { value: '5000+', label: 'Uygulama Tanıma' },
      { value: '99.9%', label: 'Doğruluk Oranı' },
      { value: '5651', label: 'Kanun Uyumu' }
    ]
  },
  {
    id: 'vizinet-correlog',
    title: 'ViziNet CorreLog',
    subtitle: 'Yüksek Performanslı Veri Korelasyonu',
    description: 'Radius mesajlarını ve CGNat girdilerini etkili bir şekilde ilişkilendirerek yüksek verimli veri korelasyonu sağlar. İki farklı formatta çıktı günlükleri oluşturur.',
    icon: Activity,
    features: [
      'Yüksek Verimlilik',
      'Kapsamlı Veri Korelasyonu',
      'Gelişmiş İzleme ve Alarm',
      'Kanunlara Uyum'
    ],
    highlights: [
      { 
        name: 'Radius & CGNat', 
        desc: 'Radius ve CGNat verilerinin etkili korelasyonu', 
        icon: Server
      },
      { 
        name: 'Anlık İzleme', 
        desc: 'Gerçek zamanlı sağlık kontrolleri ve alarm sistemi', 
        icon: Activity
      },
      { 
        name: 'Çoklu Format', 
        desc: 'İki farklı formatta esnek çıktı üretimi', 
        icon: Package
      }
    ],
    color: 'from-blue-500 to-cyan-600',
    href: '/urunler/vizinet-correlog',
    stats: [
      { value: '10M+', label: 'Günlük İşlem' },
      { value: '<1ms', label: 'İşlem Süresi' },
      { value: '99.99%', label: 'Uptime' },
      { value: '24/7', label: 'Destek' }
    ]
  },
  {
    id: 'vizinet-libda',
    title: 'ViziNet LibDa',
    subtitle: 'Kurumsal DPI Çözümü',
    description: 'Telekomünikasyon sektöründeki kurumsal yatırımcılar için tasarlanmış yazılım projesi. Derinlemesine paket denetimi pazarını hedefler.',
    icon: Server,
    features: [
      'Kapsamlı Veri İşleme',
      'Canlı Görüntüleme',
      'Soğuk Veri Arama',
      'Site Sınıflandırma'
    ],
    highlights: [
      { 
        name: 'Paralel İşleme', 
        desc: 'Verinin paralel veya seri akışını sağlama', 
        icon: Zap
      },
      { 
        name: 'Veri Zenginleştirme', 
        desc: 'Trafik verisini ilişkili verilerle zenginleştirme', 
        icon: Globe
      },
      { 
        name: 'Grafana Entegrasyonu', 
        desc: 'Modern görselleştirme ve raporlama', 
        icon: Activity
      }
    ],
    color: 'from-green-500 to-emerald-600',
    href: '/urunler/vizinet-libda',
    stats: [
      { value: 'TRL-9', label: 'Teknoloji Seviyesi' },
      { value: '4+', label: 'Kurumsal Müşteri' },
      { value: 'Vodafone', label: 'Canlı Kullanım' },
      { value: 'React', label: 'Modern UI' }
    ]
  },
  {
    id: 'sysaware',
    title: 'SysAware',
    subtitle: 'Olay Yayılım Platformu',
    description: 'Sunucular ve ağ bileşenlerinden kritik verileri toplayarak bakım süreçlerini proaktif hale getirir. Güçlü tiplenmiş olaylar üretir.',
    icon: Shield,
    features: [
      'Proaktif Bakım ve İzleme',
      'Erişim Kolaylığı ve Esneklik',
      'Kapsamlı Olay Yönetimi',
      'Yapılandırılabilir Raporlama'
    ],
    highlights: [
      { 
        name: 'Erken Uyarı', 
        desc: 'Anormallikleri ve sorunları erkenden tespit', 
        icon: Shield
      },
      { 
        name: 'Merkezi Yönetim', 
        desc: 'Tüm olay verilerinin tek noktadan yönetimi', 
        icon: Server
      },
      { 
        name: 'Alarm Sistemi', 
        desc: 'Derinlemesine analiz ve alarm yönetimi', 
        icon: Activity
      }
    ],
    color: 'from-orange-500 to-red-600',
    href: '/urunler/sysaware',
    stats: [
      { value: '1000+', label: 'Olay Tipi' },
      { value: 'Gerçek Zamanlı', label: 'İzleme' },
      { value: 'Otomatik', label: 'Raporlama' },
      { value: 'Proaktif', label: 'Bakım' }
    ]
  }
]

export default function UrunlerPage() {
  return (
    <>
      <Head>
        <title>Ürünler - Serrasoft</title>
        <meta name="description" content="Serrasoft'un Telco, İSS ve Enterprise için yenilikçi teknoloji ürünleri ve çözümleri" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Visual Tech Showcase - Now as Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Breadcrumb */}
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-gray-300 mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Ürünler</span>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(120)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-white/20 rounded-lg"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.05,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Tech Icons */}
            {[
              { icon: Network, x: '10%', y: '20%', delay: 0 },
              { icon: Server, x: '85%', y: '15%', delay: 0.5 },
              { icon: Shield, x: '15%', y: '70%', delay: 1.0 },
              { icon: Activity, x: '80%', y: '75%', delay: 1.5 },
              { icon: Zap, x: '50%', y: '10%', delay: 2.0 },
              { icon: Globe, x: '90%', y: '45%', delay: 2.5 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                style={{ left: item.x, top: item.y }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <item.icon className="w-8 h-8 text-white/60" />
              </motion.div>
            ))}

            {/* Data Flow Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(8)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${i * 150},0 Q${i * 150 + 75},200 ${i * 150 + 150},400`}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="50%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ürünlerimiz</span>
              </h1>
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                Sektörünüze özel geliştirilmiş kapsamlı teknoloji çözümleri
              </p>

              {/* Interactive Tech Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 mx-auto px-1" style={{maxWidth: '1600px'}}>
                {[
                  {
                    title: 'ZengiNet DPI',
                    subtitle: 'Derinlemesine Paket Analizi',
                    desc: 'İnternet trafik analizini derinlemesine gerçekleştiren güçlü araç. Veri paketlerinin detaylı analizi ile güvenlik tehditlerini tespit eder.',
                    icon: Zap,
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'ViziNet CorreLog',
                    subtitle: 'Ağ Yönetimi ve Güvenlik',
                    desc: 'Radius mesajlarını ve CGNat girdilerini etkili ilişkilendirerek yüksek verimli veri korelasyonu sağlar. İki farklı formatta çıktı günlükleri oluşturur.',
                    icon: Activity,
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'ViziNet LibDa',
                    subtitle: 'DPI Pazar Çözümü',
                    desc: 'Telekomünikasyon sektöründeki kurumsal yatırımcılar için tasarlanmış yazılım projesi. Derinlemesine paket denetimi pazarını hedefler.',
                    icon: Server,
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'SysAware',
                    subtitle: 'Olay Yayılım Platformu',
                    desc: 'Sunucular ve ağ bileşenlerinden kritik verileri toplayarak bakım süreçlerini proaktif hale getirir. Güçlü tiplenmiş olaylar üretir.',
                    icon: Shield,
                    color: 'from-orange-500 to-red-500'
                  }
                ].map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all flex flex-col h-full"
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 mx-auto`}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 40px rgba(147, 51, 234, 0.5)",
                          "0 0 20px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <product.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="text-center flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-blue-300 font-medium mb-3 text-sm">{product.subtitle}</p>
                      <p className="text-white/70 leading-relaxed text-xs flex-1">{product.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200/50"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Category Info */}
                                        <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{category.title}</h3>
                          <p className="text-gray-600 font-medium">{category.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{category.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                            <span className="text-sm font-medium text-gray-800">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-8">
                        <Link href={category.href}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${category.color} text-white font-medium rounded-xl hover:shadow-lg transition-all`}
                          >
                            Keşfet
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid gap-4">
                      {category.highlights.map((highlight, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/60 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                              <highlight.icon className="w-5 h-5 text-gray-700" />
                            </div>
                                                         <div className="flex-1">
                               <h5 className="font-bold text-gray-900 mb-1 text-base">{highlight.name}</h5>
                               <p className="text-sm text-gray-600 leading-relaxed">{highlight.desc}</p>
                             </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 
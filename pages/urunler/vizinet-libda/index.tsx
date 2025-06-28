import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home,
  ChevronRight,
  Server,
  Shield,
  Network,
  Activity,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  BarChart3,
  AlertTriangle,
  FileText,
  Database,
  Settings,
  Eye,
  Search,
  Tag,
  Layers,
  Building2,
  Users
} from 'lucide-react'

export default function ViziNetLibDaPage() {
  return (
    <>
      <Head>
        <title>ViziNet LibDa - Kurumsal DPI Çözümü | Serrasoft</title>
        <meta name="description" content="ViziNet LibDa, telekomünikasyon sektöründeki kurumsal yatırımcılar için tasarlanmış derinlemesine paket denetimi çözümü." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <motion.rect
                    key={i}
                    x={`${Math.random() * 100}%`}
                    y={`${Math.random() * 100}%`}
                    width="100"
                    height="100"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 20 + Math.random() * 10,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
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
              <Link href="/urunler" className="hover:text-white transition-colors">
                Ürünler
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">ViziNet LibDa</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    ViziNet LibDa
                  </h1>
                </div>
                <p className="text-xl text-white/80 mb-8">
                  Telekomünikasyon sektöründeki kurumsal yatırımcılar ve karar vericiler için 
                  tasarlanmış yazılım projesi. Derinlemesine paket denetimi (DPI) pazarını 
                  hedefleyen, TRL-9 seviyesine ulaşmış olgun bir çözüm.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('features-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-white text-green-900 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  Keşfet
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Başarı Göstergeleri</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Zap, text: 'TRL-9 teknoloji seviyesi', value: 'Canlı Kullanım' },
                      { icon: Users, text: 'Kurumsal müşteriler', value: '4+ Operatör' },
                      { icon: Globe, text: 'Veri Zenginleştirme', value: 'İlişkisel' },
                      { icon: Server, text: 'Modern altyapı', value: 'React Native' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white/90">{item.text}</span>
                        </div>
                        <span className="text-green-300 font-semibold">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section id="features-section" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">İş Planı ve İş Paketleri</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern teknolojiler ve kurumsal standartlarla geliştirilmiş altyapı
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'LibDa Eklentileri',
                  icon: Layers,
                  items: [
                    'InfluxDB ve Loki Sink geliştirmeleri',
                    'Veri zenginleştirme altyapısı',
                    'Modüler eklenti sistemi'
                  ]
                },
                {
                  title: 'Clustering Altyapısı',
                  icon: Network,
                  items: [
                    'InfluxDB clustering',
                    'Loki clustering',
                    'MongoDB clustering altyapıları'
                  ]
                },
                {
                  title: 'Operasyonel Servisler',
                  icon: Server,
                  items: [
                    'W3C Web Servisleri',
                    'Rest Servisleri',
                    'API Gateway entegrasyonu'
                  ]
                },
                {
                  title: 'Kullanıcı Arayüzü',
                  icon: Globe,
                  items: [
                    'React Native altyapısı',
                    'Modern kurumsal UI',
                    'Telekom kullanıcı arayüzleri'
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Hedeflenen Kazanımlar</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ViziNet LibDa ile ağ görünürlüğünde yeni bir seviyeye ulaşın
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: 'Kapsamlı Veri İşleme',
                  description: 'ViziNet LibDa, kendi altyapısında verinin paralel veya seri akışını sağlar.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Eye,
                  title: 'Canlı Görüntüleme',
                  description: 'Trafiği anlık olarak gözlemleme ve odak noktalarına göre ayırma imkanı sunar.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Search,
                  title: 'Soğuk Veri Arama',
                  description: 'Geçmiş verilere ekstra depolama alanı gerektirmeden erişim sağlar.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Layers,
                  title: 'Veri Zenginleştirme',
                  description: 'Trafik verisini ilişkili diğer verilerle zenginleştirir, detaylı analizlere olanak tanır.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Tag,
                  title: 'Site Sınıflandırma',
                  description: 'Site içeriklerini inceler, etiketler ve otomatik olarak sınıflandırır.',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: BarChart3,
                  title: 'Grafana Entegrasyonu',
                  description: 'Loki ve InfluxDB destekleri ile görsel raporlar ve modern dashboard.',
                  color: 'from-gray-600 to-gray-800'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl font-bold mb-6">Başarı Hikayesi</h2>
                <p className="text-xl mb-8 opacity-90">
                  ViziNet LibDa projesi, başlangıçta TRL5 seviyesinde bir tasarım onayıyla yola çıktı. 
                  Müşterilerimizin desteğiyle, projemizi TRL9 seviyesine başarıyla taşıdık.
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {[
                    { value: 'TRL-9', label: 'Teknoloji Hazırlık Seviyesi' },
                    { value: '4', label: 'Kurumsal Müşteri' },
                    { value: 'Vodafone', label: 'Canlı Kullanım' },
                    { value: '2019', label: 'Başlangıç Yılı' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-3xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm opacity-80">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg opacity-90">
                  Özellikle Vodafone Türkiye müşterimizle işbirliğimiz sonucunda bazı modüllerin 
                  canlıya alınması, projemizin değerini ve etkinliğini kanıtlamaktadır.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Network Visibility Solutions */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Ağ Görünürlülük Çözümleri</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kurumsal ve telekomünikasyon sektörleri için kapsamlı ağ görünürlüğü
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Kurumsal Ağ Analizi</h3>
                <p className="text-gray-600 mb-4">
                  Kapsamlı raporlama ve içgörüler sunar. Kurumsal ağlarınızın performansını 
                  ve güvenliğini detaylı olarak analiz eder.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Detaylı trafik analizi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Güvenlik tehditleri tespiti
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Performans optimizasyonu
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Telekom Seviyesi İzleme</h3>
                <p className="text-gray-600 mb-4">
                  Ağ trafiğini telekom düzeyinde izler, canlıya yakın analiz sunar. 
                  Büyük ölçekli altyapılar için optimize edilmiştir.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Gerçek zamanlı izleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Yüksek hacimli veri işleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Otomatik anomali tespiti
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Verimli Veri Yönetimi</h3>
                <p className="text-gray-600 mb-4">
                  Minimum kaynakla ağ trafik verisinde arama, tarama ve filtreleme yapar. 
                  Büyük veri setlerini verimli şekilde yönetir.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hızlı veri sorgulama
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Akıllı indeksleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Düşük kaynak kullanımı
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ağ Görünürlüğünde Yeni Standart
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                ViziNet LibDa ile kurumsal ve telekom seviyesinde ağ görünürlüğü çözümlerine 
                sahip olun.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home,
  ChevronRight,
  Shield,
  Activity,
  Network,
  Server,
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
  Bell,
  Monitor,
  Cpu,
  AlertCircle
} from 'lucide-react'

export default function SysAwarePage() {
  return (
    <>
      <Head>
        <title>SysAware - Olay Yayılım Platformu | Serrasoft</title>
        <meta name="description" content="SysAware, sunucular ve ağ bileşenlerinden kritik verileri toplayarak bakım süreçlerini proaktif hale getiren güçlü bir olay yayılım platformudur." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                >
                  <Bell className="w-6 h-6 text-white" />
                </motion.div>
              ))}
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
              <span className="text-white">SysAware</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    SysAware
                  </h1>
                </div>
                <p className="text-xl text-white/80 mb-8">
                  Sunuculardan, cihazlardan veya ağ bileşenlerinden gelen kritik verileri 
                  toplayarak, bakım ve izleme süreçlerini daha etkin ve proaktif hale getiren 
                  güçlü bir olay yayılım platformu.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('features-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-white text-orange-900 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
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
                  <h3 className="text-2xl font-bold text-white mb-6">Temel Özellikler</h3>
                  <div className="space-y-4">
                    {[
                      { icon: AlertCircle, text: 'Proaktif bakım ve izleme' },
                      { icon: Server, text: 'Merkezi olay yönetimi' },
                      { icon: Bell, text: 'Akıllı alarm sistemi' },
                      { icon: BarChart3, text: 'Detaylı raporlama' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white/90">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features-section" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Güçlü Olay Yönetimi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SysAware mimarisi, her tür değerli bilgiyi güçlü bir şekilde tiplenmiş olaylar olarak temsil eder
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertCircle,
                  title: 'Proaktif Bakım ve İzleme',
                  description: 'Herhangi bir sistem veya ağ bileşeninde meydana gelen anormallikleri ve potansiyel sorunları erkenden tespit eder.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Server,
                  title: 'Erişim Kolaylığı ve Esneklik',
                  description: 'Proje dizininden kolayca erişebilir ve tüm olay verilerinizi merkezi bir sistemde yönetebilirsiniz.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Bell,
                  title: 'Kapsamlı Olay ve Alarm Yönetimi',
                  description: 'Olaylar üzerinde derinlemesine analiz yaparak alarm yönetimi ve yapılandırılabilir raporlama sağlar.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Monitor,
                  title: 'Gerçek Zamanlı İzleme',
                  description: 'Sistem ve ağ bileşenlerini anlık olarak izleyerek performans sorunlarını anında tespit eder.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Database,
                  title: 'Merkezi Veri Toplama',
                  description: 'Farklı kaynaklardan gelen verilerin uyumlu bir şekilde toplanmasını ve analiz edilmesini sağlar.',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Cpu,
                  title: 'Akıllı Olay İşleme',
                  description: 'Güçlü tiplenmiş olaylar sistemi ile verileri anlamlı bilgilere dönüştürür.',
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

        {/* Architecture Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Mimari Yapı</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  SysAware mimarisi, sistemin temel yapı taşlarını oluşturan güçlü tiplenmiş 
                  olaylar üzerine inşa edilmiştir. Bu olaylar, raporlar, alarmlar ve özet 
                  olaylar gibi çıktıları üretir.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Olay Toplama</h4>
                      <p className="text-gray-600 text-sm">
                        Sunucular, cihazlar ve ağ bileşenlerinden kritik verileri toplar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Olay İşleme</h4>
                      <p className="text-gray-600 text-sm">
                        Toplanan verileri güçlü tiplenmiş olaylara dönüştürür
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Çıktı Üretimi</h4>
                      <p className="text-gray-600 text-sm">
                        Raporlar, alarmlar ve özet olaylar üretir
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">Sistem Yetenekleri</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Olay Tipi Desteği', icon: Database },
                    { label: 'İzleme Modu', icon: Activity },
                    { label: 'Raporlama', icon: FileText },
                    { label: 'Bakım Yaklaşımı', icon: Shield },
                    { label: 'Entegrasyon', icon: Network },
                    { label: 'Ölçeklenebilirlik', icon: Zap }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <metric.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-700 text-sm leading-tight">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Proaktif Sistem Yönetimine Geçin
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                SysAware ile sistem ve ağ bileşenlerinizi proaktif olarak izleyin, 
                sorunları oluşmadan önce tespit edin ve çözün.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
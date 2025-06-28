import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home,
  ChevronRight,
  Activity,
  Shield,
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
  Settings
} from 'lucide-react'

export default function ViziNetCorreLogPage() {
  return (
    <>
      <Head>
        <title>ViziNet CorreLog - Yüksek Performanslı Veri Korelasyonu | Serrasoft</title>
        <meta name="description" content="ViziNet CorreLog, Radius mesajlarını ve CGNat girdilerini etkili bir şekilde ilişkilendirerek yüksek verimli veri korelasyonu sağlar." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  <div className="w-32 h-32 border border-white/20 rounded-full" />
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
              <span className="text-white">ViziNet CorreLog</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    ViziNet CorreLog
                  </h1>
                </div>
                <p className="text-xl text-white/80 mb-8">
                  Yüksek performanslı veri korelasyonu ve yönetimi çözümü. 
                  Radius mesajlarını ve CGNat girdilerini aynı bağlamda etkili bir şekilde 
                  ilişkilendirerek, ağ operatörlerinin ve güvenlik uzmanlarının karmaşık 
                  verileri daha kolay analiz etmelerine olanak tanır.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('features-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
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
                      { icon: Database, text: 'Radius & CGNat veri korelasyonu' },
                      { icon: Activity, text: 'Gerçek zamanlı izleme ve alarm' },
                      { icon: FileText, text: 'İki farklı formatta çıktı' },
                      { icon: Shield, text: '5651 kanununa uyum' }
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

        {/* Features Section */}
        <section id="features-section" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Neden ViziNet CorreLog?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veri güvenliği ve performans yönetimi gereksinimlerini karşılayacak şekilde tasarlandı
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Yüksek Verimlilik',
                  description: 'Veri analizi ve güvenliği konusunda güçlü bir altyapı ile sisteminizin performansını artırır.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Database,
                  title: 'Kapsamlı Veri Korelasyonu',
                  description: 'Radius ve CGNat verilerini aynı bağlamda birleştirerek daha anlamlı ve doğru sonuçlar elde etmenizi sağlar.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Activity,
                  title: 'Gelişmiş İzleme ve Alarm',
                  description: 'Anlık sağlık kontrolleri ile veri kayıplarını ve sorunları erkenden tespit eder.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Settings,
                  title: 'Kullanıcı Dostu Çıktılar',
                  description: 'İstenilen formatta çıktı üretimi ile verilerinizi kolayca yönetmenizi ve analiz etmenizi sağlar.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Shield,
                  title: 'Yasal Uyum',
                  description: '5651 sayılı kanun kapsamında gerekli denetim ve raporlama gereksinimlerini yerine getirir.',
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  icon: Server,
                  title: 'Yüksek Performans',
                  description: 'Günde 10 milyondan fazla işlem kapasitesi ile kesintisiz hizmet.',
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

        {/* Technical Architecture */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Teknik Mimari</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ViziNet CorreLog, modern ve ölçeklenebilir bir mimari üzerine inşa edilmiştir
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
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Veri İşleme</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Radius mesajları işleme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>CGNat log korelasyonu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Gerçek zamanlı veri akışı</span>
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
                <h3 className="text-xl font-bold mb-4">İzleme & Alarm</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Anlık sağlık kontrolleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Otomatik alarm sistemi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Performans metrikleri</span>
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
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Çıktı Formatları</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>JSON format desteği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>CSV format desteği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Özelleştirilebilir formatlar</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Performans Metrikleri</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Günlük İşlem Kapasitesi', value: '10M+', icon: Activity },
                    { label: 'Ortalama İşlem Süresi', value: '<1ms', icon: Zap },
                    { label: 'Sistem Çalışma Süresi', value: '%99.99', icon: CheckCircle },
                    { label: 'Veri Doğruluk Oranı', value: '%100', icon: Shield },
                    { label: 'Eş Zamanlı Bağlantı', value: '5000+', icon: Network },
                    { label: 'Destek Süresi', value: '7/24', icon: Globe }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <metric.icon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Güçlü Altyapı</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  ViziNet CorreLog, ağ yönetimi ve güvenliği alanında, veri güvenliği ve 
                  performans yönetimi gereksinimlerini karşılayacak şekilde tasarlanmıştır.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Yüksek Verimli Korelasyon</h4>
                      <p className="text-gray-600 text-sm">
                        Radius ve CGNat verilerini milisaniyeler içinde ilişkilendirir
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Ölçeklenebilir Mimari</h4>
                      <p className="text-gray-600 text-sm">
                        Artan veri yüklerine otomatik olarak adapte olur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Güvenli Veri İşleme</h4>
                      <p className="text-gray-600 text-sm">
                        Tüm veriler şifreli kanallar üzerinden işlenir ve saklanır
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Veri Korelasyonunda Yeni Bir Dönem
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                ViziNet CorreLog ile Radius ve CGNat verilerinizi etkili bir şekilde 
                ilişkilendirin, ağ performansınızı optimize edin.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
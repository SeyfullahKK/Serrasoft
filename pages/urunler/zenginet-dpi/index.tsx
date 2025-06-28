import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home,
  ChevronRight,
  Zap,
  Shield,
  Network,
  Activity,
  CheckCircle,
  ArrowRight,
  Server,
  Globe,
  Lock,
  BarChart3,
  AlertTriangle,
  FileText,
  Eye,
  Filter,
  Router,
  Target
} from 'lucide-react'

export default function ZengiNetDPIPage() {
  return (
    <>
      <Head>
        <title>ZengiNet DPI - Deep Packet Inspection | Serrasoft</title>
        <meta name="description" content="ZengiNet Deep Packet Inspection (DPI) - Ağ trafiği analizinde derin paket inceleme çözümü. Protokol, uygulama ve veri tabanlı kontroller." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
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
              <span className="text-white">ZengiNet DPI</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    ZengiNet DPI
                  </h1>
                </div>
                <p className="text-xl text-white/80 mb-8">
                  Ağ trafiği analizinde derin paket inceleme, günümüz ağ güvenliği altyapılarında 
                  temel bir rol oynar. DPI ile protokol, uygulama ve veri tabanlı kontroller gerçekleştirilir.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('features-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
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
                  <h3 className="text-2xl font-bold text-white mb-6">DPI Çalışma Prensibi</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Eye, text: 'Paket Yakalama - Ağdaki veri paketlerini yakalar' },
                      { icon: Filter, text: 'İçerik Analizi - Hem başlık hem de veri kısmını inceler' },
                      { icon: Target, text: 'Karar Mekanizması - Uyarı, engelleme, yönlendirme, loglama' },
                      { icon: FileText, text: 'Kapsamlı Raporlama - Detaylı analiz sonuçları' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white/90 text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Protocol Logging Section */}
        <section id="features-section" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Protokol Bazlı Loglama Yapısı</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Her protokol için özelleştirilmiş detaylı loglama sistemi
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Network,
                  title: 'TCP/UDP Loglama',
                  description: 'Hedef IP adresi, port numarası ve oturum süresi gibi temel bağlantı bilgileri detaylıca loglanır.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Globe,
                  title: 'HTTP/HTTPS Loglama',
                  description: 'Erişilen URL adresi, kullanılan HTTP metodu, kullanıcı aracısı (user-agent) ve sunucu yanıt kodu günlüklenir.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Server,
                  title: 'DNS Loglama',
                  description: 'Sorgulanan alan adı (domain), sorgu tipi ve yanıt alınan hedef IP adresi bilgileri loglanır.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: FileText,
                  title: 'ICMP ve FTP Loglama',
                  description: 'ICMP trafiği için paket tipi, kod ve kaynak/hedef IP; FTP için kullanıcı bilgisi, komutlar ve dosya transfer detayları loglanır.',
                  color: 'from-orange-500 to-red-500'
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

        {/* Application Recognition Section */}
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
                  <span className="gradient-text">Uygulama Tanıma ile Trafik Kategorizasyonu</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  ZengiNet DPI, ağ trafiğini uygulama verilerine göre kategorize etme yeteneğine sahiptir. 
                  Bu sayede, hangi uygulamaların kullanıldığı, hangi hizmetlerin çalıştığı ve veri akışının 
                  hangi uygulamalar veya domainler üzerinden gerçekleştiği detaylı bir şekilde analiz edilebilir.
                </p>
                <p className="text-gray-600 mb-8">
                  ZengiNet, 400'ün üzerinde uygulama tanıma kapasitesine sahip olup, ağ trafiğini doğru ve 
                  kapsamlı bir şekilde sınıflandırabilir. Bu özellik, ağ yöneticilerine uygulama kullanımı, 
                  performansı, potansiyel riskler ve erişilen web siteleri hakkında değerli içgörüler sunar.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">400+</div>
                    <div className="text-sm text-gray-600">Uygulama Tanıma</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Trafik Kapsamı</div>
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
                <h3 className="text-2xl font-bold mb-6">Çeşitli Engelleme Yöntemleri</h3>
                <div className="space-y-4">
                  {[
                    { 
                      title: 'IP ve Ağ Bazlı Engelleme',
                      desc: 'Belirli IP adreslerinden veya ağ aralıklarından gelen/giden trafiği kısıtlar',
                      icon: Network
                    },
                    { 
                      title: 'Port Bazlı Engelleme',
                      desc: 'Tanımlanmış portlar üzerinden yapılan iletişimleri kontrol eder',
                      icon: Lock
                    },
                    { 
                      title: 'URL ve Alan Adı Engelleme',
                      desc: 'İstenmeyen web sitelerine, belirli URL\'lere veya alan adlarına erişimi önler',
                      icon: Globe
                    },
                    { 
                      title: 'Protokol Bazlı Engelleme',
                      desc: 'Belirli ağ protokollerinin kullanımını kısıtlayarak güvenlik politikalarını uygular',
                      icon: Shield
                    },
                    { 
                      title: 'Uygulama Bazlı Engelleme',
                      desc: 'Tanımlanmış uygulamaların ağ üzerindeki kullanımını yönetir veya engeller',
                      icon: Target
                    }
                  ].map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <method.icon className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{method.title}</h4>
                        <p className="text-sm text-gray-600">{method.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Management and Modes Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Yönetim ve Çalışma Modları</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Router className="w-8 h-8 text-purple-600" />
                  Engelleme Modülü ve Yönetimi
                </h3>
                <p className="text-gray-600 mb-6">
                  Engelleme modülü, tanımlanan politika ve kurallar ile sağlanmaktadır. Bu politikaların 
                  ve kuralların yönetimi, hem grafik kullanıcı arayüzü (GUI) üzerinden hem de web servisleri 
                  aracılığıyla gerçekleştirilebilmektedir.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Grafik kullanıcı arayüzü (GUI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Web servisleri entegrasyonu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Esnek politika yönetimi</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                  DNS ve HTTP İstek Yönlendirme
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">HTTP Yönlendirmeleri</h4>
                    <p className="text-sm text-gray-600">Web sunucusu seviyesinde URL'leri başka bir adrese yönlendirir (301, 302, 307).</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">DNS Tabanlı Yönlendirme</h4>
                    <p className="text-sm text-gray-600">Alan adlarını belirli IP adreslerine yönlendirir, trafik akışını temel seviyede kontrol eder.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Yönlendirme Yönetimi ve Güvenliği</h4>
                    <p className="text-sm text-gray-600">Yönlendirmelerin doğru yapılandırılması ve güvenlik açıkları için izlenmesi esastır.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Operation Modes */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Mod Seçenekleri: Inline ve Capture</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Inline Mod</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Ağ trafiği gerçek zamanlı olarak doğrudan cihaz üzerinden analiz edilir ve işlenir. 
                  Bu mod, düşük gecikme süresi gerektiren ve anında müdahale edilmesi gereken durumlar için idealdir.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Gerçek zamanlı analiz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Anında müdahale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Düşük gecikme süresi</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Capture Mod</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Ağ trafiği bir kopyası alınarak cihazın bir arayüzüne yönlendirilir ve daha sonra analiz edilir. 
                  Bu mod, ağ performansını etkilemeden detaylı trafik analizi ve uzun süreli izleme için kullanılır.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Ağ performansını etkilemez</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Detaylı analiz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Uzun süreli izleme</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ağ Güvenliğinizi Bir Üst Seviyeye Taşıyın
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                ZengiNet DPI ile ağ trafiğinizi derinlemesine analiz edin, 
                tehditleri erkenden tespit edin ve verilerinizi koruyun.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
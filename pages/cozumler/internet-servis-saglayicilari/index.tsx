import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Shield, 
  Activity, 
  Eye,
  Signal,
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Server,
  Lock,
  Monitor
} from 'lucide-react'

const issSolutions = [
  {
    id: 'loglama-zeronet',
    title: 'Akıllı Trafik Kayıt Sistemi',
    description: 'ISS altyapınızın tüm ağ trafiğini gerçek zamanlı olarak izleyin ve kaydedin. Petabyte seviyesinde veriyi analiz ederek müşteri davranışlarını anlayın, şüpheli aktiviteleri tespit edin ve yasal zorunluluklara tam uyum sağlayın. Yüksek performanslı depolama ve hızlı sorgulama yetenekleri ile operasyonel verimliliğinizi artırın.',
    icon: Activity,
    features: [
      'Saniyede 10M+ log kaydı',
      'Gerçek zamanlı analiz',
      'Otomatik arşivleme',
      'Compliance raporlama'
    ],
    benefits: [
      'TB seviyesinde günlük log',
      'Anlık anomali tespiti',
      'Yasal zorunluluk uyumu'
    ]
  },
  {
    id: 'vpn-zeronet',
    title: 'Gelişmiş VPN Koruma Sistemi',
    description: 'Ağınızdaki VPN trafiğini akıllı algoritmalarla tespit edin ve yönetin. Tüm VPN protokollerini tanıyarak gizlenmiş trafiği ortaya çıkarın, bandwidth optimizasyonu sağlayın ve güvenlik politikalarınızı etkin bir şekilde uygulayın. Dinamik filtreleme ve whitelist yönetimi ile kontrolü elinizde tutun.',
    icon: Lock,
    features: [
      'Tüm VPN protokolleri',
      'Obfuscated VPN tespiti',
      'Policy-based blocking',
      'Whitelist/Blacklist yönetimi'
    ],
    benefits: [
      'Bant genişliği kontrolü',
      'Güvenlik politikaları',
      'Compliance desteği'
    ]
  },
  {
    id: 'guvenli-internet-zeronet',
    title: 'Kapsamlı İnternet Güvenlik',
    description: 'Müşterilerinize güvenli internet deneyimi sunarak marka değerinizi artırın. Gelişmiş DNS filtreleme, malware koruması ve phishing engelleme ile siber tehditlere karşı 360 derece koruma sağlayın. Ebeveyn kontrolü ve özelleştirilebilir güvenlik seviyeleri ile ek gelir kaynakları yaratın.',
    icon: Shield,
    features: [
      'DNS filtreleme',
      'Malware koruması',
      'Phishing engelleme',
      'Ebeveyn kontrolleri'
    ],
    benefits: [
      'Müşteri güvenliği',
      'Ek gelir kaynağı',
      'Marka değeri artışı'
    ]
      },
          {
        id: 'uygulama-tanima-zeronet',
        title: 'Uygulama Tanıma',
        description: 'Ağınızda kullanılan tüm uygulamaları otomatik olarak tespit edin ve kategorize edin. Gelişmiş DPI teknolojisi ile şifreli trafiği bile analiz ederek hangi uygulamaların ne kadar bant genişliği kullandığını görün. Traffic shaping ve QoS politikalarınızı uygulamaya özel olarak yapılandırarak ağ performansınızı optimize edin.',
      icon: Eye,
      features: [
        '5000+ uygulama desteği',
        'Encrypted traffic analysis',
        'Behavior-based detection',
        'Custom signature creation'
      ],
      benefits: [
        '%99.9 doğruluk oranı',
        'Bandgenişlik optimizasyonu',
        'QoS politika desteği'
      ]
    },
    {
      id: 'korelasyon-zeronet',
      title: 'Akıllı Olay Korelasyon Motoru',
      description: 'Farklı kaynaklardan gelen güvenlik olaylarını akıllıca birleştirerek gizli tehditleri ortaya çıkarın. Machine learning algoritmaları ile normal davranış kalıplarını öğrenin, anormallikleri tespit edin ve otomatik alarm sistemleri kurun. Proaktif güvenlik yönetimi ile saldırıları engelleyin.',
      icon: Network,
      features: [
        'Multi-source correlation',
        'ML-based detection',
        'Automated alerting',
        'Threat intelligence'
      ],
      benefits: [
        'Proaktif tehdit tespiti',
        'False positive azaltma',
        'Otomatik incident response'
      ]
    },
    {
      id: 'dpi-zeronet',
      title: 'Yüksek Performanslı Paket İnceleme',
      description: 'Ağ trafiğinizi derinlemesine analiz ederek Layer 7 seviyesinde tam görünürlük elde edin. 100Gbps+ throughput kapasitesi ile SSL/TLS şifrelemeli trafiği bile inceleyin, özel kurallar tanımlayın ve güvenlik politikalarınızı otomatik uygulayın. Gerçek zamanlı tehdit tespiti ve performans optimizasyonu.',
      icon: Monitor,
      features: [
        '100Gbps+ throughput',
        'Layer 7 inspection',
        'SSL/TLS decryption',
        'Custom rule engine'
      ],
      benefits: [
        'Network visibility',
        'Security enforcement',
        'Performance optimization'
      ]
    }
]

const subSolutions = [
  { name: 'Akıllı Trafik Kayıt Sistemi', href: '#loglama-zeronet', icon: Activity },
  { name: 'Gelişmiş VPN Koruma Sistemi', href: '#vpn-zeronet', icon: Lock },
  { name: 'Kapsamlı İnternet Güvenlik', href: '#guvenli-internet-zeronet', icon: Shield },
  { name: 'Uygulama Tanıma', href: '#uygulama-tanima-zeronet', icon: Eye },
  { name: 'Akıllı Olay Korelasyon Motoru', href: '#korelasyon-zeronet', icon: Network },
  { name: 'Yüksek Performanslı Paket İnceleme', href: '#dpi-zeronet', icon: Monitor },
]

export default function ISSPage() {
  return (
    <>
      <Head>
        <title>İnternet Servis Sağlayıcıları Çözümleri - Serrasoft</title>
        <meta name="description" content="ISS'ler için özel geliştirilmiş ZeroNet serisi ürünler ve çözümler" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/cozumler">
                <motion.span 
                  className="text-purple-200 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mb-4"
                  whileHover={{ x: -5 }}
                >
                  ← Çözümlere Dön
                </motion.span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                İnternet Servis Sağlayıcıları
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                ISS'ler için özel tasarlanmış ZeroNet serisi ürünler ile ağ trafiğinizi 
                optimize edin, güvenliği artırın ve müşterilerinize daha iyi hizmet sunun.
              </p>
              
              <div className="flex justify-start">
                <motion.a
                  href="#iss-solutions"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
                >
                  Keşfet
                </motion.a>
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
              <h2 className="text-2xl font-semibold mb-6">ZengiNet Çözümleri</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {subSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <motion.a
                      href={solution.href}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="block glass-effect rounded-xl p-4 text-center hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <solution.icon className="w-8 h-8 mx-auto mb-2 text-purple-600 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                        {solution.name}
                      </p>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ISS Challenges Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">ISS'lerin Karşılaştığı Zorluklar</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Günümüzün internet servis sağlayıcıları karmaşık ağ trafiği, güvenlik tehditleri 
                ve artan müşteri beklentileri ile mücadele ediyor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Trafik Yönetimi',
                  desc: 'Exponential büyüyen internet trafiğini etkin şekilde yönetmek',
                  icon: Globe
                },
                {
                  title: 'Güvenlik Tehditleri',
                  desc: 'Siber saldırılar ve zararlı yazılımlardan ağı korumak',
                  icon: Shield
                },
                {
                  title: 'Yasal Compliance',
                  desc: 'BTK 5651 ve diğer yasal zorunlulukları yerine getirmek',
                  icon: CheckCircle
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <section id="iss-solutions" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {issSolutions.map((solution, index) => (
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
                    <div id={solution.id} className="flex items-center gap-4 mb-6" style={{ scrollMarginTop: '100px' }}>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{solution.title}</h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">{solution.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Özellikler</h3>
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
                  </div>
                  
                  <div className={`glass-effect rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">İşletme Faydaları</h3>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-lg"
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ISS Altyapınızı Güçlendirin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                ZengiNet çözümleri ile ağınızı optimize edin, güvenliği artırın ve 
                müşteri memnuniyetini yükseltin.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
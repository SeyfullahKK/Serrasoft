import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Building, 
  Award, 
  Users, 
  Target, 
  Eye,
  Shield,
  CheckCircle,
  TrendingUp,
  Globe,
  Rocket,
  Network
} from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: '2017',
    label: 'Kuruluş Yılı',
    description: 'Nisan 2017'
  },
  {
    icon: Building,
    value: 'İstanbul Teknopark',
    label: 'Merkez Lokasyon',
    description: 'Ağustos 2019\'dan beri'
  },
  {
    icon: Award,
    value: 'TRL-9',
    label: 'Teknolojik Hazırlık',
    description: 'En yüksek seviye'
  },
  {
    icon: Users,
    value: '4+',
    label: 'Kurumsal Müşteri',
    description: 'Vodafone, TSparkle, Grid Group'
  },
]

const certificates = [
  {
    title: 'ISO/IEC 27001:2022',
    description: 'Bilgi Güvenliği Yönetim Sistemi',
    icon: Shield
  },
  {
    title: 'TS EN ISO 9001:2015',
    description: 'Kalite Yönetim Sistemi',
    icon: Award
  }
]

const businessAreas = [
  'Network Monitoring & Management & Security',
  'Big Data Analysis & Management',
  'Traffic Analysis & Correlation',
  'Deep Packet Inspection (DPI)',
  'Distributed Systems'
]

export default function HakkimizdaPage() {
  return (
    <>
      <Head>
        <title>Hakkımızda - Serrasoft</title>
        <meta name="description" content="Serrasoft Yazılım hakkında detaylı bilgi, vizyon, misyon ve başarı hikayelerimiz." />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Teknolojide Yenilikçi Çözümler</span>
              </h1>
              <p className="text-xl text-gray-600">
                2017'den beri network güvenliği ve büyük veri analizi alanlarında 
                Türkiye'nin teknoloji ihracatına katkı sağlıyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Şirket Tanıtımı */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Serrasoft Yazılım</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nisan 2017'de kurulan şirketimiz, Ağustos 2019'da İstanbul Teknopark'ta 
                  faaliyetlerine başlamıştır.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Müşterilerimize yüksek kaliteli, yenilikçi ve sürdürülebilir büyük veri çözümleri 
                  sunarak iş süreçlerini iyileştirmeyi amaçlıyoruz. Veri analizi ve güvenliği 
                  konularında sunduğumuz çözümlerle, işletmelerin karar verme süreçlerini 
                  güçlendirerek rekabet avantajı elde etmelerine yardımcı oluyoruz.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-xl mb-4">Temel Faaliyet Alanlarımız:</h3>
                  {businessAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h3>
                      <p className="text-gray-700 font-medium mb-1">{stat.label}</p>
                      <p className="text-sm text-gray-500">{stat.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vizyon & Misyon */}
        <section className="py-20 bg-gradient-to-r from-serrasoft-primary/5 to-serrasoft-secondary/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Birlikte Büyüyoruz</span>
              </h2>
              <p className="text-xl text-gray-600">
                Ülkemizin teknoloji ekosisteminin gelişmesine katkıda bulunuyoruz. 
                Müşterilerimizin ihtiyaçlarına çözümler üreterek birlikte büyüyoruz.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Odağımız</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Müşteri memnuniyetini en üst düzeyde tutarak, sektördeki teknolojik eksiklikleri 
                  gidermek ve Türkiye'nin dijital dönüşümüne anlamlı katkılar sağlamak. Her proje 
                  ile birlikte, daha güvenli, daha verimli ve daha akıllı sistemler inşa etmeyi 
                  amaçlıyoruz. İnovasyonun kalbi olan Teknopark'ta, geleceğin teknolojilerini 
                  bugünden hayata geçiriyoruz.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Hayalimiz</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye'nin teknoloji ihracatında öncü olmak ve global sahnede tanınan bir 
                  marka haline gelmek. Yenilikçi çözümlerimizle dijital dönüşümün mimarları olarak, 
                  müşterilerimizin başarı hikayelerinin vazgeçilmez parçası olmayı hedefliyoruz. 
                  Teknolojinin sunduğu sınırsız fırsatları keşfederek, sürekli öğrenen ve 
                  gelişen bir ekosistem oluşturmak istiyoruz.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sertifikalar */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Sertifikalarımız</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Şirketimiz, bilgi güvenliği ve kalite yönetimi konularında yüksek standartlara 
                uyum sağladığını gösteren uluslararası sertifikalara sahiptir.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <cert.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-gray-600 mt-12 max-w-3xl mx-auto"
            >
              Bu sertifikalar, hem hizmetlerimizin kalitesini hem de müşteri verilerinin güvenliğini 
              ön planda tutarak, sürekli iyileştirme ve güvenilirlik ilkelerimiz doğrultusunda 
              hareket ettiğimizi ortaya koymaktadır.
            </motion.p>
          </div>
        </section>

        {/* Başarı Hikayesi */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Başarı Hikayemiz</span>
              </h2>
              <p className="text-xl text-gray-600">
                ViziNet LibDa projemizle TRL-5'ten TRL-9'a uzanan yolculuğumuz
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
                {[
                  {
                    title: 'TRL-9',
                    subtitle: 'Teknolojik Hazırlık',
                    description: 'Proje sonunda ulaşılan en yüksek teknoloji hazırlık seviyesi',
                    icon: Rocket,
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    title: '4',
                    subtitle: 'Kurumsal Müşteri',
                    description: 'Grid Group, Vodafone Türkiye, TSparkle, Vodafone Kıbrıs',
                    icon: Users,
                    color: 'from-pink-500 to-pink-600'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold gradient-text mb-2">{item.title}</h3>
                    <p className="font-semibold text-gray-800 mb-2">{item.subtitle}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  ViziNet LibDa projesi, başlangıçta TRL-5 seviyesinde bir tasarım onayıyla yola çıktı. 
                  Müşterilerimizin desteğiyle, projemizi TRL-9 seviyesine başarıyla taşıdık. Özellikle 
                  Vodafone Türkiye ile işbirliğimiz sonucunda bazı modüllerin canlıya 
                  alınması, projemizin değerini ve etkinliğini kanıtladı. Bu başarı, ekibimizin 
                  kararlılığı ve yenilikçi yaklaşımının bir göstergesidir.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-6">
                Teknoloji Yolculuğunuzda Yanınızdayız
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Network güvenliği ve büyük veri analizi ihtiyaçlarınız için 
                uzman ekibimizle iletişime geçin.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
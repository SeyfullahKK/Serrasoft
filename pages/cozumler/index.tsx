import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Server, Globe, Building2, ArrowRight, Shield, Zap, Cloud } from 'lucide-react'

const solutions = [
  {
    id: 'telco',
    title: 'Telco Çözümleri',
    description: 'Telekomünikasyon sektörüne özel geliştirilmiş, yüksek performanslı ve ölçeklenebilir çözümler',
    icon: Server,
    color: 'from-blue-500 to-blue-700',
    features: [
      'Korelasyon',
      'Loglama',
      'Uygulama Tanıma',
      
    ],
    href: '/cozumler/telco'
  },
  {
    id: 'iss',
    title: 'İnternet Servis Sağlayıcıları',
    description: 'İSS\'ler için özel tasarlanmış, yüksek trafikli ağları yönetebilen güçlü çözümler',
    icon: Globe,
    color: 'from-purple-500 to-purple-700',
    features: [
      'Akıllı Trafik Kayıt Sistemi',
      'Gelişmiş VPN Koruma Sistemi',
      'Kapsamlı İnternet Güvenlik',
      'Uygulama Tanıma',
      'Akıllı Olay Korelasyon Motoru',
      'Yüksek Performanslı Paket İnceleme',
    ],
    href: '/cozumler/internet-servis-saglayicilari'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Çözümler',
    description: 'Kurumsal işletmeler için uçtan uca dijital dönüşüm ve teknoloji çözümleri',
    icon: Building2,
    color: 'from-green-500 to-green-700',
    features: [
      'Size uygun çözümler için iletişime geçin!',
    ],
    href: '/cozumler/enterprise'
  }
]

export default function CozumlerPage() {
  return (
    <>
      <Head>
        <title>Çözümler - Serrasoft</title>
        <meta name="description" content="Serrasoft olarak telekom, ISS ve kurumsal işletmeler için özel çözümler sunuyoruz." />
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
                <span className="gradient-text">Sektöre Özel Çözümler</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Telekom operatörleri, internet servis sağlayıcıları ve kurumsal işletmeler için 
                özel olarak tasarlanmış, yüksek performanslı ve güvenilir teknoloji çözümleri sunuyoruz.
              </p>
              <div className="flex justify-center gap-4">
                <Shield className="w-12 h-12 text-green-500" />
                <Zap className="w-12 h-12 text-yellow-500" />
                <Cloud className="w-12 h-12 text-blue-500" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="h-full glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-serrasoft-primary rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={solution.href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-serrasoft-primary font-semibold group-hover:gap-4 transition-all"
                      >
                        Detaylı İncele
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                İşletmeniz için En Uygun Çözümü Bulalım
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Uzman ekibimiz, ihtiyaçlarınızı analiz edip size özel çözümler sunmak için hazır.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-serrasoft-primary px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Ücretsiz Danışmanlık Al
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
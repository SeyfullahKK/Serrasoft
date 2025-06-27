import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Package, Network, Cpu, Database, ArrowRight, Star, Server, Activity } from 'lucide-react'

const productCategories = [
  {
    id: 'telco-products',
    title: 'Telco Ürünleri',
    description: 'Telekomünikasyon altyapınız için gelişmiş loglama ve uygulama tanıma ürünleri',
    icon: Package,
    products: [
      { name: 'Loglama: ZeroNet', desc: 'Yüksek performanslı loglama sistemi', icon: Activity },
      { name: 'Uygulama Tanıma: ZeroNet', desc: 'Gelişmiş DPI ve uygulama analizi', icon: Server },
    ],
    color: 'from-blue-500 to-cyan-600',
    href: '/urunler/telco'
  },
  {
    id: 'networking',
    title: 'Networking Solutions',
    description: 'Modern ağ altyapıları için yenilikçi ve güvenilir çözümler',
    icon: Network,
    features: ['SDN Desteği', 'Otomatik Ölçekleme', 'Gerçek Zamanlı İzleme'],
    color: 'from-purple-500 to-pink-600',
    href: '/urunler/networking-solutions'
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    description: 'Dağıtık sistemler için yüksek erişilebilirlik ve performans çözümleri',
    icon: Database,
    features: ['Mikroservis Mimarisi', 'Yük Dengeleme', 'Otomatik Yedekleme'],
    color: 'from-green-500 to-emerald-600',
    href: '/urunler/distributed-systems'
  },
  {
    id: 'realtime',
    title: 'Real-Time Systems',
    description: 'Kritik uygulamalar için gerçek zamanlı veri işleme sistemleri',
    icon: Cpu,
    features: ['Ultra Düşük Gecikme', 'Yüksek İşlem Kapasitesi', '99.99% Uptime'],
    color: 'from-orange-500 to-red-600',
    href: '/urunler/realtime-systems'
  }
]

const testimonials = [
  {
    company: 'Turkcell',
    quote: 'Serrasoft\'un çözümleri sayesinde ağ performansımızı %40 artırdık.',
    author: 'Ahmet Yılmaz',
    position: 'CTO'
  },
  {
    company: 'Vodafone',
    quote: 'Güvenilir ve ölçeklenebilir altyapı çözümleri için doğru partner.',
    author: 'Mehmet Kaya',
    position: 'Network Director'
  }
]

export default function UrunlerPage() {
  return (
    <>
      <Head>
        <title>Ürünler - Serrasoft</title>
        <meta name="description" content="Serrasoft'un yenilikçi teknoloji ürünleri ve çözümleri" />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Geleceğin Teknolojileri
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Sektörün en gelişmiş ürünleri ile işletmenizi geleceğe taşıyın. 
                Yüksek performans, güvenlik ve ölçeklenebilirlik bir arada.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Ürün Kataloğunu İndir
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Ürün Kategorileri</span>
              </h2>
              <p className="text-xl text-gray-600">
                İhtiyacınıza uygun ürün grubunu seçin
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    {category.products && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Öne Çıkan Ürünler:</h4>
                        <div className="space-y-3">
                          {category.products.map((product, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <product.icon className="w-5 h-5 text-serrasoft-primary" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800">{product.name}</p>
                                <p className="text-sm text-gray-600">{product.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.features && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Özellikler:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link href={category.href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-serrasoft-primary font-semibold group-hover:gap-4 transition-all"
                      >
                        Tüm Ürünleri Gör
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* High Performance Computing - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">High Performance Computing</h3>
                    <p className="text-gray-600 mb-6">
                      Yoğun hesaplama gerektiren işlemler için optimize edilmiş, 
                      yüksek performanslı bilgi işlem çözümleri
                    </p>
                    <Link href="/urunler/high-performance-computing">
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-indigo-600">10x</p>
                      <p className="text-sm text-gray-600">Daha Hızlı İşlem</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-indigo-600">GPU</p>
                      <p className="text-sm text-gray-600">Destekli</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-indigo-600">AI/ML</p>
                      <p className="text-sm text-gray-600">Optimize</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-indigo-600">24/7</p>
                      <p className="text-sm text-gray-600">Destek</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Müşteri Görüşleri</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
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
                Demo Talep Edin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ürünlerimizi canlı olarak görün ve işletmenize nasıl değer katacağını keşfedin.
              </p>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-serrasoft-primary px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Canlı Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-serrasoft-primary transition-all"
                >
                  Fiyat Teklifi Al
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 
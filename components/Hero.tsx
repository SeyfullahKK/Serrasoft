import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Shield, ArrowRight, Network, Database, Globe } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-serrasoft-primary/20 to-serrasoft-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-serrasoft-primary px-4 py-2 rounded-full mb-4"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Geleceğin Teknolojileri</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              <span className="text-gray-900">Teknolojide</span>
              <br />
              <span className="gradient-text">Yenilikçi Çözümler</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Ağ güvenliği, büyük veri analizi ve derinlemesine paket inceleme alanlarında 
              uzmanlaşmış çözümlerle telekomünikasyon ve kurumsal sektörlere hizmet veriyoruz. 
              Modern teknolojilerle işletmenizin dijital altyapısını güçlendiriyoruz.
            </p>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Ana Container */}
            <div className="relative w-full h-full">
              {/* Sol üst kart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 0
                }}
                className="absolute top-0 left-0 w-64 h-40 glass-effect rounded-2xl p-4 shadow-xl z-10 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg border border-white/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <Network className="w-6 h-6 text-orange-500" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Networking Solutions</h3>
                <p className="text-xs text-gray-600">Modern Ağ Altyapıları</p>
              </motion.div>

              {/* Sağ üst kart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, 15, 0],
                  rotateY: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="absolute top-0 right-0 w-64 h-40 glass-effect rounded-2xl p-4 shadow-xl z-20 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg border border-white/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <Database className="w-6 h-6 text-blue-500" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Distributed Systems</h3>
                <p className="text-xs text-gray-600">Dağıtık Sistem Mimarileri</p>
              </motion.div>

              {/* Orta ana kart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0],
                  rotateX: [0, 2, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-44 glass-effect rounded-2xl p-5 shadow-2xl z-30 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg border border-white/60"
              >
                <div className="flex items-center justify-between mb-3">
                  <Shield className="w-7 h-7 text-green-500" />
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">High Performance Computing</h3>
                <p className="text-sm text-gray-600">Yüksek Performans Hesaplama</p>
              </motion.div>

              {/* Sol alt kart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, 12, 0],
                  rotateY: [0, 3, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 1.5
                }}
                className="absolute bottom-0 left-0 w-64 h-40 glass-effect rounded-2xl p-4 shadow-xl z-10 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg border border-white/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Real-time Systems</h3>
                <p className="text-xs text-gray-600">Gerçek Zamanlı Sistemler</p>
              </motion.div>

              {/* Sağ alt kart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -12, 0],
                  rotateY: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 2
                }}
                className="absolute bottom-0 right-0 w-64 h-40 glass-effect rounded-2xl p-4 shadow-xl z-10 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg border border-white/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <Globe className="w-6 h-6 text-purple-500" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Low Latency Systems</h3>
                <p className="text-xs text-gray-600">Ultra Düşük Gecikme</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
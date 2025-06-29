import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Rocket, Building, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    icon: Calendar,
    value: '2017',
    label: 'Kuruluş Yılı',
  },
  {
    icon: Building,
    value: 'İstanbul Teknopark',
    label: 'Merkez Lokasyon',
  },
  {
    icon: Award,
    value: 'TRL-9',
    label: 'Teknolojik Hazırlık',
  },
  {
    icon: Users,
    value: '4+',
    label: 'Aktif Müşteri',
  },
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hakkımızda</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Serrasoft Yazılım, 2017 yılında kurulmuş ve İstanbul Teknopark'ta faaliyet gösteren 
              bir teknoloji şirketidir. Network güvenliği, büyük veri analizi ve derinlemesine paket 
              inceleme (DPI) alanlarında uzmanlaşmış çözümler sunuyoruz.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              TRL-9 seviyesine ulaşan projelerimizle, Vodafone Türkiye başta olmak üzere 
              sektörün önde gelen şirketlerine hizmet veriyoruz. ISO 27001:2022 ve ISO 9001:2015 
              sertifikalarımız, kalite ve güvenlik standartlarımızın göstergesidir.
            </p>
            
            <Link href="/hakkimizda">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                Detaylı Bilgi
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-effect rounded-2xl p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">ISO 27001:2022</p>
                  <p className="text-sm text-gray-600">& TS EN ISO 9001:2015</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
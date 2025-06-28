import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Rocket, Building, Calendar } from 'lucide-react'

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
              Serrasoft Yazılım Limited Şirketi, Nisan 2017'de kurulmuş olup Ağustos 2019'da 
              İstanbul Teknopark'ta faaliyetlerine başlamıştır. Network Monitoring & Management & Security, 
              Big Data Analysis & Management, Traffic Analysis & Correlation, Deep Packet Inspection (DPI) 
              ve Distributed Systems alanlarında uzmanlaşmış bir teknoloji şirketiyiz.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Projelerimiz, ithalat ikamesi ve ihracat potansiyeli açısından oldukça umut verici 
              bir konumdadır. Türkiye'de bu alanlardaki teknolojik eksiklikler ve devamlı artan 
              çözüm talepleri bizim için önemli fırsatlar sunmaktadır. Birkaç yıl içinde Türkiye'de 
              ve birçok ülkede, ürün kalitemizle bu alanlarda önemli bir konuma gelmeyi hedeflemekteyiz.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-serrasoft-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
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
            <div className="relative z-10">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
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
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-serrasoft-primary/20 to-serrasoft-accent/20 rounded-2xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Rocket } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '100+',
    label: 'Mutlu Müşteri',
  },
  {
    icon: Award,
    value: '250+',
    label: 'Tamamlanan Proje',
  },
  {
    icon: Clock,
    value: '10+',
    label: 'Yıllık Deneyim',
  },
  {
    icon: Rocket,
    value: '24/7',
    label: 'Destek',
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
              <span className="text-gray-900">Neden</span>{' '}
              <span className="gradient-text">Serrasoft?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Serrasoft olarak, teknolojinin gücünü işletmelerin hizmetine sunuyoruz. 
              Uzman ekibimiz ve yenilikçi yaklaşımımızla, dijital dönüşüm sürecinizde 
              güvenilir partneriniz oluyoruz.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Müşteri odaklı çözümlerimiz ve agile metodolojimiz sayesinde, 
              projelerinizi zamanında ve bütçenize uygun şekilde teslim ediyoruz. 
              Her projede kalite ve mükemmelliği hedefliyoruz.
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
                  <h3 className="text-3xl font-bold gradient-text mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
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
                    <p className="font-semibold">ISO 27001</p>
                    <p className="text-sm text-gray-600">Sertifikalı</p>
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
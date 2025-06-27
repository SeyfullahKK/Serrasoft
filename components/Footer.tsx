import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  const footerLinks = [
    {
      title: 'Hizmetler',
      links: [
        { name: 'Web Geliştirme', href: '#' },
        { name: 'Mobil Uygulama', href: '#' },
        { name: 'E-Ticaret', href: '#' },
        { name: 'Danışmanlık', href: '#' },
      ],
    },
    {
      title: 'Şirket',
      links: [
        { name: 'Hakkımızda', href: '#about' },
        { name: 'Kariyer', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'İletişim', href: '#contact' },
      ],
    },
    {
      title: 'Destek',
      links: [
        { name: 'Dokümantasyon', href: '#' },
        { name: 'SSS', href: '#' },
        { name: 'Gizlilik Politikası', href: '#' },
        { name: 'Kullanım Koşulları', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-serrasoft-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-serrasoft-accent" />
              <span className="text-2xl font-bold">Serrasoft</span>
            </div>
            <p className="text-gray-400 mb-6">
              Dijital dönüşüm yolculuğunuzda güvenilir teknoloji partneriniz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-serrasoft-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-serrasoft-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Serrasoft. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 
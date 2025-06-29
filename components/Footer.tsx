import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()



  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  const footerLinks = [
    {
      title: 'Ürünler',
      links: [
        { name: 'ZengiNet DPI', href: '/urunler/zenginet-dpi' },
        { name: 'ViziNet CorreLog', href: '/urunler/vizinet-correlog' },
        { name: 'ViziNet LibDa', href: '/urunler/vizinet-libda' },
        { name: 'SysAware', href: '/urunler/sysaware' },
      ],
    },
    {
      title: 'Çözümler',
      links: [
        { name: 'Telco Çözümleri', href: '/cozumler/telco' },
        { name: 'İSS Çözümleri', href: '/cozumler/internet-servis-saglayicilari' },
        { name: 'Kurumsal Çözümler', href: '/cozumler/enterprise' },
      ],
    },
    {
      title: 'Yetkinlikler',
      links: [
        { name: 'Networking Solutions', href: '/yetkinlikler/networking-solutions' },
        { name: 'Distributed Systems', href: '/yetkinlikler/distributed-systems' },
        { name: 'High Performance Computing', href: '/yetkinlikler/high-performance-computing' },
        { name: 'Real-time Systems', href: '/yetkinlikler/realtime-systems' },
      ],
    },
          {
        title: 'Şirket',
        links: [
          { name: 'Hakkımızda', href: '#about' },
          { name: 'İletişim', href: '#contact' },
        ],
      },
  ]

  return (
    <footer className="bg-serrasoft-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-serrasoft-accent" />
              <span className="text-2xl font-bold">Serrasoft</span>
            </div>
            <p className="text-gray-400 mb-6">
              Teknolojide yenilikçi çözümler
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
              <h3 className="text-lg font-semibold mb-4 text-serrasoft-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Serrasoft Yazılım Limited Şirketi. Tüm hakları saklıdır.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 
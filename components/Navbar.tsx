import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, User, Building, MessageSquare, Mail, Phone, Send } from 'lucide-react'
import Link from 'next/link'

interface NavItem {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData)
    // Başarılı gönderim sonrası
    setShowContactModal(false)
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      reason: '',
      message: ''
    })
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
  }

  const navItems: NavItem[] = [
    { name: 'Çözümler', href: '/cozumler' },
    { name: 'Ürünler', href: '/urunler' },
    { name: 'Yetkinlikler', href: '/yetkinlikler' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-[100] transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-8 h-8 text-serrasoft-primary" />
                <span className="text-2xl font-bold gradient-text">Serrasoft</span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className="text-gray-700 hover:text-serrasoft-primary transition-colors font-medium py-2 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                Çözüm Bul
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-effect rounded-lg overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      className="block py-2 text-gray-700 hover:text-serrasoft-primary transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
                <button 
                  onClick={() => {
                    setIsOpen(false)
                    setShowContactModal(true)
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-6 py-2 rounded-full font-medium"
                >
                  Çözüm Bul
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[500] flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowContactModal(false)
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary p-6 text-white rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Çözüm Bul</h2>
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="mt-2 text-white/90">
                  Size özel çözümler sunmak için bilgilerinize ihtiyacımız var.
                </p>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  {/* İsim */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                      <User className="w-4 h-4" />
                      İsim
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all text-sm"
                      placeholder="Adınız"
                    />
                  </div>

                  {/* Soyisim */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                      <User className="w-4 h-4" />
                      Soyisim
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all text-sm"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {/* Firma */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                      <Building className="w-4 h-4" />
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all text-sm"
                      placeholder="Çalıştığınız firma"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                      <Mail className="w-4 h-4" />
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all text-sm"
                      placeholder="ornek@firma.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {/* Telefon */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                      <Phone className="w-4 h-4" />
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all text-sm"
                      placeholder="0 (5XX) XXX XX XX"
                    />
                  </div>

                  {/* Ulaşma Sebebi */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                      <MessageSquare className="w-4 h-4" />
                      Ulaşma Sebebiniz
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all text-sm"
                    >
                      <option value="">Seçiniz</option>
                      <option value="telco">Telco Çözümleri</option>
                      <option value="iss">İSS Çözümleri</option>
                      <option value="enterprise">Enterprise Çözümleri</option>
                      <option value="demo">Demo Talebi</option>
                      <option value="fiyat">Fiyat Bilgisi</option>
                      <option value="teknik">Teknik Destek</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                {/* Mesaj */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-1 text-sm">
                    <MessageSquare className="w-4 h-4" />
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-serrasoft-primary/50 focus:border-serrasoft-primary transition-all resize-none text-sm"
                    placeholder="İhtiyaçlarınız hakkında detaylı bilgi verebilirsiniz..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Gönder
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for dropdown hover effects */}
      <style jsx>{`
        .dropdown-item:hover .nested-dropdown {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </>
  )
}

export default Navbar 
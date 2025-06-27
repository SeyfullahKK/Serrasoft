import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      name: 'Çözümler',
      href: '/cozumler',
      dropdown: [
        { name: 'Telco', href: '/cozumler/telco' },
        { name: 'İnternet Servis Sağlayıcıları', href: '/cozumler/internet-servis-saglayicilari' },
        { name: 'Enterprise', href: '/cozumler/enterprise' }
      ]
    },
    {
      name: 'Ürünler',
      href: '/urunler',
      dropdown: [
        { name: 'Telco Ürünleri', href: '/urunler/telco' },
        { name: 'Networking Solutions', href: '/urunler/networking-solutions' },
        { name: 'Distributed Systems', href: '/urunler/distributed-systems' },
        { name: 'Real-Time Systems', href: '/urunler/realtime-systems' },
        { name: 'High Performance Computing', href: '/urunler/high-performance-computing' }
      ]
    },
    {
      name: 'Yetkinlikler',
      href: '/yetkinlikler',
      dropdown: [
        { name: 'Networking Solutions', href: '/yetkinlikler/networking-solutions' },
        { name: 'Distributed Systems', href: '/yetkinlikler/distributed-systems' },
        { name: 'Realtime Systems', href: '/yetkinlikler/realtime-systems' },
        { name: 'Low Latency Systems', href: '/yetkinlikler/low-latency-systems' },
        { name: 'High Performance Computing', href: '/yetkinlikler/high-performance-computing' }
      ]
    },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'İletişim', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
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
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href}>
                  <motion.button
                    className="flex items-center gap-1 text-gray-700 hover:text-serrasoft-primary transition-colors font-medium py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </motion.button>
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 glass-effect rounded-xl shadow-2xl overflow-hidden min-w-[250px]"
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link key={subItem.href} href={subItem.href}>
                            <motion.div
                              className="block px-6 py-3 text-gray-700 hover:text-serrasoft-primary hover:bg-gray-50 transition-all cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-effect rounded-lg overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link href={item.href}>
                      <div
                        className="block py-2 text-gray-700 hover:text-serrasoft-primary transition-colors font-medium"
                        onClick={() => !item.dropdown && setIsOpen(false)}
                      >
                        {item.name}
                      </div>
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link key={subItem.href} href={subItem.href}>
                            <div
                              className="block py-2 text-sm text-gray-600 hover:text-serrasoft-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="w-full mt-4 bg-gradient-to-r from-serrasoft-primary to-serrasoft-secondary text-white px-6 py-2 rounded-full font-medium">
                  Demo İste
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar 
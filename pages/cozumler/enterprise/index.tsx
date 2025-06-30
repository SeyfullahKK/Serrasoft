import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Network, 
  Database, 
  Activity, 
  Cpu,
  Shield,
  Server,
  Cloud,
  ArrowRight,
  CheckCircle,
  Monitor,
  Code,
  TrendingUp,
  Users,
  Home,
  ChevronRight,
  Building2,
  Layers,
  Search
} from 'lucide-react'

const enterpriseSolutions = [
  {
    id: 'compliance',
    title: '5651 Sayılı Kanun Uyumu',
    description: '5651 sayılı kanun kapsamında yasal yükümlülüklerinizi karşılayan güvenli ve şeffaf çözümler. Log tutma, veri saklama ve raporlama süreçlerinizi otomatik hale getiriyoruz.',
    icon: Shield,
    capabilities: [
      'Otomatik Log Tutma ve Saklama',
      'Yasal Raporlama Sistemleri',
      'Veri Güvenliği ve Şifreleme',
      'Denetim ve Uyumluluk Takibi'
    ],
    metric: { label: 'Uyumluluk', value: '%100' }
  },
  {
    id: 'performance',
    title: 'High Performance Computing',
    subtitle: 'Yüksek Performans Sistemleri',
    description: 'Petaflops seviyesinde işlem gücü ile kritik iş yüklerinizi optimize ediyoruz. GPU hızlandırma, paralel işleme ve bellek optimizasyonu ile maksimum performans.',
    icon: Cpu,
    capabilities: [
      'Paralel İşleme Mimarileri',
      'GPU Hızlandırma Teknolojileri',
      'Bellek Optimizasyonu',
      'Yüksek Verimli Algoritmalar'
    ],
    metric: { label: 'İşlem Gücü', value: 'Petaflops' }
  },
  {
    id: 'lowlatency',
    title: 'Low Latency Systems',
    subtitle: 'Ultra Düşük Gecikme',
    description: 'Mikrosan seviyesinde gecikme ile kritik uygulamalarınızı destekliyoruz. Real-time işleme, optimized networking ve edge computing ile anlık yanıt süreleri.',
    icon: Activity,
    capabilities: [
      'Mikrosaniye Seviye Gecikme',
      'Real-time Veri İşleme',
      'Edge Computing Çözümleri',
      'Optimized Network Protocols'
    ],
    metric: { label: 'Gecikme', value: '<100μs' }
  }
]





export default function EnterprisePage() {
  const [selectedSolution, setSelectedSolution] = useState(0)

  return (
    <>
      <Head>
        <title>Enterprise Teknoloji Çözümleri - Serrasoft</title>
        <meta name="description" content="5651 sayılı kanuna uyumlu, high performance ve low latency teknolojileriyle kurumsal işletmeler için güvenli ve hızlı dijital dönüşüm çözümleri. Yasal yükümlülüklerinizi karşılayan, yüksek performanslı altyapı hizmetleri." />
      </Head>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Network Nodes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i % 3) * 25}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
            
            {/* Network Connections */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              {[...Array(6)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${10 + (i * 15)}%`}
                  y1={`${30 + (i % 2) * 20}%`}
                  x2={`${25 + (i * 15)}%`}
                  y2={`${50 + (i % 3) * 15}%`}
                  stroke="#4F46E5"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </svg>
            
            {/* Gradient Orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full opacity-10 blur-xl" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full opacity-10 blur-xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-500 mb-8">
              <Link href="/" className="hover:text-gray-700 transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/cozumler" className="hover:text-gray-700 transition-colors">
                Çözümler
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Enterprise</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Enterprise
                    <motion.span 
                      className="block font-medium text-indigo-700"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Teknoloji Çözümleri
                    </motion.span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    5651 sayılı kanuna tam uyumlu, high performance ve low latency teknolojileriyle 
                    kurumsal dönüşümünüzü destekliyoruz. Distributed systems, real-time analytics ve 
                    high-performance computing alanlarında uzman ekibimizle, yasal yükümlülüklerinizi 
                    karşılayan ve ultra hızlı performans sunan çözümlerle işletmenizi geleceğe taşıyın.
                  </motion.p>
                  
                  {/* Key Features */}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {[
                      { icon: Shield, label: '5651 Kanun Uyumu', color: 'text-green-600' },
                      { icon: Cpu, label: 'High Performance', color: 'text-indigo-600' },
                      { icon: Activity, label: 'Low Latency', color: 'text-indigo-700' }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`p-2 rounded-lg bg-gray-50 ${feature.color}`}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{feature.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <motion.button 
                      onClick={() => {
                        const solutionsSection = document.querySelector('#solutions-section');
                        if (solutionsSection) {
                          solutionsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Keşfedin
                      <ArrowRight className="inline-block w-5 h-5 ml-2" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Interactive Visualization */}
              <div className="lg:col-span-5">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                                     {/* Main Container */}
                   <div className="relative w-full h-[500px] bg-gradient-to-br from-white/60 to-indigo-50/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                     
                     {/* Animated Network Topology */}
                     <div className="absolute inset-0 p-12">
                                             {/* Central Hub */}
                       <motion.div
                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-700 rounded-full flex items-center justify-center shadow-lg"
                         animate={{
                           scale: [1, 1.1, 1],
                           boxShadow: ["0 4px 20px rgba(59, 130, 246, 0.3)", "0 8px 30px rgba(59, 130, 246, 0.5)", "0 4px 20px rgba(59, 130, 246, 0.3)"]
                         }}
                         transition={{ duration: 2, repeat: Infinity }}
                       >
                         <Server className="w-10 h-10 text-white" />
                       </motion.div>
                      
                                             {/* Satellite Nodes */}
                       {[
                         { x: 15, y: 15, icon: Database, delay: 0 },
                         { x: 85, y: 25, icon: Cloud, delay: 0.5 },
                         { x: 10, y: 85, icon: Monitor, delay: 1.0 },
                         { x: 90, y: 80, icon: Network, delay: 1.5 }
                       ].map((node, index) => (
                         <motion.div
                           key={index}
                           className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-200"
                           style={{ left: `${node.x}%`, top: `${node.y}%` }}
                           animate={{
                             y: [0, -10, 0],
                             scale: [1, 1.1, 1]
                           }}
                           transition={{
                             duration: 3,
                             delay: node.delay,
                             repeat: Infinity
                           }}
                         >
                           <node.icon className="w-8 h-8 text-indigo-700" />
                         </motion.div>
                       ))}
                      
                                             {/* Connecting Lines */}
                       <svg className="absolute inset-0 w-full h-full">
                         {[
                           { x1: "50%", y1: "50%", x2: "15%", y2: "15%" },
                           { x1: "50%", y1: "50%", x2: "85%", y2: "25%" },
                           { x1: "50%", y1: "50%", x2: "10%", y2: "85%" },
                           { x1: "50%", y1: "50%", x2: "90%", y2: "80%" }
                         ].map((line, index) => (
                           <motion.line
                             key={index}
                             x1={line.x1}
                             y1={line.y1}
                             x2={line.x2}
                             y2={line.y2}
                             stroke="url(#gradient)"
                             strokeWidth="3"
                             initial={{ pathLength: 0, opacity: 0 }}
                             animate={{ pathLength: 1, opacity: 0.6 }}
                             transition={{
                               duration: 1.5,
                               delay: 0.5 + (index * 0.2),
                               repeat: Infinity,
                               repeatType: "reverse",
                               repeatDelay: 2
                             }}
                           />
                         ))}
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4F46E5" />
                            <stop offset="100%" stopColor="#3730A3" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                                             {/* Data Flow Particles */}
                       {[...Array(16)].map((_, i) => (
                         <motion.div
                           key={i}
                           className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                           style={{
                             left: "50%",
                             top: "50%"
                           }}
                           animate={{
                             x: [0, Math.cos(i * 22.5 * Math.PI / 180) * 160],
                             y: [0, Math.sin(i * 22.5 * Math.PI / 180) * 160],
                             opacity: [1, 0.2, 1],
                             scale: [0, 1.2, 0]
                           }}
                           transition={{
                             duration: 2.5,
                             delay: i * 0.1,
                             repeat: Infinity
                           }}
                         />
                       ))}
                     </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>



        {/* Solutions */}
        <section id="solutions-section" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Çözüm Alanlarımız</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern kurumsal ihtiyaçlarınızı karşılayan kapsamlı teknoloji çözümleri
              </p>
            </div>

            {/* Solution Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {enterpriseSolutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setSelectedSolution(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedSolution === index
                      ? 'bg-indigo-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {solution.title}
                </button>
              ))}
            </div>

            {/* Selected Solution */}
            <motion.div
              key={selectedSolution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                      {React.createElement(enterpriseSolutions[selectedSolution].icon, { 
                        className: "w-8 h-8 text-indigo-800" 
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-gray-900">
                        {enterpriseSolutions[selectedSolution].title}
                      </h3>
                      <p className="text-gray-600">{enterpriseSolutions[selectedSolution].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {enterpriseSolutions[selectedSolution].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {enterpriseSolutions[selectedSolution].capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">{enterpriseSolutions[selectedSolution].metric.label}:</span>
                    <span className="text-2xl font-medium text-indigo-800">
                      {enterpriseSolutions[selectedSolution].metric.value}
                    </span>
                  </div>
                </div>
                
                                 <div className="relative">
                   <div className="aspect-square bg-gradient-to-br from-indigo-50 to-gray-50 rounded-2xl p-8">
                     {/* Dynamic visualization based on selected solution */}
                     {selectedSolution === 0 && (
                       // 5651 Law Compliance Visualization
                       <div className="h-full flex flex-col items-center justify-center">
                         <div className="relative mb-8">
                           <Shield className="w-16 h-16 text-green-600 mb-4" />
                           <div className="grid grid-cols-2 gap-4">
                             {[
                               { icon: Database, label: 'Log', delay: 0 },
                               { icon: Monitor, label: 'Audit', delay: 0.3 },
                               { icon: Server, label: 'Report', delay: 0.6 },
                               { icon: CheckCircle, label: 'Comply', delay: 0.9 }
                             ].map((item, i) => (
                               <motion.div
                                 key={i}
                                 className="flex flex-col items-center"
                                 animate={{
                                   y: [0, -8, 0],
                                   opacity: [0.6, 1, 0.6]
                                 }}
                                 transition={{
                                   duration: 2,
                                   delay: item.delay,
                                   repeat: Infinity
                                 }}
                               >
                                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-1">
                                   <item.icon className="w-4 h-4 text-green-600" />
                                 </div>
                                 <span className="text-xs text-gray-600">{item.label}</span>
                               </motion.div>
                             ))}
                           </div>
                         </div>
                         <div className="text-center">
                           <div className="text-2xl font-bold text-green-600">%100</div>
                           <div className="text-sm text-gray-600">Uyumluluk</div>
                           <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
                             <motion.div 
                               className="h-full bg-green-500 rounded-full"
                               initial={{ width: 0 }}
                               animate={{ width: "100%" }}
                               transition={{ duration: 2, delay: 0.5 }}
                             />
                           </div>
                         </div>
                       </div>
                     )}

                     {selectedSolution === 1 && (
                       // High Performance Computing Visualization
                       <div className="h-full flex flex-col items-center justify-center">
                         <div className="relative mb-8">
                           <Cpu className="w-16 h-16 text-purple-600 mb-4" />
                           <div className="grid grid-cols-4 gap-1">
                             {[...Array(16)].map((_, i) => (
                               <motion.div
                                 key={i}
                                 className="w-4 h-4 bg-purple-400 rounded"
                                 animate={{
                                   backgroundColor: ["#C084FC", "#7C3AED", "#C084FC"],
                                   scale: [1, 1.2, 1]
                                 }}
                                 transition={{
                                   duration: 1.5,
                                   delay: i * 0.05,
                                   repeat: Infinity
                                 }}
                               />
                             ))}
                           </div>
                         </div>
                         <div className="text-center">
                           <div className="text-2xl font-bold text-purple-600">Petaflops</div>
                           <div className="text-sm text-gray-600">İşlem Gücü</div>
                           <div className="relative w-32 h-8 bg-gray-200 rounded-lg mt-2 overflow-hidden">
                             <motion.div
                               className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg"
                               animate={{
                                 x: ["-100%", "0%", "100%"]
                               }}
                               transition={{
                                 duration: 2,
                                 repeat: Infinity
                               }}
                             />
                           </div>
                         </div>
                       </div>
                     )}

                     {selectedSolution === 2 && (
                       // Low Latency Systems Visualization
                       <div className="h-full flex flex-col items-center justify-center">
                         <div className="relative mb-8">
                           <Activity className="w-16 h-16 text-blue-600 mb-4" />
                           <div className="w-40 h-20 relative">
                             <svg viewBox="0 0 160 80" className="w-full h-full">
                               {/* Ultra-fast signal waves */}
                               {[...Array(3)].map((_, i) => (
                                 <motion.path
                                   key={i}
                                   d={`M0,${40 + i * 5} Q40,${20 + i * 5} 80,${40 + i * 5} T160,${40 + i * 5}`}
                                   stroke={i === 0 ? "#3B82F6" : i === 1 ? "#06B6D4" : "#10B981"}
                                   strokeWidth="2"
                                   fill="none"
                                   initial={{ pathLength: 0, opacity: 0 }}
                                   animate={{ 
                                     pathLength: [0, 1, 0], 
                                     opacity: [0, 1, 0] 
                                   }}
                                   transition={{ 
                                     duration: 0.8, 
                                     delay: i * 0.1,
                                     repeat: Infinity,
                                     ease: "easeInOut"
                                   }}
                                 />
                               ))}
                               {/* Speed indicator pulse */}
                               <motion.circle
                                 cx="20"
                                 cy="40"
                                 r="4"
                                 fill="#F59E0B"
                                 animate={{ 
                                   cx: [20, 140],
                                   scale: [1, 0.5, 1]
                                 }}
                                 transition={{ 
                                   duration: 0.3, 
                                   repeat: Infinity,
                                   ease: "linear"
                                 }}
                               />
                             </svg>
                           </div>
                           {/* Microsecond counter */}
                           <div className="flex space-x-2 mt-4">
                             {[...Array(6)].map((_, i) => (
                               <motion.div
                                 key={i}
                                 className="w-1 h-3 bg-blue-400 rounded-full"
                                 animate={{
                                   height: [12, 20, 12],
                                   backgroundColor: ["#93C5FD", "#3B82F6", "#93C5FD"]
                                 }}
                                 transition={{
                                   duration: 0.5,
                                   delay: i * 0.05,
                                   repeat: Infinity
                                 }}
                               />
                             ))}
                           </div>
                         </div>
                         <div className="text-center">
                           <div className="text-2xl font-bold text-blue-600">&lt;100μs</div>
                           <div className="text-sm text-gray-600">Gecikme</div>
                           <div className="flex justify-center items-center space-x-2 mt-2">
                             <span className="text-xs text-gray-500">Real-time</span>
                             <motion.div
                               className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                               animate={{
                                 opacity: [0.5, 1, 0.5],
                                 scale: [1, 1.1, 1]
                               }}
                               transition={{
                                 duration: 1,
                                 repeat: Infinity
                               }}
                             />
                             <span className="text-xs text-gray-500">μs</span>
                           </div>
                         </div>
                       </div>
                     )}
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Process */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">Çalışma Sürecimiz</h2>
              <p className="text-xl text-gray-600">
                Kanıtlanmış metodoloji ile enterprise projelerinizi başarıya ulaştırıyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '', title: 'Analiz', desc: 'Mevcut altyapı ve gereksinimler', icon: Search },
                { step: '', title: 'Tasarım', desc: 'Ölçeklenebilir mimari planlama', icon: Layers },
                { step: '', title: 'Geliştirme', desc: 'Agile metodoloji ile uygulama', icon: Code },
                { step: '', title: 'Destek', desc: 'Sürekli optimizasyon ve bakım', icon: TrendingUp }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-indigo-700" />
                  </div>
                  <div className="text-sm text-indigo-600 font-medium mb-2">{phase.step}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      </main>
    </>
  )
} 
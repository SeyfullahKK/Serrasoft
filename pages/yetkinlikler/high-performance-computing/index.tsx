import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Cpu, 
  Zap, 
  BarChart3, 
  Server, 
  ArrowLeft,
  CheckCircle,
  Activity,
  Database,
  Globe,
  TrendingUp
} from 'lucide-react'

const HighPerformanceComputingPage = () => {
  const technologies = [
    {
      title: 'Parallel Computing Framework',
      description: 'Massively parallel processing ve distributed computing platformu',
      icon: Cpu,
      features: ['MPI/OpenMP', 'CUDA/OpenCL', 'Distributed Memory', 'Task Parallelism']
    },
    {
      title: 'HPC Cluster Management',
      description: 'Supercomputer cluster orchestration ve resource management',
      icon: Server,
      features: ['Job Scheduling', 'Resource Allocation', 'Load Balancing', 'Fault Tolerance']
    },
    {
      title: 'Scientific Computing Suite',
      description: 'Numerical computing ve scientific simulation libraries',
      icon: BarChart3,
      features: ['Linear Algebra', 'FFT Libraries', 'Numerical Solvers', 'Statistical Computing']
    },
    {
      title: 'Big Data Processing',
      description: 'Petabyte-scale data processing ve analytics platformları',
      icon: Database,
      features: ['MapReduce', 'Spark Clusters', 'Distributed Storage', 'Stream Processing']
    }
  ]

  const performanceSpecs = [
    { metric: 'Petaflops', label: 'Computing Power', description: 'Peak performance capability' },
    { metric: '100,000+', label: 'CPU Cores', description: 'Massive parallelization' },
    { metric: '1,000+', label: 'GPU Accelerators', description: 'AI/ML workload acceleration' },
    { metric: '10PB+', label: 'Storage Capacity', description: 'High-performance storage' }
  ]

  const frameworks = [
    'MPI', 'OpenMP', 'CUDA', 'OpenCL', 'Apache Spark', 'Hadoop',
    'TensorFlow', 'PyTorch', 'Dask', 'Ray', 'Horovod', 'Slurm',
    'PBS', 'SGE', 'InfiniBand', 'Lustre', 'GPFS', 'NVMe'
  ]

  const useCases = [
    {
      title: 'Scientific Research',
      description: 'Large-scale scientific simulations ve modeling',
      applications: ['Climate Modeling', 'Molecular Dynamics', 'Astrophysics', 'Genomics'],
      scale: 'Exascale'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Deep learning model training ve inference',
      applications: ['Neural Networks', 'Computer Vision', 'NLP Models', 'Reinforcement Learning'],
      scale: 'GPU Clusters'
    },
    {
      title: 'Financial Modeling',
      description: 'Risk analysis ve quantitative finance',
      applications: ['Monte Carlo Simulation', 'Portfolio Optimization', 'Derivatives Pricing', 'Risk Assessment'],
      scale: 'Real-time'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/yetkinlikler" className="hover:text-serrasoft-primary transition-colors">
              Yetkinlikler
            </Link>
            <span>/</span>
            <span className="text-gray-900">High Performance Computing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pink-600 via-rose-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative">
          <Link href="/yetkinlikler">
            <motion.div
              className="inline-flex items-center gap-2 text-pink-200 hover:text-white transition-colors mb-8 cursor-pointer"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Yetkinliklere Geri Dön</span>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                High Performance Computing
              </h1>
            </div>
            <p className="text-xl text-pink-100 mb-8">
              Supercomputing, parallel processing ve büyük ölçekli hesaplama sistemleri 
              ile en karmaşık computational challengeları petaflops performance ile çözüyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
              >
                HPC Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all border border-white/20"
              >
                Performance Benchmark
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Specs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Supercomputing Specifications</span>
            </h2>
            <p className="text-xl text-gray-600">World-class HPC infrastructure capabilities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-effect rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl font-bold text-pink-600 mb-2">{spec.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{spec.label}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">HPC Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exascale computing için comprehensive platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{tech.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HPC Frameworks */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">HPC Frameworks & Technologies</h2>
            <p className="text-gray-600">Cutting-edge supercomputing frameworks</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {frameworks.map((framework, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {framework}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Computational Applications</span>
            </h2>
            <p className="text-xl text-gray-600">Mission-critical HPC workloads</p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">{useCase.scale}</div>
                    <div className="text-sm text-gray-500">Scale</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {useCase.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-pink-500" />
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">HPC Architecture Components</h2>
            <p className="text-gray-600">Supercomputer system architecture</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Compute Nodes',
                components: ['Multi-core CPUs', 'GPU Accelerators', 'High-speed Memory', 'NVMe Storage'],
                icon: Cpu
              },
              {
                title: 'Interconnect',
                components: ['InfiniBand', 'High-bandwidth Network', 'Low-latency Fabric', 'MPI Communication'],
                icon: Globe
              },
              {
                title: 'Storage System',
                components: ['Parallel File System', 'Lustre/GPFS', 'High-IOPS Storage', 'Data Management'],
                icon: Database
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.components.map((component, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{component}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Petaflops Computing Power Needed?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              En karmaşık computational problemlerinizi supercomputing ile çözelim
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              HPC Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HighPerformanceComputingPage 
import { motion } from 'framer-motion';
import Container from '../components/container'

function ServicesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-start justify-start min-h-screen text-white"
    >
      <Container>
        <motion.h1 
          className="text-6xl font-bold text-yellow-600 text-center"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div 
            className="service-card bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl">Software Development</h2>
            <p>I specialize in creating efficient, scalable, and robust software solutions using modern web technologies like React, Node.js, and Next.js. Whether you need a full-stack application or a simple frontend, I can help.</p>
          </motion.div>
          <motion.div 
            className="service-card bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl">Technical Writing</h2>
            <p>I can provide clear, concise technical documentation, tutorials, and blog posts to help your users or team understand your software product. I have experience writing for both technical and non-technical audiences.</p>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  )
}

export default ServicesPage

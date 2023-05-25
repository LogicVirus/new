import { motion } from 'framer-motion';
import Container from '../components/container'

function ServicesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      <Container>
        <motion.h1 
          className="text-6xl font-bold text-blue-800 text-center"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Services
        </motion.h1>
        <div className="flex flex-col space-y-4 mt-8">
          <motion.div 
            className="service-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-3xl text-blue-800">Software Development</h2>
            <p>I specialize in creating efficient, scalable, and robust software solutions using modern web technologies like React, Node.js, and Next.js. Whether you need a full-stack application or a simple frontend, I can help.</p>
          </motion.div>
          <motion.div 
            className="service-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-3xl text-blue-800">Technical Writing</h2>
            <p>I can provide clear, concise technical documentation, tutorials, and blog posts to help your users or team understand your software product. I have experience writing for both technical and non-technical audiences.</p>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  )
}

export default ServicesPage

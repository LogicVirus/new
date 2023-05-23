import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/people/191854139@N02/";

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [1, 0.5, 1, 0.5, 1],
      transition: { duration: 5, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] },
    }).then(() => {
      controls.start({
        opacity: 1,
        transition: { duration: 2 }
      });
    });
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div className="space-y-6 text-white">
          <motion.h1 
            className="text-3xl font-bold text-yellow-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Welcome to my Log!
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Greetings, explorers! I'm Josh Perry.
          </motion.p>
          <motion.button 
            onClick={() => window.open(twitterLink, "_blank")} 
            className="bg-gradient-to-r from-yellow-300 via-teal-500 to-blue-500 hover:from-yellow-400 hover:via-teal-600 hover:to-blue-600 py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Follow me on Twitter
          </motion.button>
          <motion.button 
            onClick={() => window.open(flickrLink, "_blank")} 
            className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 py-2 px-4 rounded mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={controls}
          >
            Check out my Flickr
          </motion.button>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto mt-20 bg-gray-900">
        <Image
          src="/1.png"
          alt="A nebula signifying the uncharted territories of software development"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </motion.div>
  )
}

export default HomePage

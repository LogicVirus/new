import { motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';
import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/people/191854139@N02/";

  // Define two animations: flicker and fadeOut
  const flicker = { opacity: [1, 0, 1] };
  const fadeOut = { opacity: 0 };

  // Use the useCycle hook to cycle between the flicker and fadeOut animations
  const [animation, cycleAnimation] = useCycle(flicker, fadeOut);

  // Use the useEffect hook to change the animation after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      cycleAnimation();
    }, 3000); // change animation after 3 seconds

    return () => clearTimeout(timer); // clear the timer if the component is unmounted
  }, [cycleAnimation]);

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
            className="bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded"
            animate={animation}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            Check my Flickr
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

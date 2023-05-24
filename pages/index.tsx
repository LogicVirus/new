import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Container from '../components/container'
import Image from 'next/image'
import style from '../styles/Home.module.css'

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/people/191854139@N02/";

  const controlsFlickr = useAnimation();
  const controlsTwitter = useAnimation();
  const controlsName = useAnimation();

  useEffect(() => {
    const sequence = async (controls) => {
      await controls.start({
        opacity: [0.5, 1, 0.5, 1],
        transition: { duration: 6, ease: "easeInOut", times: [0, 0.33, 0.66, 1] },
      });

      controls.start({
        opacity: 1,
        transition: { duration: 2 }
      });
    };

    sequence(controlsFlickr);
    sequence(controlsTwitter);
    controlsName.start({ scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } });
  }, [controlsFlickr, controlsTwitter, controlsName]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div className="space-y-6 text-white text-center">
          <motion.h1 
            className="text-6xl font-bold text-blue-600"
            initial={{ y: -100 }}
            animate={controlsName}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Welcome, I'm Josh Perry!
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Greetings, explorers! Welcome to my Log.
          </motion.p>
          <motion.button 
            onClick={() => window.open(twitterLink, "_blank")} 
            className="twitter-gradient py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={controlsTwitter}
          >
            Follow me on Twitter
          </motion.button>
          <motion.button 
            onClick={() => window.open(flickrLink, "_blank")} 
            className="flickr-gradient py-2 px-4 rounded mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={controlsFlickr}
          >
            Visit my Flickr
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

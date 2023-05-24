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
  }, [controlsFlickr, controlsTwitter]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center h-screen bg-gray-900"
    >
      <Container>
        <div className="space-y-6 text-white text-center">
          <motion.h1 
            className="text-6xl font-bold text-blue-600"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Josh Perry
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Software Developer | Photographer | Explorer
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
            animate={controlsFlickr}
          >
            Visit my Flickr
          </motion.button>
        </div>
      </Container>
    </motion.div>
  )
}

export default HomePage

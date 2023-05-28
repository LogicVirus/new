// HomePage.js
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Container from '../components/container'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react';

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/photos/191854139@N02/";

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
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white bg-gradient-to-r from-purple-500 to-blue-600"
      >
        <Container>
          <motion.h1 
            className="text-6xl font-bold text-blue-800 text-center"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Josh Perry
          </motion.h1>
          <motion.p 
            className="text-2xl text-center text-yellow-600 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Greetings, explorers! Welcome to my space.
          </motion.p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mt-8">
            <motion.a 
              href={twitterLink} 
              target="_blank"
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-white text-blue-500 w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={controlsTwitter}
            >
              Follow me on Twitter
            </motion.a>
            <motion.a 
              href={flickrLink} 
              target="_blank"
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-white text-purple-500 w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={controlsFlickr}
            >
              Explore my Flickr Gallery
            </motion.a>
          </div>
        </Container>

        <div className="container max-w-4xl m-auto mt-15 md:mt-0 md:ml-10">
          <Image
            src="/qwer.png"
            alt="moon"
            width={1920 / 2}
            height={1280 / 2}
          />
        </div>
      </motion.div>
      <Analytics />
    </>
  )
}

export default HomePage

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Container from '../components/container';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import Particles from 'react-particles-js';

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
      <Particles 
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              }
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            move: {
              speed: 0,
            },
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      />
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
          <div className="flex flex-col space-y-4 mt-8">
            <motion.a 
              href={twitterLink} 
              target="_blank"
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={controlsTwitter}
            >
              Follow me on Twitter
            </motion.a>
            <motion.a 
              href={flickrLink} 
              target="_blank"
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={controlsFlickr}
            >
              Explore my Flickr Gallery
            </motion.a>
          </div>
        </Container>

        <div className="container max-w-4xl m-auto mt-15">
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
  );
}

export default HomePage;

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

function HomePage() {
  const twitterLink = "https://twitter.com/joshperry0";
  const flickrLink = "https://www.flickr.com/photos/191854139@N02/";

  const [laserFired, setLaserFired] = useState(false);
  const [warpEngaged, setWarpEngaged] = useState(false);
  const [forceFieldDeployed, setForceFieldDeployed] = useState(false);

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

  const fireLaser = () => {
    setLaserFired(true);
    setTimeout(() => setLaserFired(false), 500);
  };

  const engageWarpDrive = () => {
    setWarpEngaged(true);
    setTimeout(() => setWarpEngaged(false), 1000);
  };

  const deployForceField = () => {
    setForceFieldDeployed(true);
    setTimeout(() => setForceFieldDeployed(false), 2000);
  };

  return (
    <>
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
            Captain Josh Perry
          </motion.h1>
          <motion.p 
            className="text-2xl text-center text-yellow-600 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Greetings, space explorers! Welcome to my spaceship.
          </motion.p>

          <motion.div 
            className="text-2xl text-center text-green-500 mt-6"
            initial={{ opacity: 0 }}
            animate={laserFired ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lasers fired!
          </motion.div>

          <motion.div 
            className="text-2xl text-center text-blue-500 mt-6"
            initial={{ opacity: 0 }}
            animate={warpEngaged ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Engaging warp drive!
          </motion.div>

          <motion.div 
            className="text-2xl text-center text-purple-500 mt-6"
            initial={{ opacity: 0 }}
            animate={forceFieldDeployed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
          >
            Deploying force field!
          </motion.div>

          <div className="flex flex-col space-y-4 mt-8">
            <motion.button 
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={fireLaser}
            >
              Fire Lasers
            </motion.button>

            <motion.button 
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={engageWarpDrive}
            >
              Engage Warp Drive
            </motion.button>

            <motion.button 
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={deployForceField}
            >
              Deploy Force Field
            </motion.button>

            <motion.button 
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-light-blue-500 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={twitterLink}>Visit Twitter</Link>
            </motion.button>

            <motion.button 
              className="py-1 px-2 rounded text-lg flex items-center justify-center bg-gradient-to-r from-purple-500 to-red-500 text-white w-auto px-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={flickrLink}>Visit Flickr</Link>
            </motion.button>
          </div>
        </Container>

        <div className="container max-w-4xl m-auto mt-15 relative">
          <Image
            src="/zxc.png"
            alt="A spaceship exploring the vastness of the universe"
            width={1920 / 2}
            height={1280 / 2}
            className={laserFired ? "laser-effect" : warpEngaged ? "warp-effect" : forceFieldDeployed ? "forcefield-effect" : ""}
          />
        </div>
      </motion.div>
      <Analytics />
    </>
  )
}

export default HomePage

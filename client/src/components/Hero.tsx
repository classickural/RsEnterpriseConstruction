import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/ui/scroll-link";
import { motion } from "framer-motion";

export function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6 + custom * 0.15,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const backgroundVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeOut" 
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: { 
        duration: 1,
        delay: 0.5 
      }
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "60px" }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541955048416-575086281155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-primary" 
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.2, duration: 0.7 }
            }}
          >
            Welcome to
          </motion.span>
          <motion.span 
            className="text-accent"
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                delay: 0.4, 
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }
            }}
          >
            R S ENTERPRISES
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          Reliable Solutions for All Your Building Needs
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            custom={0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink to="contact">
              <Button
                variant="destructive"
                className="px-8 py-6 bg-secondary hover:bg-red-600 text-white font-medium rounded-md shadow-lg flex items-center justify-center h-auto w-full"
              >
                <motion.span 
                  className="mr-2"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
                >
                  📋
                </motion.span> 
                Get a Free Quote
              </Button>
            </ScrollLink>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            custom={1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="default"
              className="px-8 py-6 bg-accent hover:bg-yellow-500 text-primary font-medium rounded-md shadow-lg flex items-center justify-center h-auto w-full"
              onClick={() => window.location.href = "tel:+919750996641"}
            >
              <motion.span 
                className="mr-2"
                animate={{ 
                  rotate: [0, 15, -15, 15, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.7 }}
              >
                📞
              </motion.span> 
              Call Now
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 1.2,
            duration: 0.5 
          }
        }}
      >
        <ScrollLink to="about" className="text-white">
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
}

export default Hero;

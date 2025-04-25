import { motion } from "framer-motion";

export function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-primary z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <motion.div 
        className="relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          R S 
          <motion.span 
            className="text-accent ml-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ENTERPRISES
          </motion.span>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full bg-accent"
              animate={{
                y: [0, -15, 0],
                backgroundColor: ["#F59E0B", "#EF4444", "#F59E0B"]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingAnimation;
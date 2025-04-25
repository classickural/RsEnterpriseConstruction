import { Award, CalendarCheck, Users, HandshakeIcon } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";

export function About() {
  const features = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Quality Excellence",
      description: "Premium materials and workmanship",
    },
    {
      icon: <CalendarCheck className="h-5 w-5 text-primary" />,
      title: "Timely Delivery",
      description: "Projects completed on schedule",
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Expert Team",
      description: "Skilled professionals in every department",
    },
    {
      icon: <HandshakeIcon className="h-5 w-5 text-primary" />,
      title: "Customer Satisfaction",
      description: "Our highest priority",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12 }
    }
  };

  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.8
      }
    }
  };

  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const featureAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + custom * 0.15,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            title="About Us"
            description="Building excellence through quality construction and exceptional service since our establishment."
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl"
            variants={imageAnimation}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="R S Enterprises construction team"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.div variants={textAnimation}>
            <motion.h3 
              className="text-2xl font-heading font-semibold text-primary mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At R S ENTERPRISES, we are committed to delivering high-quality
              construction and interior solutions that exceed our clients'
              expectations. Based in Mayiladuthurai, Tamil Nadu, we've built our
              reputation on trust, expertise, and timely delivery.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  className="flex items-start" 
                  key={index}
                  variants={featureAnimation}
                  custom={index}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="bg-accent rounded-full p-2 mr-3"
                    whileHover={{ 
                      rotate: [0, 10, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

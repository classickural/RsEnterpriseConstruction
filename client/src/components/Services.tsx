import {
  Building,
  HardHat,
  Sofa,
  PackageIcon,
  Paintbrush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import ScrollLink from "@/components/ui/scroll-link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const services = [
  {
    id: "commercial-building",
    title: "Commercial Building Construction",
    description:
      "End-to-end construction services for commercial buildings with attention to quality and timely delivery.",
    icon: <Building className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling Work",
    description:
      "Innovative and aesthetic false ceiling solutions for residential and commercial spaces.",
    icon: <HardHat className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "interior-design",
    title: "Interior Designing & Execution",
    description:
      "Creative and functional interior design services with professional execution.",
    icon: <Sofa className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "acc-blocks",
    title: "Supply of ACC Block Bricks",
    description:
      "High-quality ACC block bricks for sustainable and durable construction projects.",
    icon: <PackageIcon className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1617419250411-98aa962b070f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "paints-hardware",
    title: "Paints & Hardware Materials",
    description:
      "Premium quality paints and hardware materials for construction and renovation projects.",
    icon: <Paintbrush className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };
  
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Services"
            description="Comprehensive solutions for all your construction and interior needs"
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6">
                <motion.div 
                  className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4 -mt-12 ml-4 border-4 border-white shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index * 0.1
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ScrollLink
                  to="contact"
                  className="text-secondary hover:text-red-700 font-medium inline-flex items-center group"
                >
                  Learn More{" "}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 5 }}
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </ScrollLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

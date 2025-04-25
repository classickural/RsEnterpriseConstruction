import {
  Clock,
  UserCheck,
  Award,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Timely Completion",
    description:
      "We understand the importance of deadlines and ensure on-time project delivery.",
  },
  {
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    title: "Experienced Team",
    description:
      "Our skilled professionals bring years of expertise to every project we undertake.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Quality Materials",
    description:
      "We use only the best materials to ensure durability and satisfaction.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Competitive Pricing",
    description:
      "Quality service at reasonable rates without compromising on standards.",
  },
];

const commitments = [
  "Personalized service tailored to your specific needs",
  "Transparent pricing with no hidden costs",
  "Regular progress updates throughout your project",
  "Post-project support and warranty on our work",
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const commitmentListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const commitmentItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            title="Why Choose Us"
            description="What sets R S ENTERPRISES apart from the competition"
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={featureVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{
                type: "spring",
                stiffness: 300
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-heading font-semibold mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-lg mt-12 overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h3 
                className="text-2xl font-heading font-semibold text-primary mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Commitment to Excellence
              </motion.h3>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We approach every project with a commitment to excellence and
                client satisfaction. From the initial consultation to project
                completion, we maintain clear communication and transparency.
              </motion.p>
              <motion.ul 
                className="space-y-3"
                variants={commitmentListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {commitments.map((commitment, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={commitmentItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="text-secondary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span>{commitment}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="bg-cover bg-center h-full min-h-[300px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
              }}
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

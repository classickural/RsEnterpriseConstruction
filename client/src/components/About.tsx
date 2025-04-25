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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Us"
          description="Building excellence through quality construction and exceptional service since our establishment."
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="R S Enterprises construction team"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              At R S ENTERPRISES, we are committed to delivering high-quality
              construction and interior solutions that exceed our clients'
              expectations. Based in Mayiladuthurai, Tamil Nadu, we've built our
              reputation on trust, expertise, and timely delivery.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div className="flex items-start" key={index}>
                  <div className="bg-accent rounded-full p-2 mr-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import {
  Clock,
  UserCheck,
  Award,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

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
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Us"
          description="What sets R S ENTERPRISES apart from the competition"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg mt-12 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                Our Commitment to Excellence
              </h3>
              <p className="text-gray-700 mb-6">
                We approach every project with a commitment to excellence and
                client satisfaction. From the initial consultation to project
                completion, we maintain clear communication and transparency.
              </p>
              <ul className="space-y-3">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-secondary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-cover bg-center h-full min-h-[300px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

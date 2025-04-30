// import { useState } from "react";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { apiRequest } from "@/lib/queryClient";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import SectionHeading from "@/components/ui/section-heading";
// import { services } from "@/lib/constants";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
//   phone: z.string().min(10, { message: "Please enter a valid phone number" }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   service: z.string().optional(),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters" }),
// });

// type FormData = z.infer<typeof formSchema>;

// export function Contact() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       email: "",
//       service: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true);
//     try {
//       await apiRequest("POST", "/api/contact", data);
//       toast({
//         title: "Success!",
//         description: "Your message has been sent. We'll contact you soon.",
//       });
//       form.reset();
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to send your message. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="section-padding bg-white">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           title="Contact Us"
//           description="Reach out to us for a free consultation and estimate for your project"
//         />

//         <div className="grid md:grid-cols-2 gap-10">
//           <div>
//             <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
//               <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
//                 Our Location
//               </h3>

//               <div className="mb-6">
//                 <h4 className="font-heading font-semibold mb-2 flex items-center">
//                   <MapPin className="text-secondary mr-2 h-5 w-5" /> Address
//                 </h4>
//                 <p className="text-gray-700">
//                   RS Garden, Dabeer Street, Dharmapuram Road,
//                   <br />
//                   near Chinna Mariappam Koil, Extension,
//                   <br />
//                   Mayiladuthurai, Tamil Nadu 609001
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <h4 className="font-heading font-semibold mb-2 flex items-center">
//                   <Phone className="text-secondary mr-2 h-5 w-5" /> Phone
//                 </h4>
//                 <p className="text-gray-700">
//                   <a
//                     href="tel:+919750996641"
//                     className="hover:text-secondary"
//                   >
//                     +91 9750996641
//                   </a>
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <h4 className="font-heading font-semibold mb-2 flex items-center">
//                   <Mail className="text-secondary mr-2 h-5 w-5" /> Email
//                 </h4>
//                 <p className="text-gray-700">
//                   <a
//                     href="mailto:info@rsenterprisestn.com"
//                     className="hover:text-secondary"
//                   >
//                     info@rsenterprisestn.com
//                   </a>
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-heading font-semibold mb-2 flex items-center">
//                   <Clock className="text-secondary mr-2 h-5 w-5" /> Business
//                   Hours
//                 </h4>
//                 <p className="text-gray-700">
//                   Monday - Saturday: 9:00 AM - 6:00 PM
//                   <br />
//                   Sunday: Closed
//                 </p>
//               </div>
//             </div>

//             <div className="flex space-x-4">
//               <a
//                 href="https://wa.me/919750996641"
//                 className="flex-1 py-3 bg-green-600 text-white text-center rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 h-5 w-5"
//                   fill="currentColor"
//                   viewBox="0 0 448 512"
//                 >
//                   <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
//                 </svg>
//                 WhatsApp
//               </a>
//               <a
//                 href="tel:+919750996641"
//                 className="flex-1 py-3 bg-accent text-primary text-center rounded-md hover:bg-yellow-500 transition duration-300 flex items-center justify-center"
//               >
//                 <Phone className="mr-2 h-5 w-5" /> Call Now
//               </a>
//             </div>
//           </div>

//           <div>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="bg-gray-50 p-8 rounded-lg shadow-md"
//               >
//                 <div className="grid md:grid-cols-2 gap-5 mb-5">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-medium text-gray-700">
//                           Your Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-medium text-gray-700">
//                           Phone Number
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             type="tel"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem className="mb-5">
//                       <FormLabel className="font-medium text-gray-700">
//                         Email Address
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           type="email"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="service"
//                   render={({ field }) => (
//                     <FormItem className="mb-5">
//                       <FormLabel className="font-medium text-gray-700">
//                         Interested Service
//                       </FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
//                             <SelectValue placeholder="Select a Service" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           {services.map((service) => (
//                             <SelectItem key={service.id} value={service.id}>
//                               {service.name}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem className="mb-5">
//                       <FormLabel className="font-medium text-gray-700">
//                         Your Message
//                       </FormLabel>
//                       <FormControl>
//                         <Textarea
//                           {...field}
//                           rows={4}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full py-3 bg-secondary text-white font-medium rounded-md transition duration-300 hover:bg-red-600"
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="mr-2 h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                         />
//                       </svg>
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </div>

//         <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31252.89067723628!2d79.6390945!3d11.1041771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a2a1ce40f3eb%3A0xa01d2fd0af6a4b4a!2sMayiladuthurai%2C%20Tamil%20Nadu%20609001!5e0!3m2!1sen!2sin!4v1693557082826!5m2!1sen!2sin"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen={false}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="R S ENTERPRISES Location"
//             className="h-96 w-full"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;






import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { services } from "@/lib/constants";

// Initialize EmailJS once when the app starts
// Make sure to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_enoir6c";
const EMAILJS_TEMPLATE_ID = "template_uz4bscq";
const EMAILJS_PUBLIC_KEY = "4m5N1HNppw43Fq5zk";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Get the service name from the service ID
      const serviceName = services.find(s => s.id === data.service)?.name || "Not specified";
      
      // Format the current date
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      // Prepare the email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        service: serviceName,
        message: data.message,
        date: currentDate,
        to_name: "RS Enterprises", // The recipient name
      };

      // Send the email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll contact you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact Us"
          description="Reach out to us for a free consultation and estimate for your project"
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Our Location
              </h3>

              <div className="mb-6">
                <h4 className="font-heading font-semibold mb-2 flex items-center">
                  <MapPin className="text-secondary mr-2 h-5 w-5" /> Address
                </h4>
                <p className="text-gray-700">
                  RS Garden, Dabeer Street, Dharmapuram Road,
                  <br />
                  near Chinna Mariappam Koil, Extension,
                  <br />
                  Mayiladuthurai, Tamil Nadu 609001
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-heading font-semibold mb-2 flex items-center">
                  <Phone className="text-secondary mr-2 h-5 w-5" /> Phone
                </h4>
                <p className="text-gray-700">
                  <a
                    href="tel:+919750996641"
                    className="hover:text-secondary"
                  >
                    +91 9750996641
                  </a>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-heading font-semibold mb-2 flex items-center">
                  <Mail className="text-secondary mr-2 h-5 w-5" /> Email
                </h4>
                <p className="text-gray-700">
                  <a
                    href="mailto:info@rsenterprisestn.com"
                    className="hover:text-secondary"
                  >
                    info@rsenterprisestn.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-2 flex items-center">
                  <Clock className="text-secondary mr-2 h-5 w-5" /> Business
                  Hours
                </h4>
                <p className="text-gray-700">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/919750996641"
                className="flex-1 py-3 bg-green-600 text-white text-center rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+919750996641"
                className="flex-1 py-3 bg-accent text-primary text-center rounded-md hover:bg-yellow-500 transition duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </div>
          </div>

          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gray-700">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gray-700">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <FormLabel className="font-medium text-gray-700">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <FormLabel className="font-medium text-gray-700">
                        Interested Service
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-5">
                      <FormLabel className="font-medium text-gray-700">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-secondary text-white font-medium rounded-md transition duration-300 hover:bg-red-600"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31252.89067723628!2d79.6390945!3d11.1041771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a2a1ce40f3eb%3A0xa01d2fd0af6a4b4a!2sMayiladuthurai%2C%20Tamil%20Nadu%20609001!5e0!3m2!1sen!2sin!4v1693557082826!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="R S ENTERPRISES Location"
            className="h-96 w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
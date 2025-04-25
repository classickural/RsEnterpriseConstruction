import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import ScrollLink from "@/components/ui/scroll-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              R S ENTERPRISES
            </h3>
            <p className="mb-4 text-gray-300">
              Trusted providers of construction and interior solutions in
              Mayiladuthurai and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-accent hover:text-primary transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-accent hover:text-primary transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-accent hover:text-primary transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-accent hover:text-primary transition duration-300"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  className="text-gray-300 hover:text-accent transition duration-300"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  className="text-gray-300 hover:text-accent transition duration-300"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  className="text-gray-300 hover:text-accent transition duration-300"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  className="text-gray-300 hover:text-accent transition duration-300"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  className="text-gray-300 hover:text-accent transition duration-300"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mt-1 mr-3 text-accent h-5 w-5 flex-shrink-0" />
                <span className="text-gray-300">
                  RS Garden, Dabeer Street, Dharmapuram Road, Mayiladuthurai,
                  Tamil Nadu 609001
                </span>
              </li>
              <li className="flex">
                <Phone className="mt-1 mr-3 text-accent h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-white"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex">
                <Mail className="mt-1 mr-3 text-accent h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@rsenterprisestn.com"
                  className="text-gray-300 hover:text-white"
                >
                  info@rsenterprisestn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} R S ENTERPRISES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

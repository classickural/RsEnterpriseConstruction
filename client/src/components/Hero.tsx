import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/ui/scroll-link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "60px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541955048416-575086281155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
          <span className="block">Welcome to</span>
          <span className="text-accent">R S ENTERPRISES</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
          Reliable Solutions for All Your Building Needs
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <ScrollLink to="contact">
            <Button
              variant="destructive"
              className="px-8 py-6 bg-secondary hover:bg-red-600 text-white font-medium rounded-md transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center h-auto"
            >
              <span className="mr-2">📋</span> Get a Free Quote
            </Button>
          </ScrollLink>
          <Button
            variant="default"
            className="px-8 py-6 bg-accent hover:bg-yellow-500 text-primary font-medium rounded-md transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center h-auto"
            onClick={() => window.location.href = "tel:+919876543210"}
          >
            <span className="mr-2">📞</span> Call Now
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <ScrollLink to="about" className="text-white animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;

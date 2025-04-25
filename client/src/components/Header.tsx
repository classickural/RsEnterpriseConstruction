import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import ScrollLink from "@/components/ui/scroll-link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(100);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header
      id="header"
      className={cn(
        "fixed w-full bg-white z-50 transition-all duration-300",
        scrolled ? "shadow-lg py-2" : "shadow-md py-3"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-heading font-bold text-primary m-0">
            <span className="text-secondary">R S</span> ENTERPRISES
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ScrollLink
            to="home"
            className="nav-link text-primary hover:text-secondary font-medium"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="nav-link text-primary hover:text-secondary font-medium"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="services"
            className="nav-link text-primary hover:text-secondary font-medium"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="gallery"
            className="nav-link text-primary hover:text-secondary font-medium"
          >
            Gallery
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="nav-link text-primary hover:text-secondary font-medium"
          >
            Contact
          </ScrollLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={cn(
          "bg-white px-4 pt-2 pb-4 md:hidden transition-all duration-300",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-3">
          <ScrollLink
            to="home"
            className="text-primary hover:text-secondary py-2 font-medium"
            onClick={closeMobileMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="text-primary hover:text-secondary py-2 font-medium"
            onClick={closeMobileMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="services"
            className="text-primary hover:text-secondary py-2 font-medium"
            onClick={closeMobileMenu}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="gallery"
            className="text-primary hover:text-secondary py-2 font-medium"
            onClick={closeMobileMenu}
          >
            Gallery
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="text-primary hover:text-secondary py-2 font-medium"
            onClick={closeMobileMenu}
          >
            Contact
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import Lightbox from "@/components/ui/lightbox";
import ScrollLink from "@/components/ui/scroll-link";

const projects = [
  {
    id: 1,
    title: "Modern Office Building",
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxurious False Ceiling",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Modern Kitchen Interior",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Office Space Design",
    image:
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Building Exterior",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Construction Materials",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    image: string;
    title: string;
  } | null>(null);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Projects"
          description="Take a look at some of our recent projects and achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="gallery-item overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="gallery-img w-full cursor-pointer"
                onClick={() => openLightbox(project)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <ScrollLink to="contact">
            <Button className="inline-block px-8 py-3 bg-secondary text-white font-medium rounded-md transition duration-300 hover:bg-red-600 transform hover:scale-105 shadow-md">
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
              Inquire About Your Project
            </Button>
          </ScrollLink>
        </div>
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

export default Gallery;

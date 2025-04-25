import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  image: string;
  title: string;
  onClose: () => void;
}

export function Lightbox({ image, title, onClose }: LightboxProps) {
  // Disable body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close lightbox on ESC key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative max-w-4xl mx-auto">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70 rounded-full"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <img
          src={image}
          alt={title}
          className="max-h-[80vh] max-w-full object-contain"
        />
        <div className="absolute left-0 right-0 bottom-0 p-4 bg-black bg-opacity-70 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;

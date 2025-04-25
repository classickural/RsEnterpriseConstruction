import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  offset?: number;
  children: React.ReactNode;
}

const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ to, children, className, offset = 0, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      
      const targetId = to;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = offset || 80; // Default offset for header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      
      // Execute any additional onClick handler passed to the component
      if (props.onClick) {
        props.onClick(e);
      }
    };
    
    return (
      <a
        href={`#${to}`}
        onClick={handleClick}
        className={cn(className)}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ScrollLink.displayName = "ScrollLink";

export default ScrollLink;

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  description,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
        {title}
      </h2>
      <div className={cn("w-20 h-1 bg-secondary mb-6", centered && "mx-auto")}></div>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;

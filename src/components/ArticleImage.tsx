import React, { useState } from "react";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "full";
}

export default function ArticleImage({
  src,
  alt,
  caption,
  className = "",
  size = "large",
}: ArticleImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    full: "w-full",
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <figure className={`mx-auto my-8 ${className}`}>
        <div className={`${sizeClasses[size]} mx-auto`}>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-md border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity duration-200"
            loading="lazy"
            onClick={openLightbox}
          />
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-muted-foreground px-4">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Lightbox image */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

            {/* Caption in lightbox */}
            {caption && (
              <div className="absolute -bottom-16 left-0 right-0 text-center text-white text-sm">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export type { ArticleImageProps };

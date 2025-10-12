import React from "react";

interface LifeActivity {
  id: string;
  image: string;
  alt: string;
  description: string;
}

interface PrivateLifeProps {
  activities: LifeActivity[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PrivateLife({
  activities,
  title,
  subtitle,
  className,
}: PrivateLifeProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-8 ${className || ""}`}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={activity.image}
              alt={activity.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback for missing images
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback =
                  target.parentElement?.querySelector(".fallback");
                if (fallback) {
                  (fallback as HTMLElement).classList.remove("hidden");
                }
              }}
            />

            {/* Curtain Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Curtain Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Description Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Fallback for missing images */}
            <div className="fallback absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 hidden">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <div className="text-xs">{activity.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { LifeActivity, PrivateLifeProps };

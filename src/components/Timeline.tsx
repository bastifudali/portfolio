import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TimelineItem {
  id: string;
  overline?: string;
  title: string;
  description?: string;
  date?: string;
  company?: string;
  company_logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Timeline({
  items,
  title,
  subtitle,
  className,
}: TimelineProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-8 ${className || ""}`}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-accent">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <div className="relative">
        {/* Vertical timeline line - centered on desktop, left on mobile */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>

        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-start mb-8 md:-mb-16"
          >
            {/* Timeline dot - left on mobile, centered on desktop */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-400 rounded-full z-10 mt-6"></div>

            {/* Dashed line connecting dot to card */}
            <div
              className={`absolute top-6 mt-2 h-0.5 border-t-2 border-dashed border-gray-300 z-0 ${
                // Mobile: always go right from left dot
                // Desktop: alternate left/right from center dot
                index % 2 === 0
                  ? "left-4 ml-2 w-16 md:left-auto md:right-1/2 md:mr-2 md:w-1/3 md:ml-0" // Mobile: shorter line, Desktop: left
                  : "left-4 ml-2 w-16 md:left-1/2 md:ml-2 md:w-1/3" // Mobile: shorter line, Desktop: right
              }`}
            ></div>

            {/* Card positioned - all right on mobile, alternating on desktop */}
            <div
              className={`w-full 5 ml-8 pl-4 z-20 relative md:w-5/12 ${
                index % 2 === 0
                  ? "md:pr-8 md:pl-0 md:ml-0"
                  : "md:ml-auto md:pl-8"
              }`}
            >
              <Card className="pointer-events-none">
                <CardHeader className="pb-2">
                  {item.overline && (
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.overline}
                    </p>
                  )}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  {item.company && (
                    <div className="flex items-center gap-2 mt-1">
                      {item.company_logo && (
                        <img
                          src={item.company_logo}
                          alt={`${item.company} logo`}
                          className="w-6 h-6 object-contain rounded-full"
                        />
                      )}
                      <p className="text-base font-medium text-foreground">
                        {item.company}
                      </p>
                    </div>
                  )}
                  {item.date && (
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  )}
                </CardHeader>
                {item.description && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

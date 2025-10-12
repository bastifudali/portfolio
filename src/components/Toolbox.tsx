import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

interface Tool {
  id: string;
  name: string;
  usage: string;
  logo: string;
  alt: string;
}

interface ToolboxProps {
  tools: Tool[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Toolbox({
  tools,
  title,
  subtitle,
  className,
}: ToolboxProps) {
  return (
    <TooltipProvider>
      <div className={`w-full md:w-md mx-auto py-8 ${className || ""}`}>
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-accent">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
        )}

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {tools.map((tool) => (
            <Tooltip key={tool.id}>
              <TooltipTrigger asChild>
                <div className="group transition-transform duration-200 hover:scale-110">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center p-2 group-hover:shadow-lg transition-shadow duration-200">
                    <img
                      src={tool.logo}
                      alt={tool.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback for missing images - show first letter of tool name
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.parentElement?.querySelector(".fallback");
                        if (fallback) {
                          (fallback as HTMLElement).style.display = "flex";
                        }
                      }}
                    />
                    <div className="fallback w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-600 font-semibold text-lg hidden">
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="text-center bg-gray-900 text-white border border-gray-600"
              >
                <div>
                  <div className="font-medium">{tool.name}</div>
                  <div className="text-xs opacity-90">{tool.usage}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

export type { Tool, ToolboxProps };

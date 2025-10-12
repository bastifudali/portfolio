import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  slug: string;
  data: {
    topic: string;
    title: string;
    company: string;
    company_logo: string;
    date: string;
    tags: string[];
  };
}

interface Tag {
  id: string;
  label: string;
}

interface Props {
  caseStudies: CaseStudy[];
  tags: Tag[];
  title?: string;
  subtitle?: string;
}

export default function CaseStudyList({
  caseStudies,
  tags,
  title,
  subtitle,
  className = "",
}: Props & { className?: string }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = selectedTag
    ? caseStudies.filter((study) => study.data.tags.includes(selectedTag))
    : caseStudies;

  return (
    <div className={className}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {tags.map((tag) => (
          <Button
            key={tag.id}
            variant={selectedTag === tag.id ? "default" : "outline"}
            onClick={() =>
              setSelectedTag(selectedTag === tag.id ? null : tag.id)
            }
          >
            {tag.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered
          .slice()
          .sort(
            (a, b) =>
              new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
          )
          .map((study) => (
            <a
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="block h-full"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{study.data.topic}</CardTitle>
                  <CardDescription>{study.data.title}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={study.data.company_logo}
                      alt={`${study.data.company} logo`}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>
                      {study.data.company}, {study.data.date.slice(0, 7)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors">
                    <span>View</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
      </div>
    </div>
  );
}

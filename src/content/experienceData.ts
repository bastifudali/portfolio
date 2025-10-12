export interface TimelineItem {
  id: string;
  overline?: string;
  title: string;
  description?: string;
  date?: string;
  company?: string;
  company_logo?: string;
}

// Professional experience data based on LinkedIn resume
export const experienceData: TimelineItem[] = [
  {
    id: "blinkist-2024",
    overline: "Dec 2024 – Present",
    title: "Senior Product & Design Operations Specialist",
    company: "Blinkist",
    company_logo: "/blinkist-logo.png",
    description:
      "Streamlining product, design, and research practices and automating workflows",
  },
  {
    id: "go1-2024",
    overline: "Feb 2024 – Nov 2024",
    title: "Senior Design Operations Specialist",
    company: "Go1",
    company_logo: "/go1-logo.png",
    description: "Driving the development of Go1's new design system",
  },
  {
    id: "chefkoch-head-2021",
    overline: "Mar 2022 – Jan 2024",
    title: "Head of UX/UI",
    company: "Chefkoch",
    company_logo: "/chefkoch-logo.png",
    description: "Leading a team of nine UX and UI Designers",
  },
  {
    id: "chefkoch-2020",
    overline: "Feb 2018 – Feb 2021",
    title: "(Senior) UX Designer",
    company: "Chefkoch",
    company_logo: "/chefkoch-logo.png",
    description:
      "Designing the experience for over 5 million monthly app users",
  },
  {
    id: "uni-siegen-ms",
    overline: "Oct 2014 – Sept 2017",
    title: "Master of Science - Human Computer Interaction",
    company: "University of Siegen",
    company_logo: "/uni-siegen-logo.png",
    description:
      "Interaction techniques, interface design, user-centered processes, and usability standards",
  },
  {
    id: "uni-siegen-bs",
    overline: "Oct 2010 – Sept 2014",
    title: "Bachelor of Science - Business Informatics",
    company: "University of Siegen",
    company_logo: "/uni-siegen-logo.png",
    description:
      "Business applications, software engineering, and database systems",
  },
];

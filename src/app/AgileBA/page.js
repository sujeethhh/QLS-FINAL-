import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Agile Business Analysis Training | QLS",
  description:
    "Master Agile Business Analysis techniques. Learn how to deliver value in Agile environments through effective stakeholder collaboration, backlog management, and adaptive requirements.",
  keywords:
    "Agile Business Analysis training, Agile BA certification, Agile requirements, backlog management, Scrum business analyst",
  openGraph: {
    title: "Agile Business Analysis Certification | QLS",
    description:
      "Develop Business Analysis skills tailored for Agile and Scrum environments",
    images: ["/agile-ba.jpg"],
  },
};

const courseData = {
  title: "Agile Business Analysis",
  subtitle:
    "Deliver value through adaptive analysis in Agile and Scrum environments",
  backgroundImage: "/agile-ba.jpg",

  overview: [
    "Agile Business Analysis focuses on applying business analysis practices within Agile frameworks such as Scrum and Kanban.",
    "This course helps professionals adapt traditional BA techniques to iterative development, continuous feedback, and value-driven delivery.",
    "Participants will learn how to collaborate closely with Product Owners and Agile teams to refine backlogs, prioritize requirements, and ensure continuous value realization."
  ],

  courseOutline: [
    "Introduction to Agile principles and values",
    "Role of the Business Analyst in Agile teams",
    "Stakeholder collaboration in Agile",
    "User stories and acceptance criteria",
    "Backlog refinement and prioritization",
    "Agile modeling techniques",
    "Continuous feedback and validation",
    "Measuring value and incremental delivery"
  ],

  learningObjectives: [
    "Understand Agile frameworks and practices",
    "Adapt business analysis techniques for Agile environments",
    "Write effective user stories and acceptance criteria",
    "Collaborate effectively with Product Owners and teams",
    "Prioritize and manage Agile backlogs",
    "Support incremental and iterative delivery",
    "Measure and validate delivered business value"
  ],

  targetGroup: [
    "Business Analysts working in Agile teams",
    "Product Owners",
    "Scrum Masters",
    "Agile Project Managers",
    "Professionals transitioning to Agile environments"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "Business Analysis & Agile",
  tagline: "Adapt. Collaborate. Deliver Value.",

  relatedCourses: [
    {
      title: "Business Analysis Practice",
      image: "/business-analysis.jpg",
      description: "Develop structured business analysis skills",
      href: "/business-analysis-practice",
      duration: "2 Days",
      level: "Professional",
      badge: "BA",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Professional Scrum Product Owner™ I",
      image: "/scrum.jpg",
      description: "Master product ownership in Agile teams",
      href: "/professional-scrum-product-owner",
      duration: "2 Days",
      level: "Foundation",
      badge: "Scrum",
      badgeColor: "bg-green-600"
    },
    {
      title: "SAFe® for Teams",
      image: "/safe.jpg",
      description: "Apply Agile at scale in enterprise environments",
      href: "/safe-for-teams",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe®",
      badgeColor: "bg-red-600"
    }
  ]
};

export default function AgileBusinessAnalysisPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

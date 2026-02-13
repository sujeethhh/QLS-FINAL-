import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Business Analysis Practice Training | QLS",
  description:
    "Master Business Analysis Practice. Learn stakeholder analysis, requirements engineering, business case development, and solution evaluation techniques.",
  keywords:
    "Business Analysis Practice training, business analyst certification, requirements gathering, stakeholder management, business case development",
  openGraph: {
    title: "Business Analysis Practice Certification | QLS",
    description:
      "Develop practical business analysis skills to define requirements and deliver business value",
    images: ["/business-analysis.jpg"],
  },
};

const courseData = {
  title: "Business Analysis Practice",
  subtitle:
    "Develop practical skills to analyze business needs and deliver effective solutions",
  backgroundImage: "/business-analysis.jpg",

  overview: [
    "Business Analysis Practice equips professionals with practical techniques to identify business needs, define requirements, and recommend effective solutions.",
    "This course focuses on stakeholder analysis, requirements elicitation, modeling techniques, business case development, and solution evaluation.",
    "Participants will gain hands-on knowledge to bridge the gap between business objectives and technology solutions while ensuring value-driven outcomes."
  ],

  courseOutline: [
    "Role and responsibilities of a Business Analyst",
    "Stakeholder identification and analysis",
    "Requirements elicitation techniques",
    "Requirements documentation and modeling",
    "Business process modeling",
    "Gap analysis and solution assessment",
    "Business case development",
    "Benefits realization and solution evaluation"
  ],

  learningObjectives: [
    "Understand core business analysis principles",
    "Identify and manage stakeholders effectively",
    "Elicit and document clear business requirements",
    "Apply modeling techniques to analyze processes",
    "Develop strong business cases",
    "Evaluate and validate proposed solutions",
    "Ensure alignment between business goals and solutions"
  ],

  targetGroup: [
    "Business Analysts",
    "Project Managers",
    "Product Owners",
    "Change Managers",
    "Professionals transitioning into business analysis roles"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "Business Analysis & Change Management",
  tagline: "Analyze. Define. Deliver Value.",

  relatedCourses: [
    {
      title: "Business Analysis Foundation",
      image: "/business-analysis.jpg",
      description: "Learn core business analysis fundamentals",
      href: "/business-analysis-foundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "BA",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Agile Business Analysis",
      image: "/scrum.jpg",
      description: "Apply business analysis in Agile environments",
      href: "/agile-business-analysis",
      duration: "2 Days",
      level: "Professional",
      badge: "Agile",
      badgeColor: "bg-green-600"
    },
    {
      title: "Change Management",
      image: "/change.jpg",
      description: "Manage organizational change effectively",
      href: "/change-management",
      duration: "2 Days",
      level: "Professional",
      badge: "Change",
      badgeColor: "bg-purple-600"
    }
  ]
};

export default function BusinessAnalysisPracticePage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

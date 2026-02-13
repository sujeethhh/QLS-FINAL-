import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Product Owner™ II (PSPO II) Training | QLS",
  description:
    "Advance your Product Ownership expertise with Professional Scrum Product Owner™ II (PSPO II). Strengthen stakeholder management, product strategy, and value-driven delivery skills.",
  keywords:
    "PSPO II, Professional Scrum Product Owner 2, advanced Product Owner certification, Scrum Product Owner training, Agile product strategy",
  openGraph: {
    title: "Professional Scrum Product Owner™ II (PSPO II) Certification | QLS",
    description:
      "Enhance advanced Product Ownership skills and maximize product value delivery",
    images: ["/scrum.jpg"],
  },
};

const courseData = {
  title: "Professional Scrum Product Owner™ II (PSPO II)",
  subtitle:
    "Master advanced Product Ownership and value-driven product strategy",
  backgroundImage: "/scrum.jpg",

  overview: [
    "Professional Scrum Product Owner™ II (PSPO II) is an advanced course designed for experienced Product Owners who want to deepen their understanding of product strategy, stakeholder collaboration, and value maximization.",
    "This course focuses on advanced Product Backlog management, forecasting and release planning, stakeholder communication, and aligning product initiatives with business goals.",
    "Participants will strengthen their ability to make evidence-based decisions, manage complex product ecosystems, and drive measurable business outcomes."
  ],

  courseOutline: [
    "Advanced Product Ownership principles",
    "Product vision and strategy alignment",
    "Value-driven Product Backlog management",
    "Stakeholder engagement and communication",
    "Forecasting and release planning",
    "Measuring value and outcomes",
    "Managing complexity in product ecosystems",
    "Scaling Product Ownership practices"
  ],

  learningObjectives: [
    "Develop advanced product strategy skills",
    "Align product initiatives with business objectives",
    "Optimize Product Backlog for maximum value",
    "Enhance stakeholder collaboration",
    "Apply evidence-based product management",
    "Forecast delivery effectively",
    "Measure and improve product outcomes"
  ],

  targetGroup: [
    "Experienced Product Owners",
    "Product Managers",
    "Business Analysts in Agile environments",
    "Agile Coaches",
    "Professionals who have passed PSPO I"
  ],

  examDetails: [
    "Duration: 90 minutes",
    "30 multiple choice questions",
    "Passing score: 85%",
    "Online, open book examination",
    "Certification issued by Scrum.org"
  ],

  category: "Agile & Scrum",
  tagline: "Strategize. Prioritize. Maximize Value.",

  relatedCourses: [
    {
      title: "Professional Scrum Product Owner™ I (PSPO I)",
      image: "/scrum.jpg",
      description: "Foundational Product Owner certification",
      href: "/professional-scrum-product-owner",
      duration: "2 Days",
      level: "Foundation",
      badge: "Scrum",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Professional Scrum Master™ II (PSM II)",
      image: "/scrum.jpg",
      description: "Advanced Scrum Master leadership skills",
      href: "/professional-scrum-master-2",
      duration: "2 Days",
      level: "Advanced",
      badge: "Scrum",
      badgeColor: "bg-blue-600"
    },
    {
      title: "SAFe® Product Owner / Product Manager",
      image: "/safe.jpg",
      description: "Product Ownership within scaled Agile environments",
      href: "/safe-product-owner-product-manager",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe®",
      badgeColor: "bg-red-600"
    }
  ]
};

export default function ProfessionalScrumProductOwner2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Professional Scrum Master™ II (PSM II) Training | QLS",
  description:
    "Advance your Scrum Master expertise with Professional Scrum Master™ II (PSM II). Strengthen leadership, facilitation, and coaching skills for complex Agile environments.",
  keywords:
    "PSM II, Professional Scrum Master 2, Scrum Master advanced certification, Agile leadership, Scrum.org PSM2",
  openGraph: {
    title: "Professional Scrum Master™ II (PSM II) Certification | QLS",
    description:
      "Enhance your Scrum Master capabilities with advanced Scrum leadership and Agile coaching skills",
    images: ["/scrum.jpg"],
  },
};

const courseData = {
  title: "Professional Scrum Master™ II (PSM II)",
  subtitle:
    "Strengthen advanced Scrum Master skills for complex Agile environments",
  backgroundImage: "/scrum.jpg",

  overview: [
    "Professional Scrum Master™ II (PSM II) is an advanced Scrum Master certification designed for experienced Scrum practitioners who want to deepen their understanding of Scrum principles and servant leadership.",
    "This course focuses on advanced facilitation, coaching techniques, stakeholder management, and guiding teams through organizational challenges.",
    "Participants will enhance their ability to support Product Owners, improve team effectiveness, and drive continuous improvement across Agile teams."
  ],

  courseOutline: [
    "Advanced Scrum theory and principles",
    "The Scrum Master as a servant leader",
    "Coaching and mentoring Agile teams",
    "Facilitation and conflict management",
    "Scaling Scrum and working in complex environments",
    "Stakeholder collaboration and engagement",
    "Supporting Product Owners effectively",
    "Continuous improvement and metrics"
  ],

  learningObjectives: [
    "Deepen understanding of Scrum principles",
    "Strengthen servant leadership capabilities",
    "Apply advanced coaching techniques",
    "Facilitate challenging team discussions",
    "Handle stakeholder dynamics effectively",
    "Support scaling Scrum initiatives",
    "Improve team performance and agility"
  ],

  targetGroup: [
    "Experienced Scrum Masters",
    "Agile Coaches",
    "Team Facilitators",
    "Project Managers transitioning to Agile",
    "Professionals who have passed PSM I"
  ],

  examDetails: [
    "Duration: 90 minutes",
    "30 multiple choice questions",
    "Passing score: 85%",
    "Online, open book examination",
    "Certification issued by Scrum.org"
  ],

  category: "Agile & Scrum",
  tagline: "Lead. Coach. Elevate.",

  relatedCourses: [
    {
      title: "Professional Scrum Master™ I (PSM I)",
      image: "/scrum.jpg",
      description: "Foundational Scrum Master certification",
      href: "/professional-scrum-master-1",
      duration: "2 Days",
      level: "Foundation",
      badge: "Scrum",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Professional Scrum Product Owner™ (PSPO)",
      image: "/scrum.jpg",
      description: "Master product ownership and value delivery",
      href: "/professional-scrum-product-owner",
      duration: "2 Days",
      level: "Professional",
      badge: "Scrum",
      badgeColor: "bg-blue-600"
    },
    {
      title: "SAFe® Advanced Scrum Master",
      image: "/safe.jpg",
      description: "Scale Scrum practices in enterprise environments",
      href: "/safe-advanced-scrum-master",
      duration: "2 Days",
      level: "Advanced",
      badge: "SAFe®",
      badgeColor: "bg-red-600"
    }
  ]
};

export default function ProfessionalScrumMaster2Page() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

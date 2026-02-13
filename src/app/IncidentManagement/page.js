import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Incident Management Training | IT Service Management | Edura",
  description:
    "Master Incident Management best practices. Learn to restore services quickly, reduce business impact, and improve IT operational efficiency.",
  keywords:
    "Incident Management training, ITSM incident management, IT service restoration, service desk, IT operations",
  openGraph: {
    title: "Incident Management Training",
    description:
      "Learn structured incident management practices to restore IT services quickly and efficiently",
    images: ["/itl4.jpg"],
  },
};

const courseData = {
  title: "Incident Management",
  subtitle:
    "Restore services quickly and minimize business impact through structured incident handling",
  backgroundImage: "/hero2.jpg",

  overview: [
    "Incident Management focuses on restoring normal service operation as quickly as possible while minimizing impact on business operations.",
    "This course provides practical knowledge of incident lifecycle management, prioritization models, escalation procedures, and communication strategies.",
    "Participants will learn how to improve response times, reduce downtime, and enhance overall service reliability through structured incident management practices."
  ],

  courseOutline: [
    "Introduction to Incident Management principles",
    "Incident lifecycle and workflows",
    "Incident categorization and prioritization",
    "Major incident management process",
    "Escalation models and communication",
    "Incident logging and documentation standards",
    "Integration with problem management",
    "Incident reporting and performance metrics"
  ],

  learningObjectives: [
    "Understand the objectives of Incident Management",
    "Implement structured incident lifecycle processes",
    "Apply prioritization and escalation models",
    "Manage major incidents effectively",
    "Improve service restoration times",
    "Integrate incident and problem management practices",
    "Measure and improve incident performance"
  ],

  targetGroup: [
    "Service desk analysts",
    "IT support engineers",
    "Operations managers",
    "Incident managers",
    "IT Service Management professionals"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "IT Service Management",
  tagline: "Respond. Restore. Resolve.",

  relatedCourses: [
    {
      title: "Service Desk",
      image: "/serviceDesk.jpg",
      description: "Build strong IT support and customer handling skills",
      href: "/ServiceDesk",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Monitor Support Fulfil",
      image: "/itl4.jpg",
      description: "Strengthen monitoring and support operations",
      href: "/MonitorSupportFulfil",
      duration: "3 Days",
      level: "Professional",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    },
    {
      title: "ITIL® 4 Foundation",
      image: "/itl4.jpg",
      description: "Master IT Service Management fundamentals",
      href: "/ITL4Management",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    }
  ]
};

export default function IncidentManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

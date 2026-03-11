import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Incident Management Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Incident Management certification training in Hyderabad. QuickLearn Systems offers expert-led training covering service restoration, business impact reduction, and IT operational efficiency. Enroll today!",
  keywords:
    "Incident Management training Hyderabad, ITSM incident management certification Hyderabad, best ITSM training institute Hyderabad, incident management course Hyderabad, IT incident management training India, Incident Management training, ITSM incident management, IT service restoration, service desk, IT operations, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Incident Management Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led Incident Management certification training in Hyderabad by QuickLearn Systems",
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
      badgeColor: "bg-[#3B82F6]"
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

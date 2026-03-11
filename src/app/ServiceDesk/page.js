import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Service Desk Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master Service Desk operations with expert-led certification training in Hyderabad. QuickLearn Systems offers Service Desk training covering incident handling, request management, and service excellence. Enroll today!",
  keywords:
    "Service Desk training Hyderabad, IT support training Hyderabad, best ITSM training institute Hyderabad, service desk course Hyderabad, IT service desk training India, Service Desk training, IT support training, service desk operations, incident management, request fulfilment, ITSM, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "Service Desk Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led Service Desk certification training in Hyderabad by QuickLearn Systems",
    images: ["/serviceDesk.jpg"],
  },
};

const courseData = {
  title: "Service Desk",
  subtitle:
    "Build strong IT support capabilities and deliver exceptional user experience",
  backgroundImage: "/Service_Desk.jpg",

  overview: [
    "The Service Desk course focuses on developing professional IT support capabilities that ensure consistent, reliable and user-focused service delivery.",
    "Participants will learn how to manage incidents, fulfil service requests, communicate effectively with users, and maintain service quality standards in operational environments.",
    "This course combines process knowledge, practical tools, and communication skills to help service desk professionals improve response times, enhance user satisfaction, and support business continuity."
  ],

  courseOutline: [
    "Introduction to Service Desk functions and responsibilities",
    "Incident management process and workflows",
    "Service request management",
    "User communication and customer service skills",
    "Ticketing systems and documentation best practices",
    "Escalation procedures and prioritization",
    "Service level agreements (SLAs)",
    "Performance measurement and reporting"
  ],

  learningObjectives: [
    "Understand the role and structure of a Service Desk",
    "Handle incidents effectively using structured processes",
    "Manage service requests efficiently",
    "Improve communication and customer handling skills",
    "Apply SLA and KPI tracking methods",
    "Use ticketing tools effectively",
    "Contribute to continuous service improvement"
  ],

  targetGroup: [
    "Service desk analysts",
    "IT support technicians",
    "Helpdesk professionals",
    "IT operations staff",
    "Entry-level IT service management professionals"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "IT Service Management",
  tagline: "Support. Resolve. Satisfy.",

  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/itl4.jpg",
      description: "Learn the fundamentals of IT Service Management",
      href: "/ITL4Management",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "Monitor Support Fulfil",
      image: "/itl4.jpg",
      description: "Strengthen operational excellence in IT services",
      href: "/MonitorSupportFulfil",
      duration: "3 Days",
      level: "Professional",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    },
    {
      title: "SIAM Foundation",
      image: "/SIAM.jpg",
      description: "Service Integration and Management fundamentals",
      href: "/SIAMFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "SIAM",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ServiceDeskPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

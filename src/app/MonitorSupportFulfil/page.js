import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Monitor Support Fulfil Training | IT Service Operations | Edura",
  description:
    "Master Monitor, Support and Fulfil practices in IT Service Management. Learn incident handling, request fulfilment, service monitoring and operational excellence.",
  keywords:
    "Monitor Support Fulfil, IT service operations, service desk, incident management, request fulfilment, ITSM training",
  openGraph: {
    title: "Monitor Support Fulfil Training",
    description:
      "Strengthen IT operations through monitoring, support and service fulfilment best practices",
    images: ["/itl4.jpg"],
  },
};

const courseData = {
  title: "Monitor Support Fulfil",
  subtitle:
    "Strengthen IT service operations through monitoring, support and fulfilment excellence",
  backgroundImage: "/msf.jpg",

  overview: [
    "Monitor Support Fulfil focuses on the operational core of IT Service Management, enabling organizations to deliver stable, reliable and value-driven IT services.",
    "This course provides practical knowledge on proactive service monitoring, structured incident management, and efficient service request fulfilment to improve user satisfaction and operational performance.",
    "Participants will learn how to align support teams, optimize workflows, and implement measurable service improvements across the IT service lifecycle."
  ],

  courseOutline: [
    "Introduction to IT service operations",
    "Service monitoring concepts and tools",
    "Incident management lifecycle and best practices",
    "Service request fulfilment process",
    "Service desk structure and roles",
    "Escalation and prioritization techniques",
    "SLA and KPI management",
    "Continuous service improvement practices"
  ],

  learningObjectives: [
    "Understand monitoring and operational control principles",
    "Implement effective incident management processes",
    "Manage service requests efficiently",
    "Apply SLA and KPI measurement techniques",
    "Improve service response and resolution times",
    "Strengthen operational reporting and governance",
    "Drive continuous improvement in support environments"
  ],

  targetGroup: [
    "Service desk analysts",
    "IT support engineers",
    "Operations team members",
    "Incident and problem managers",
    "IT Service Management professionals"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certification provided upon successful completion"
  ],

  category: "IT Service Management",
  tagline: "Monitor. Support. Deliver.",

  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/itl4.jpg",
      description: "Learn the fundamentals of IT Service Management",
      href: "/ITL4Management",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    },
    {
      title: "ITIL® 4 Specialist Create, Deliver and Support",
      image: "/itl4.jpg",
      description: "Master service creation, delivery and support practices",
      href: "/ITL4SCDS",
      duration: "3 Days",
      level: "Professional",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
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

export default function MonitorSupportFulfilPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "IT Asset Management Training | ITAM Certification | Edura",
  description:
    "Master IT Asset Management (ITAM) practices. Learn to control hardware, software, and digital assets efficiently while optimizing cost, risk, and compliance.",
  keywords:
    "IT Asset Management training, ITAM certification, asset lifecycle management, software asset management, hardware asset control",
  openGraph: {
    title: "IT Asset Management (ITAM) Training",
    description:
      "Learn to manage IT assets effectively across their lifecycle to optimize cost, risk and compliance",
    images: ["/asset.jpg"],
  },
};

const courseData = {
  title: "IT Asset Management",
  subtitle:
    "Control, optimize and govern IT assets throughout their lifecycle",
  backgroundImage: "/asset.jpg",

  overview: [
    "IT Asset Management (ITAM) focuses on tracking and managing IT assets throughout their lifecycle to maximize value, reduce costs, and minimize risk.",
    "This course covers hardware and software asset management, license compliance, lifecycle planning, financial control, and governance practices.",
    "Participants will gain practical knowledge on implementing structured ITAM processes that improve visibility, enhance compliance, and support strategic decision-making."
  ],

  courseOutline: [
    "Introduction to IT Asset Management (ITAM)",
    "Asset lifecycle management",
    "Hardware asset management practices",
    "Software asset management and license compliance",
    "IT asset inventory and tracking systems",
    "Risk and compliance management",
    "Financial management of IT assets",
    "Integration with IT Service Management processes"
  ],

  learningObjectives: [
    "Understand IT asset lifecycle stages",
    "Implement structured IT asset tracking systems",
    "Manage software licenses and compliance risks",
    "Optimize asset utilization and cost control",
    "Reduce risks associated with unmanaged assets",
    "Integrate ITAM with ITSM practices",
    "Improve governance and reporting capabilities"
  ],

  targetGroup: [
    "IT asset managers",
    "IT operations professionals",
    "Procurement and finance teams",
    "Compliance officers",
    "IT Service Management practitioners"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "IT Service Management",
  tagline: "Track. Control. Optimize.",

  relatedCourses: [
    {
      title: "ITIL® 4 Foundation",
      image: "/itl4.jpg",
      description: "Master IT Service Management fundamentals",
      href: "/ITL4Management",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    },
    {
      title: "Incident Management",
      image: "/itl4.jpg",
      description: "Restore services quickly and reduce downtime",
      href: "/IncidentManagement",
      duration: "3 Days",
      level: "Professional",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Service Desk",
      image: "/serviceDesk.jpg",
      description: "Develop professional IT support capabilities",
      href: "/ServiceDesk",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function ITAssetManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

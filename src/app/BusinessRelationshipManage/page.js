import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Business Relationship Management Training | BRM | Edura",
  description:
    "Master Business Relationship Management (BRM) practices. Learn to build strong stakeholder relationships, align IT with business strategy, and deliver value-driven services.",
  keywords:
    "Business Relationship Management training, BRM certification, stakeholder management, IT-business alignment, service value",
  openGraph: {
    title: "Business Relationship Management (BRM) Training",
    description:
      "Strengthen IT and business alignment through effective relationship management practices",
    images: ["/brm.jpg"],
  },
};

const courseData = {
  title: "Business Relationship Management",
  subtitle:
    "Align IT and business strategy through strong stakeholder engagement and value creation",
  backgroundImage: "/brm.jpg",

  overview: [
    "Business Relationship Management (BRM) focuses on building and maintaining strong relationships between IT and business stakeholders to ensure value-driven service delivery.",
    "This course provides practical insights into stakeholder engagement, communication strategies, demand shaping, and service portfolio alignment.",
    "Participants will learn how to identify business needs, translate them into IT solutions, and continuously improve collaboration between IT and business functions."
  ],

  courseOutline: [
    "Introduction to Business Relationship Management",
    "Understanding business needs and expectations",
    "Stakeholder analysis and engagement strategies",
    "Demand management and service portfolio alignment",
    "Communication and negotiation skills",
    "Managing customer satisfaction and feedback",
    "Value realization and reporting",
    "Continuous improvement in relationship management"
  ],

  learningObjectives: [
    "Understand the role of BRM in IT Service Management",
    "Identify and manage key stakeholders effectively",
    "Align IT services with business strategy",
    "Improve communication and collaboration",
    "Measure and enhance customer satisfaction",
    "Drive value realization through IT services",
    "Strengthen long-term business partnerships"
  ],

  targetGroup: [
    "Business relationship managers",
    "IT service managers",
    "Account managers",
    "Service delivery managers",
    "Senior IT and business leaders"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "IT Service Management",
  tagline: "Engage. Align. Deliver Value.",

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
      title: "Sustainability in Digital IT",
      image: "/digital-sustainability.jpg",
      description: "Integrate sustainable practices into digital IT strategy",
      href: "/SustainabilityInDigitalIT",
      duration: "3 Days",
      level: "Professional",
      badge: "Strategy",
      badgeColor: "bg-green-600"
    },
    {
      title: "Service Desk",
      image: "/serviceDesk.jpg",
      description: "Build strong IT support and service capabilities",
      href: "/ServiceDesk",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function BusinessRelationshipManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

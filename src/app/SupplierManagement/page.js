import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Supplier Management Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master ITIL Supplier Management certification training in Hyderabad. QuickLearn Systems offers expert-led training covering supplier selection, contract management, and vendor performance monitoring. Enroll today!",
  keywords: "ITIL Supplier Management training Hyderabad, vendor management certification Hyderabad, best ITIL training institute Hyderabad, supplier management course Hyderabad, ITSM supplier training India, ITIL Supplier Management, vendor management, supplier relationships, contract management, supplier performance, ITSM, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "ITIL Supplier Management Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led ITIL Supplier Management certification training in Hyderabad by QuickLearn Systems",
    images: ["/itl4.jpg"],
  },
};

const courseData = {
  title: "Supplier Management",
  subtitle: "Manage supplier relationships and performance to ensure value delivery",
  backgroundImage: "/itl4.jpg",
  overview: [
    "Supplier Management is the practice responsible for ensuring that an organization's suppliers and their performance levels are managed appropriately to support the provision of seamless quality products and services.",
    "This course covers supplier selection, contract negotiation, performance monitoring, and relationship management techniques that maximize value from supplier partnerships.",
    "Learn to develop strategic supplier relationships that drive innovation, reduce costs, and ensure reliable service delivery through effective vendor management."
  ],
  courseOutline: [
    "Supplier Management fundamentals and objectives",
    "Supplier identification and selection",
    "Contract negotiation and management",
    "Supplier onboarding and integration",
    "Performance monitoring and measurement",
    "Supplier relationship management",
    "Risk management and mitigation",
    "Supplier development and improvement"
  ],
  learningObjectives: [
    "Understand Supplier Management principles and benefits",
    "Master supplier selection and evaluation processes",
    "Negotiate and manage effective contracts",
    "Monitor and measure supplier performance",
    "Build strategic supplier relationships",
    "Manage supplier-related risks effectively",
    "Drive supplier improvement and development"
  ],
  targetGroup: [
    "Supplier and vendor managers",
    "Procurement and sourcing professionals",
    "Contract managers and negotiators",
    "IT Service Management professionals",
    "Relationship managers"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at testing centers"
  ],
  category: "IT Service Management",
  tagline: "Select. Manage. Optimize.",
  relatedCourses: [
    {
      title: "SIAM Foundation",
      image: "/SIAM.jpg",
      description: "Learn service integration and management",
      href: "/SIAMFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "SIAM",
      badgeColor: "bg-purple-600"
    },
    {
      title: "Relationship Management",
      image: "/SIAM.jpg",
      description: "Master stakeholder relationship management",
      href: "/RelationshipManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "Service Level Management",
      image: "/Servicelevelman.jpg",
      description: "Learn to manage service levels and agreements",
      href: "/ServiceLevelManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    }
  ]
};

export default function SupplierManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
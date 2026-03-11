import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "ITIL Service Level Management Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master ITIL Service Level Management certification training in Hyderabad. QuickLearn Systems offers expert-led training covering SLA design, OLA management, and service reporting. Enroll today!",
  keywords: "ITIL Service Level Management training Hyderabad, SLA management certification Hyderabad, best ITIL training institute Hyderabad, service level management course Hyderabad, ITSM SLA training India, ITIL Service Level Management, SLA, service level agreements, OLA, service reporting, ITSM, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "ITIL Service Level Management Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led ITIL Service Level Management certification training in Hyderabad by QuickLearn Systems",
    images: ["/Servicelevelman.jpg"],
  },
};

const courseData = {
  title: "Service Level Management",
  subtitle: "Define, monitor and manage service levels to ensure customer satisfaction",
  backgroundImage: "/Servicelevelman.jpg",
  overview: [
    "Service Level Management is the practice responsible for setting clear business-based targets for service performance so that the delivery of a service can be properly assessed, monitored and managed against these targets.",
    "This comprehensive course covers service level agreement design, operational level agreement management, and service reporting techniques that ensure service quality and customer satisfaction.",
    "Learn to implement effective service level management processes that align IT services with business requirements and drive continuous service improvement."
  ],
  courseOutline: [
    "Service Level Management fundamentals",
    "Service Level Agreement (SLA) design and negotiation",
    "Operational Level Agreement (OLA) management",
    "Underpinning Contract (UC) coordination",
    "Service level monitoring and measurement",
    "Service reporting and communication",
    "Service improvement planning",
    "Customer relationship management"
  ],
  learningObjectives: [
    "Understand Service Level Management principles and objectives",
    "Design effective Service Level Agreements (SLAs)",
    "Manage Operational Level Agreements (OLAs) effectively",
    "Implement service level monitoring and measurement",
    "Develop comprehensive service reporting processes",
    "Drive service improvement initiatives",
    "Manage customer relationships and expectations"
  ],
  targetGroup: [
    "Service Level Managers and coordinators",
    "Customer Relationship Managers",
    "IT Service Management professionals",
    "Business Relationship Managers",
    "Service Delivery Managers"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "40 multiple choice questions",
    "Passing score: 26/40 (65%)",
    "Closed book examination",
    "Available online and at test centers"
  ],
  category: "IT Service Management",
  tagline: "Define. Monitor. Deliver.",
  relatedCourses: [
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
      title: "Service Request Management",
      image: "/Servicereq.jpg",
      description: "Learn to handle user requests efficiently",
      href: "/ServiceRequestManagement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "Continual Improvement",
      image: "/continualimprovement.jpg",
      description: "Drive continuous service improvement",
      href: "/ContinuationImprovement",
      duration: "3 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    }
  ]
};

export default function ServiceLevelManagementPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "MSP Practitioner Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master MSP Practitioner certification training in Hyderabad. QuickLearn Systems offers expert-led Managing Successful Programmes Practitioner training covering program coordination, benefits management, and strategic outcomes. Enroll today!",
  keywords:
    "MSP Practitioner training Hyderabad, Managing Successful Programmes certification Hyderabad, best MSP training institute Hyderabad, MSP Practitioner course Hyderabad, programme management training India, MSP Practitioner, Managing Successful Programmes, MSP, Program Management, Benefits Management, Project Coordination, Governance, Strategic Programmes, MSP Certification, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "MSP Practitioner Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led MSP Practitioner certification training in Hyderabad by QuickLearn Systems",
    images: ["/MSPPractitioner.jpg"],
  },
};

const courseData = {
  title: "MSP Practitioner",
  subtitle: "Manage complex programs and deliver strategic outcomes effectively",
  backgroundImage: "/MSPPractitioner.jpg",
  overview: [
    "The MSP Practitioner course builds on the MSP Foundation concepts and teaches you how to apply the framework to manage complex programs in real-world scenarios.",
    "Participants learn to coordinate multiple projects, manage risks and issues, align programs with organizational strategy, and ensure realization of benefits.",
    "The course emphasizes governance, stakeholder engagement, and flexible program management approaches to deliver successful outcomes across the organization."
  ],
  courseOutline: [
    "Overview of MSP framework and program concepts",
    "Program governance and organizational structures",
    "Managing program risks, issues, and dependencies",
    "Benefits management and realization",
    "Stakeholder engagement and communication",
    "Program planning, monitoring, and control",
    "Tailoring MSP for different program environments",
    "Delivering strategic outcomes and continual improvement"
  ],
  learningObjectives: [
    "Apply MSP principles, themes, and processes to real programs",
    "Coordinate multiple projects to achieve program objectives",
    "Manage risks, issues, and dependencies effectively",
    "Plan, monitor, and control program delivery",
    "Engage and communicate with stakeholders strategically",
    "Ensure benefits realization and alignment with business strategy",
    "Tailor MSP framework to organizational needs and contexts",
    "Support continual improvement in program management practices"
  ],
  targetGroup: [
    "Program Managers and Coordinators",
    "Project Managers managing multiple projects",
    "Business Change Managers",
    "Senior Managers responsible for program delivery",
    "Professionals seeking MSP Practitioner certification"
  ],
  examDetails: [
    "Duration: 150 minutes",
    "Objective testing or scenario-based questions",
    "Passing score: 55%",
    "Open book examination (MSP manual allowed)",
    "Available online and at accredited centers"
  ],
  category: "Program Management",
  tagline: "Govern Programs. Deliver Benefits. Achieve Strategy.",
  relatedCourses: [
    {
      title: "MSP Foundation",
      image: "/MSPFoundation.jpg",
      description:
        "Learn the fundamentals of Managing Successful Programmes (MSP) framework and principles.",
      href: "/MSPFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "MSP",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "PRINCE2 Practitioner",
      image: "/PRINCE2Practitioner.jpg",
      description:
        "Manage projects successfully with PRINCE2 principles and practices.",
      href: "/PRINCE2Practitioner",
      duration: "3 Days",
      level: "Advanced",
      badge: "PRINCE2",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "MoP Practitioner",
      image: "/MoPPractitioner.jpg",
      description:
        "Manage portfolios effectively using MoP principles and practices.",
      href: "/MoPPractitioner",
      duration: "3 Days",
      level: "Practitioner",
      badge: "MoP",
      badgeColor: "bg-green-600"
    }
  ]
};

export default function MSPPractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}

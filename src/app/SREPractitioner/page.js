import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Site Reliability Engineering (SRE) Practitioner Training | QLS",
  description:
    "Master Site Reliability Engineering (SRE) practices. Learn reliability engineering, SLOs, error budgets, observability, and DevOps principles for high-performing digital services.",
  keywords:
    "SRE Practitioner, Site Reliability Engineering training, SLO, SLA, error budgets, DevOps reliability, observability",
  openGraph: {
    title: "Site Reliability Engineering (SRE) Practitioner Certification | QLS",
    description:
      "Build scalable, reliable and resilient systems using SRE principles and practices",
    images: ["/sre.jpg"],
  },
};

const courseData = {
  title: "Site Reliability Engineering (SRE) Practitioner",
  subtitle:
    "Build scalable, resilient, and reliable digital services using SRE practices",
  backgroundImage: "/sre.jpg",

  overview: [
    "Site Reliability Engineering (SRE) combines software engineering and IT operations to build highly reliable, scalable, and resilient systems.",
    "This course introduces core SRE principles including Service Level Objectives (SLOs), Service Level Indicators (SLIs), error budgets, automation, and observability.",
    "Participants will learn how to reduce toil, improve system reliability, and implement modern DevOps-driven reliability engineering practices."
  ],

  courseOutline: [
    "Introduction to Site Reliability Engineering",
    "Service Level Indicators (SLIs) and Objectives (SLOs)",
    "Error budgets and reliability metrics",
    "Reducing toil through automation",
    "Incident response and postmortems",
    "Observability and monitoring practices",
    "Capacity planning and scalability",
    "DevOps and SRE collaboration models"
  ],

  learningObjectives: [
    "Understand SRE principles and culture",
    "Define and measure SLIs and SLOs",
    "Implement and manage error budgets",
    "Improve system reliability and availability",
    "Automate repetitive operational tasks",
    "Conduct effective incident reviews",
    "Enhance observability and monitoring capabilities"
  ],

  targetGroup: [
    "DevOps Engineers",
    "Site Reliability Engineers",
    "IT Operations Professionals",
    "Cloud Engineers",
    "System Administrators and Architects"
  ],

  examDetails: [
    "Duration: 90 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Web-based, closed book examination",
    "Certification: SRE Practitioner"
  ],

  category: "DevOps & Reliability Engineering",
  tagline: "Engineer Reliability. Automate Excellence.",

  relatedCourses: [
    {
      title: "DevOps Foundation",
      image: "/devops.jpg",
      description: "Understand DevOps culture and practices",
      href: "/devops-foundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "DevOps",
      badgeColor: "bg-green-600"
    },
    {
      title: "ITIL® 4 Specialist: Create, Deliver & Support",
      image: "/itl4.jpg",
      description: "Improve operational service delivery practices",
      href: "/ITL4SCDS",
      duration: "3 Days",
      level: "Advanced",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    },
    {
      title: "Site Reliability Engineering Foundation",
      image: "/sre.jpg",
      description: "Learn foundational SRE principles",
      href: "/sre-foundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "SRE",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function SREPractitionerPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

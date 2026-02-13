import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "DevOps Master Certification Training | QLS",
  description:
    "Become a DevOps Master. Learn advanced DevOps practices including CI/CD, automation, DevSecOps, cloud-native architecture, and enterprise DevOps transformation.",
  keywords:
    "DevOps Master training, DevOps certification, CI/CD, DevSecOps, automation, cloud DevOps, enterprise DevOps",
  openGraph: {
    title: "DevOps Master Certification | QLS",
    description:
      "Lead enterprise DevOps transformation with advanced automation and cloud-native practices",
    images: ["/devops.jpg"],
  },
};

const courseData = {
  title: "DevOps Master",
  subtitle:
    "Lead enterprise DevOps transformation with advanced automation and cloud-native practices",
  backgroundImage: "/devops.jpg",

  overview: [
    "DevOps Master is an advanced-level course designed for professionals who want to lead DevOps transformation initiatives at an enterprise scale.",
    "This course focuses on advanced CI/CD pipeline architecture, DevSecOps integration, cloud-native deployment strategies, infrastructure as code (IaC), and organizational DevOps adoption.",
    "Participants will gain strategic and technical expertise to optimize delivery pipelines, enhance collaboration across teams, and drive continuous improvement in complex environments."
  ],

  courseOutline: [
    "Enterprise DevOps strategy and transformation",
    "Advanced CI/CD pipeline design",
    "Infrastructure as Code (IaC) and automation",
    "Cloud-native architecture and containerization",
    "DevSecOps integration and security automation",
    "Monitoring, observability, and feedback loops",
    "Value stream optimization",
    "Scaling DevOps across the organization"
  ],

  learningObjectives: [
    "Design enterprise-level CI/CD pipelines",
    "Implement Infrastructure as Code effectively",
    "Integrate security into DevOps workflows (DevSecOps)",
    "Adopt cloud-native and container strategies",
    "Optimize value streams for faster delivery",
    "Improve system reliability and performance",
    "Lead DevOps transformation initiatives"
  ],

  targetGroup: [
    "Senior DevOps Engineers",
    "Cloud Architects",
    "IT Transformation Leaders",
    "Release Managers",
    "Technology Managers and Consultants"
  ],

  examDetails: [
    "Duration: 120 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Web-based, closed book examination",
    "Certification: DevOps Master"
  ],

  category: "DevOps & Cloud Engineering",
  tagline: "Automate. Integrate. Transform.",

  relatedCourses: [
    {
      title: "DevOps Foundation",
      image: "/devops.jpg",
      description: "Understand DevOps culture and foundational practices",
      href: "/devops-foundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "DevOps",
      badgeColor: "bg-green-600"
    },
    {
      title: "Site Reliability Engineering (SRE) Practitioner",
      image: "/sre.jpg",
      description: "Build scalable and reliable systems using SRE practices",
      href: "/sre-practitioner",
      duration: "2 Days",
      level: "Professional",
      badge: "SRE",
      badgeColor: "bg-blue-600"
    },
    {
      title: "SAFe® DevOps",
      image: "/safe.jpg",
      description: "Implement DevOps practices within scaled Agile environments",
      href: "/safe-devops",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe®",
      badgeColor: "bg-red-600"
    }
  ]
};

export default function DevOpsMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

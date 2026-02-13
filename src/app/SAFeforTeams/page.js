import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe® for Teams Training | Scaled Agile Framework | Edura",
  description:
    "Master SAFe® for Teams and become a certified SAFe® Practitioner. Learn Agile Release Train collaboration, PI planning, and Lean-Agile principles.",
  keywords:
    "SAFe for Teams training, SAFe Practitioner certification, Scaled Agile Framework, Agile Release Train, PI Planning",
  openGraph: {
    title: "SAFe® for Teams Certification Training",
    description:
      "Learn how Agile teams collaborate and deliver value within the Scaled Agile Framework (SAFe®)",
    images: ["/safe.jpg"],
  },
};

const courseData = {
  title: "SAFe® for Teams",
  subtitle:
    "Collaborate effectively within Agile Release Trains and deliver value at scale",
  backgroundImage: "/safe.jpg",

  overview: [
    "SAFe® for Teams provides a comprehensive understanding of how Agile teams operate within the Scaled Agile Framework (SAFe®). It equips participants with the skills needed to collaborate effectively in Agile Release Trains (ARTs).",
    "This course covers Lean-Agile principles, PI Planning, iteration execution, and continuous delivery practices essential for delivering value in large-scale enterprise environments.",
    "Participants will gain hands-on knowledge of team roles, cross-team collaboration, and how to contribute to enterprise agility and business outcomes."
  ],

  courseOutline: [
    "Introduction to Scaled Agile Framework (SAFe®)",
    "Lean-Agile principles and mindset",
    "Agile Release Train (ART) concepts",
    "Program Increment (PI) Planning",
    "Iteration execution and team collaboration",
    "DevOps and continuous delivery pipeline",
    "Built-in quality practices",
    "Inspect and Adapt workshop"
  ],

  learningObjectives: [
    "Understand the Scaled Agile Framework (SAFe®)",
    "Apply Lean-Agile principles within teams",
    "Participate effectively in PI Planning",
    "Collaborate within Agile Release Trains",
    "Improve quality through built-in quality practices",
    "Support continuous delivery and DevOps culture",
    "Contribute to enterprise agility"
  ],

  targetGroup: [
    "Agile team members",
    "Scrum Masters",
    "Product Owners",
    "Developers and testers",
    "Project and program team members"
  ],

  examDetails: [
    "Duration: 90 minutes",
    "45 multiple choice questions",
    "Passing score: 77% (35/45)",
    "Web-based, closed book examination",
    "Certification: SAFe® 6 Practitioner (SP)"
  ],

  category: "Agile & Scaled Agile",
  tagline: "Collaborate. Deliver. Scale.",

  relatedCourses: [
    {
      title: "Leading SAFe®",
      image: "/safe.jpg",
      description: "Lead enterprise Agile transformation with SAFe®",
      href: "/LeadingSAFe",
      duration: "2 Days",
      level: "Advanced",
      badge: "SAFe®",
      badgeColor: "bg-red-600"
    },
    {
      title: "SAFe® Scrum Master",
      image: "/safe.jpg",
      description: "Master Scrum within the SAFe® environment",
      href: "/SAFeScrumMaster",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe®",
      badgeColor: "bg-red-600"
    },
    {
      title: "PMP Certification",
      image: "/PMPC.jpg",
      description: "Project Management Professional certification",
      href: "/PMP",
      duration: "4 Days",
      level: "Professional",
      badge: "PMI",
      badgeColor: "bg-green-600"
    }
  ]
};

export default function SAFeForTeamsPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

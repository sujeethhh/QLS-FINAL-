import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "SAFe Advanced Scrum Master (SASM) Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Become a certified SAFe® Advanced Scrum Master (SASM) with expert-led training in Hyderabad. QuickLearn Systems offers SASM certification courses covering advanced facilitation, Agile coaching, and enterprise agility. Enroll today!",
  keywords:
    "SAFe Advanced Scrum Master training Hyderabad, SASM certification Hyderabad, best SAFe training institute Hyderabad, SAFe Advanced Scrum Master course Hyderabad, SAFe training India, SAFe Advanced Scrum Master, SASM certification, SAFe Scrum Master advanced, Agile coaching, Scaled Agile Framework, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "SAFe Advanced Scrum Master (SASM) Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led SAFe Advanced Scrum Master (SASM) certification training in Hyderabad by QuickLearn Systems",
    images: ["/safe.jpg"],
  },
};

const courseData = {
  title: "SAFe® Advanced Scrum Master",
  subtitle:
    "Enhance facilitation, coaching, and leadership skills within Agile Release Trains",
  backgroundImage: "/safe.jpg",

  overview: [
    "SAFe® Advanced Scrum Master (SASM) is designed for experienced Scrum Masters who want to deepen their expertise in Agile team facilitation and enterprise-level collaboration.",
    "This course focuses on advanced facilitation techniques, Agile coaching skills, cross-team collaboration, and scaling Scrum practices within Agile Release Trains (ARTs).",
    "Participants will gain the knowledge and confidence to guide teams through complex challenges, remove impediments effectively, and support enterprise agility initiatives."
  ],

  courseOutline: [
    "Role of the Advanced Scrum Master in SAFe®",
    "Facilitating cross-team collaboration",
    "Advanced Agile coaching techniques",
    "Managing team dynamics and conflict resolution",
    "Scaling Scrum in enterprise environments",
    "Kanban for teams and ARTs",
    "Supporting DevOps and continuous delivery",
    "Improvement through Inspect and Adapt"
  ],

  learningObjectives: [
    "Apply advanced facilitation techniques",
    "Coach Agile teams toward high performance",
    "Support cross-team coordination within ARTs",
    "Resolve team conflicts effectively",
    "Scale Scrum practices in enterprise environments",
    "Implement Kanban systems for workflow optimization",
    "Drive continuous improvement initiatives"
  ],

  targetGroup: [
    "Experienced Scrum Masters",
    "Agile Coaches",
    "Release Train Engineers (RTEs)",
    "Team Leads and Project Managers",
    "SAFe® practitioners seeking advanced certification"
  ],

  examDetails: [
    "Duration: 120 minutes",
    "60 multiple choice questions",
    "Passing score: 73%",
    "Web-based, closed book examination",
    "Certification: SAFe® Advanced Scrum Master (SASM)"
  ],

  category: "Agile & Scaled Agile",
  tagline: "Facilitate. Coach. Scale.",

  relatedCourses: [
    {
      title: "SAFe® for Teams",
      image: "/safe.jpg",
      description: "Learn Agile team collaboration within SAFe®",
      href: "/safe-for-teams",
      duration: "2 Days",
      level: "Foundation",
      badge: "SAFe®",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Leading SAFe®",
      image: "/safe.jpg",
      description: "Lead enterprise Agile transformation",
      href: "/LeadingSAFe",
      duration: "2 Days",
      level: "Advanced",
      badge: "SAFe®",
      badgeColor: "bg-blue-500"
    },
    {
      title: "SAFe® Scrum Master",
      image: "/safe.jpg",
      description: "Master Scrum practices within SAFe®",
      href: "/SAFeScrumMaster",
      duration: "2 Days",
      level: "Professional",
      badge: "SAFe®",
      badgeColor: "bg-blue-500"
    }
  ]
};

export default function SAFeAdvancedScrumMasterPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Agile Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description:
    "Master PRINCE2 Agile Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led training covering agile project principles, PRINCE2 governance, and hybrid project management. Enroll today!",
  keywords:
    "PRINCE2 Agile Foundation training Hyderabad, PRINCE2 Agile certification Hyderabad, best PRINCE2 training institute Hyderabad, PRINCE2 Agile Foundation course Hyderabad, PRINCE2 training India, PRINCE2 Agile, PRINCE2 Foundation, Agile Project Management, PRINCE2 Agile Foundation, Project Governance, Risk Management, Agile Delivery, IT Project Management, Hybrid Project Management, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "PRINCE2 Agile Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description:
      "Expert-led PRINCE2 Agile Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/PRINCE2Agile.jpg"],
  },
};

const courseData = {
  title: "PRINCE2 Agile Foundation",
  subtitle: "Deliver projects successfully using PRINCE2 governance and agile flexibility",
  backgroundImage: "/prince2-agile.png",
  overview: [
    "PRINCE2 Agile Foundation introduces the principles, themes, and processes of PRINCE2 and how they can be blended with agile delivery approaches.",
    "Participants will learn how to manage project governance, roles, and responsibilities while incorporating agile techniques to deliver value iteratively and adaptively.",
    "The course provides practical insights into balancing control and flexibility, managing risk, and aligning projects with organizational objectives."
  ],
  courseOutline: [
    "Introduction to PRINCE2 and Agile principles",
    "PRINCE2 methodology: principles, themes, and processes",
    "Agile concepts, frameworks, and delivery techniques",
    "Blending PRINCE2 with Agile for hybrid project management",
    "Roles and responsibilities in PRINCE2 Agile projects",
    "Managing risks, issues, and change in agile projects",
    "Planning, monitoring, and controlling agile projects",
    "Best practices for governance, reporting, and stakeholder engagement"
  ],
  learningObjectives: [
    "Understand PRINCE2 methodology and agile delivery approaches",
    "Apply PRINCE2 principles and themes in project governance",
    "Integrate agile techniques into structured project management",
    "Define roles and responsibilities for agile project teams",
    "Manage risks, issues, and changes effectively",
    "Plan, monitor, and control projects to deliver value iteratively",
    "Balance governance and flexibility for successful project outcomes"
  ],
  targetGroup: [
    "Project Managers and Team Leaders",
    "Project Coordinators and Project Support Staff",
    "Agile Coaches and Scrum Masters",
    "Business Analysts and IT Project Professionals",
    "Anyone looking to understand PRINCE2 Agile methodology"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "50 multiple-choice questions",
    "Passing score: 50% (25/50)",
    "Closed book examination",
    "Available online and at accredited centers"
  ],
  category: "Project Management",
  tagline: "Govern Projects. Deliver Agile. Achieve Success.",
  relatedCourses: [
    {
      title: "PRINCE2 Foundation",
      image: "/PRINCE2Foundation.jpg",
      description:
        "Understand the fundamentals of PRINCE2 project management framework and principles.",
      href: "/PRINCE2Foundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "PRINCE2",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "Agile Project Management",
      image: "/AgilePM.jpg",
      description:
        "Learn agile methods and techniques for iterative and adaptive project delivery.",
      href: "/AgileProjectManagement",
      duration: "3 Days",
      level: "Intermediate",
      badge: "Agile",
      badgeColor: "bg-green-500"
    },
    {
      title: "Scrum Master Certification",
      image: "/ScrumMaster.jpg",
      description:
        "Gain practical knowledge to lead Scrum teams and implement Agile practices successfully.",
      href: "/ScrumMaster",
      duration: "2 Days",
      level: "Foundation",
      badge: "Scrum",
      badgeColor: "bg-purple-600"
    }
  ]
};

export default function PRINCE2AgileFoundation() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}

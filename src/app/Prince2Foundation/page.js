import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "PRINCE2 Foundation Certification Training in Hyderabad | QuickLearn Systems",
  description: "Master PRINCE2 Foundation certification training in Hyderabad. QuickLearn Systems offers expert-led training covering PRINCE2 principles, themes, and processes for structured project management. Enroll today!",
  keywords: "PRINCE2 Foundation training Hyderabad, PRINCE2 Foundation certification Hyderabad, best PRINCE2 training institute Hyderabad, PRINCE2 Foundation course Hyderabad, project management training India, PRINCE2 Foundation, project management, PRINCE2 certification, structured methodology, project control, QuickLearn Systems, IT training Hyderabad, professional training Hyderabad",
  openGraph: {
    title: "PRINCE2 Foundation Certification Training in Hyderabad | QuickLearn Systems",
    description: "Expert-led PRINCE2 Foundation certification training in Hyderabad by QuickLearn Systems",
    images: ["/PMPC.jpg"],
  },
};

const courseData = {
  title: "PRINCE2 Foundation",
  subtitle: "Master the world's most practiced project management methodology",
  backgroundImage: "/PMPC.jpg",
  overview: [
    "PRINCE2 (PRojects IN Controlled Environments) is a structured project management methodology that provides a framework for managing projects of any size or type. The Foundation level introduces the basic principles, terminology and structure of the method.",
    "This comprehensive course covers the seven principles, seven themes, and seven processes that form the backbone of PRINCE2 methodology, providing you with a solid foundation in structured project management.",
    "Learn to apply PRINCE2 principles in real-world scenarios, understand project governance structures, and implement effective project control mechanisms."
  ],
  courseOutline: [
    "PRINCE2 methodology overview and benefits",
    "Seven PRINCE2 principles",
    "Seven PRINCE2 themes (Business Case, Organization, Quality, Plans, Risk, Change, Progress)",
    "Seven PRINCE2 processes",
    "Project roles and responsibilities",
    "Project documentation and management products",
    "Tailoring PRINCE2 to project environments",
    "PRINCE2 in practice - case studies and examples"
  ],
  learningObjectives: [
    "Understand PRINCE2 methodology and its benefits",
    "Master the seven PRINCE2 principles",
    "Apply the seven PRINCE2 themes effectively",
    "Implement the seven PRINCE2 processes",
    "Define project roles and responsibilities",
    "Create and manage PRINCE2 documentation",
    "Tailor PRINCE2 to different project environments"
  ],
  targetGroup: [
    "Project managers and team leaders",
    "Business analysts and coordinators",
    "Programme and portfolio managers",
    "Team members working on PRINCE2 projects",
    "Anyone seeking structured project management knowledge"
  ],
  examDetails: [
    "Duration: 60 minutes",
    "75 multiple choice questions",
    "Passing score: 38/75 (50%)",
    "Closed book examination",
    "Available online and at Pearson VUE centers"
  ],
  category: "Project & Program Management",
  tagline: "Structure. Control. Deliver.",
  relatedCourses: [
    {
      title: "PRINCE2 Practitioner",
      image: "/Agile.jpg",
      description: "Advanced PRINCE2 application and tailoring skills",
      href: "/Prince2Practitioner",
      duration: "3 Days",
      level: "Professional",
      badge: "PRINCE2",
      badgeColor: "bg-purple-600"
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
    },
    {
      title: "MSP Foundation",
      image: "/Agile.jpg",
      description: "Managing Successful Programmes methodology",
      href: "/MSPFoundation",
      duration: "3 Days",
      level: "Professional",
      badge: "MSP",
      badgeColor: "bg-orange-600"
    }
  ]
};

export default function Prince2FoundationPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
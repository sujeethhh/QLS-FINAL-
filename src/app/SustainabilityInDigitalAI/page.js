import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata = {
  title: "Sustainability in Digital IT Training | Green IT | Edura",
  description:
    "Learn how to integrate sustainability into digital IT strategies. Master green IT practices, energy efficiency, carbon reduction, and responsible digital transformation.",
  keywords:
    "Sustainability in Digital IT, Green IT training, sustainable IT practices, carbon reduction IT, ESG IT strategy",
  openGraph: {
    title: "Sustainability in Digital IT Training",
    description:
      "Integrate sustainable practices into digital IT operations and strategy",
    images: ["/digital-sustainability.jpg"],
  },
};

const courseData = {
  title: "Sustainability in Digital IT",
  subtitle:
    "Drive responsible digital transformation through sustainable IT practices",
  backgroundImage: "/digital-sustainability.jpg",

  overview: [
    "Sustainability in Digital IT focuses on integrating environmentally responsible practices into IT strategy, operations, and digital transformation initiatives.",
    "This course explores green IT principles, energy-efficient infrastructure, cloud optimization, carbon footprint reduction, and sustainable procurement practices.",
    "Participants will learn how to align IT operations with ESG goals, reduce environmental impact, and create long-term sustainable value through responsible digital innovation."
  ],

  courseOutline: [
    "Introduction to Sustainable IT and Green IT principles",
    "Environmental impact of digital technologies",
    "Energy-efficient data centers and cloud optimization",
    "Carbon footprint measurement and reduction strategies",
    "Sustainable IT procurement and lifecycle management",
    "Digital transformation and sustainability alignment",
    "Governance, compliance, and ESG reporting",
    "Building a sustainable IT roadmap"
  ],

  learningObjectives: [
    "Understand the role of IT in environmental sustainability",
    "Identify opportunities to reduce digital carbon footprint",
    "Implement energy-efficient IT practices",
    "Align IT strategy with ESG and sustainability goals",
    "Measure and report sustainability performance",
    "Promote responsible digital innovation",
    "Develop a sustainable IT transformation roadmap"
  ],

  targetGroup: [
    "IT managers and leaders",
    "Sustainability officers",
    "Digital transformation professionals",
    "IT infrastructure and cloud architects",
    "ESG and compliance professionals"
  ],

  examDetails: [
    "Duration: 60 minutes",
    "Multiple choice examination",
    "Passing score: 65%",
    "Closed book examination",
    "Certificate of completion provided"
  ],

  category: "Digital & IT Strategy",
  tagline: "Innovate. Optimize. Sustain.",

  relatedCourses: [
    {
      title: "IT Asset Management",
      image: "/asset.jpg",
      description: "Optimize and govern IT assets responsibly",
      href: "/ITAssetManagement",
      duration: "3 Days",
      level: "Professional",
      badge: "ITSM",
      badgeColor: "bg-green-600"
    },
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
      title: "Monitor Support Fulfil",
      image: "/itl4.jpg",
      description: "Strengthen operational excellence in IT services",
      href: "/MonitorSupportFulfil",
      duration: "3 Days",
      level: "Professional",
      badge: "ITSM",
      badgeColor: "bg-blue-600"
    }
  ]
};

export default function SustainabilityInDigitalITPage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}

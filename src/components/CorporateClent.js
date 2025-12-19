import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CorporateTemplate from "@/components/CorporateTemplate"

export const metadata = {
  title: "Corporate TRAINING Programs",
  description:
    "Gain the skills to lead IT and digital transformation with ITIL® 4 Strategist: Direct, Plan and Improve. Learn governance, continual improvement, and strategy execution across all service management levels.",
  keywords:
    "ITIL 4 Strategist, Direct Plan and Improve, ITIL DPI, continual improvement, IT strategy, governance, service management, leadership, Agile ITSM, DevOps alignment",
  openGraph: {
    title: "Corporate TRAINING Programs",
    description:
      "Master ITIL® 4 DPI to align strategic direction, planning, and continual improvement across IT and digital organizations.",
    images: ["/ITIL4DPI.jpg"],
  },
};

const courseData = {
  title: "Corporate Training ",
  subtitle: "Align strategy, governance, and continual improvement to drive digital success",
  backgroundImage: "/ITIL4DPI.jpg",
  overview: [
    "We aim to provide your company with a 'one stop shop solution' for your corporate training requirements. At Wiselearner we try where possible to use real examples from the delegates' own working environments to ensure they can relate to the information provided.",
    "Course content is continually updated by experience gained from course feedback received from our clieants and the Interim Management arena enabling us to keep the training courses fresh, vibrant and representative of best practise throughout industry.",
  ],
  WhyQls: [
    "Accredited trainers",
    "558+ Trainings conducted",
    "850+ person years of experience",
    "126+ Instructor led courses and e-learning",
    "20000+ professionals trained & Certified worldwide",
    "Accredited by many global accreditation bodies",
    "Transparency and Accountability for all our Commitments",
    "High quality and value for money",
  ],
  DeliveryMethods: [
    "High-quality training programs tailored for both individual learners and corporate clients.",
    "Industry-expert–designed curriculum, created by professionals with over 30 years of real-world experience.",
    "Highly qualified and certified instructors with extensive hands-on experience across multiple industries.",
    
  ],
  Catalog: [
    "Flexible and adaptable training delivery customized to meet your specific requirements.",
    "Training available on working and non-working days to suit organizational schedules.",
    "Sessions conducted during early mornings or late hours, ensuring maximum convenience and minimal disruption.",
    
  ],
  TrainingPrograms: [
    "Wide range of training programs available for employee enrollment.",
    "Ideal solution for organizations with a limited number of employees requiring training.",
    "Cost-effective and flexible enrollment option without the need for dedicated batch formation.",
    
  ],
  eLearning:[
    "World-class e-learning platform developed in collaboration with experienced industry partners.",
    "Built by experts with many years of experience in delivering advanced e-learning solutions.",
    "Robust, scalable, and learner-centric platform designed for effective online training delivery.",
  ],
  category: "IT Service Management (ITIL® 4)",
  tagline: "Direct. Plan. Improve. Lead.",
  relatedCourses: [
    {
      title: "Corporate TRAINING Programs",
      image: "/ITIL4.jpg",
      description: "Learn the fundamentals of ITIL® 4 and modern service management practices.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    },
    {
      title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS)",
      image: "/ITIL4CDS.jpg",
      description: "Enhance your ability to design, deliver, and support IT-enabled services effectively.",
      href: "/ITIL4CDS",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    },
    {
      title: "ITIL® 4 Specialist: High Velocity IT (HVIT)",
      image: "/ITIL4HVIT.jpg",
      description: "Accelerate digital transformation by adopting Agile, Lean, and DevOps practices.",
      href: "/ITIL4HVIT",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-[#9F2D2D]"
    }
  ]
};


export default function CorporateClient() {
  return (
    <>
      <Headers />
      <CorporateTemplate courseData={courseData} />
      <Footer />
      <LiveChat />
    </>
  );
}
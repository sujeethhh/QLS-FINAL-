import React from "react";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import CorporateTemplate from "@/components/CorporateTemplate"

export const metadata = {
  title: "Corporate Training ",
  description:
    "QuickLearn Systems is a trusted corporate training institute in Hyderabad offering customized IT, Agile, DevOps, ITIL, PMP, and professional certification training programs for enterprises. Upskill your workforce with role-based, hands-on, outcome-driven training.",
  keywords:
    "corporate training institute Hyderabad, corporate IT training Hyderabad, customized corporate training, employee upskilling Hyderabad, ITIL corporate training, Agile corporate training, PMP corporate training, DevOps corporate training, QuickLearn Systems corporate training",
  openGraph: {
    title: "Corporate Training ",
    description:
      "Customized corporate training programs in Hyderabad by QuickLearn Systems. Role-based, hands-on, and outcome-driven training for IT, Agile, DevOps, ITIL, PMP and more.",
    images: ["/corporate.jpg"],
  },
};

const courseData = {
  title: "Corporate Training ",
  subtitle: "Customized, Role-Based & Outcome-Driven Training Programs for Your Workforce",
  backgroundImage: "/corporate.jpg",
  overview: [
    "At QuickLearn Systems, we work closely with companies that want to upskill their workforce with practical, role-based, and business-focused training.",
    "As a trusted corporate training institute in Hyderabad, we design customized training programs in IT, software, data, cloud, cybersecurity, and emerging technologies — tailored to your organization's goals.",
    "Our corporate training solutions help teams improve performance, adopt new tools faster, and deliver better business results through structured learning and hands-on practice.",
  ],
  WhyQlsIntro: "Choosing the right corporate training partner plays a major role in how quickly your employees gain skills and apply them at work. QuickLearn Systems focuses on delivering practical, customized, and outcome-driven corporate training that matches real business needs.",
  WhyQls: [
    "Customized training programs based on your project requirements",
    "Trainers with real industry experience",
    "Hands-on labs, case studies, and real-time scenarios",
    "Flexible delivery — onsite, online, and hybrid models",
    "Role-based learning paths for different teams",
    "Continuous assessment and feedback",
    "Dedicated corporate training coordinator for smooth communication",
    "Pre-training skill gap analysis for accurate course planning",
    "Post-training support and knowledge reinforcement sessions",
    "Training reports for management review and improvement tracking",
  ],
  DeliveryMethods: [
    "Onsite training at your office premises for maximum team convenience.",
    "Live online instructor-led sessions for distributed and remote teams.",
    "Hybrid delivery combining in-person and virtual learning.",
    "Weekend and flexible scheduling to minimize business disruption.",
    "Short intensive boot camps or extended modular programs based on your needs.",
  ],
  Catalog: [
    "IT Service Management: ITIL® 4 Foundation, SIAM, Service Desk, Incident & Problem Management.",
    "Project & Program Management: PMP, PRINCE2, MSP, ACP.",
    "Agile & Scrum: SAFe, Scrum Master, Product Owner, Kanban.",
    "DevOps & SRE: DevOps Foundation, DevOps Master, SRE Foundation & Practitioner.",
    "Quality Management: Lean Six Sigma Green Belt & Black Belt.",
    "Software Testing: ISTQB Foundation & Advanced.",
    "Business Analysis: Business Analysis Foundation, Practitioner & Agile BA.",
  ],
  TrainingPrograms: [
    "Group enrollment for teams of any size — from small squads to large departments.",
    "Dedicated batch formation tailored to your project timelines.",
    "Blended open-house sessions for organizations with smaller teams.",
    "Volume-based pricing with group discounts for large-scale enrollments.",
  ],
  eLearning: [
    "Access to post-training learning materials and recorded sessions.",
    "Practice assessments and mock exams for certification readiness.",
    "Knowledge reinforcement exercises and quizzes.",
    "Ongoing access to updated content aligned with the latest certification standards.",
  ],
  category: "Corporate Training",
  tagline: "Learn. Certify. Excel.",
  relatedCourses: [
    {
      title: "Corporate TRAINING Programs",
      image: "/ITIL4.jpg",
      description: "Learn the fundamentals of ITIL® 4 and modern service management practices.",
      href: "/ITILFoundation",
      duration: "2 Days",
      level: "Foundation",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "ITIL® 4 Specialist: Create, Deliver and Support (CDS)",
      image: "/ITIL4CDS.jpg",
      description: "Enhance your ability to design, deliver, and support IT-enabled services effectively.",
      href: "/ITIL4CDS",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    },
    {
      title: "ITIL® 4 Specialist: High Velocity IT (HVIT)",
      image: "/ITIL4HVIT.jpg",
      description: "Accelerate digital transformation by adopting Agile, Lean, and DevOps practices.",
      href: "/ITIL4HVIT",
      duration: "3 Days",
      level: "Intermediate",
      badge: "ITIL®",
      badgeColor: "bg-[#3B82F6]"
    }
  ]
};


export default function CorporateClient() {
  return (
    <>
      <Headers />
      <CorporateTemplate courseData={courseData} />
      <Footer />
        
    </>
  );
}
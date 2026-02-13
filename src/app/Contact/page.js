import Contactus from "@/components/Contactus";

export const metadata = {
  title: "Contact Us | QuickLearn - Get in Touch for Training Solutions",
  description: "Contact QuickLearn for personalized IT training solutions. Reach our expert team for course details, corporate training, pricing, and enrollment support.",
  keywords: "contact QuickLearn, IT training inquiry, corporate training contact, course enrollment, training consultation",
  openGraph: {
    title: "Contact Us - QuickLearn Training Solutions",
    description: "Get in touch with our expert team for personalized training solutions. We respond to all inquiries within 24 hours.",
  },
};

export default function Contact() {
  return(
    <Contactus/>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LiveChat from "@/components/LiveChat";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuickLearn - Professional Training & Certification",
  description:
    "Master IT Service Management, Project Management, Agile, and more with QuickLearn's expert-led training programs.",
  metadataBase: new URL('https://quicklearnsys.com'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Tawk.to Script 
        <Script
          id="tawk-to-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script");
                var s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/692f312c0962891980a7a019/1jbg5g5oe';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
        */}
        
        
   
<LiveChat/>
{/* AnythingLLM Chat Widget */}
<Script
  id="anythingllm-widget"
  src="https://ai.zylosys.in/embed/anythingllm-chat-widget.min.js"
  strategy="afterInteractive"
  data-embed-id="3c78b278-db2a-45c0-b2be-f0b2dee3bfc1"
  data-base-api-url="https://ai.zylosys.in/api/embed"
  data-position="bottom-right"
  data-assistant-name="QuickLearn Assistant"
  data-brand-image-url="/LOGO.png"
  data-chat-icon="support"
  data-button-color="#2563eb"
  data-user-bg-color="#2563eb"
  data-assistant-bg-color="#f3f4f6"
  data-window-width="380px"
  data-window-height="500px"
  data-text-size="14"
  data-greeting="Hi! I'm your QuickLearn assistant. How can I help you today?"
  data-default-messages="What certifications do you offer?,Tell me about ITIL training,Do you offer online classes?,What is the course fee?"
  data-send-message-text="Type your question..."
  data-reset-chat-text="Start new conversation"
  data-no-sponsor="true"
  data-support-email={process.env.NEXT_PUBLIC_CONTACT_EMAIL}
/>

      </body>
    </html>
  );
}

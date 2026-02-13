import { Container, Grid } from "@mui/material";
import Headers from "@/components/Header";

export const metadata = {
  title: "Privacy Policy | QuickLearn Systems",
  description: "Privacy Policy for QuickLearn Systems - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    
    <div className="min-h-screen bg-gray-50 py-12">
      <Headers/>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: February 2, 2026</p>

              <div className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    enroll in courses, contact us, or subscribe to our newsletter.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Professional information (job title, company, experience level)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Course progress and completion data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide, maintain, and improve our training services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Communicate about courses, events, and other news</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 text-gray-700">
                    <p>Email: privacy@quicklearnsys.com</p>
                    <p>Phone: +111 (564) 568 25</p>
                  </div>
                </section>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
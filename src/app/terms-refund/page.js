import { Container, Grid } from "@mui/material";

export const metadata = {
  title: "Terms & Refund Policy | QuickLearn Systems",
  description: "Terms of Service and Refund Policy for QuickLearn Systems training programs and certification courses.",
};

export default function TermsRefund() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service & Refund Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: February 2, 2026</p>

              <div className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Service</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h3>
                  <p className="text-gray-700 mb-4">
                    By accessing and using QuickLearn Systems services, you accept and agree to be bound by 
                    the terms and provision of this agreement.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Course Enrollment</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Course enrollment is confirmed upon payment receipt</li>
                    <li>Course materials are provided digitally and/or in physical format</li>
                    <li>Access to online materials is provided for the duration specified in course details</li>
                    <li>Students must attend minimum required sessions for certification eligibility</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Certification</h3>
                  <p className="text-gray-700 mb-4">
                    Certification is subject to successful completion of course requirements and passing 
                    the certification exam (where applicable). QuickLearn Systems provides training but 
                    does not guarantee exam success.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Intellectual Property</h3>
                  <p className="text-gray-700 mb-4">
                    All course materials, content, and intellectual property remain the property of 
                    QuickLearn Systems and/or respective certification bodies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Policy</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Cancellation Before Course Start</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li><strong>More than 7 days before:</strong> Full refund minus processing fees</li>
                    <li><strong>3-7 days before:</strong> 75% refund</li>
                    <li><strong>Less than 3 days:</strong> 50% refund</li>
                    <li><strong>Same day:</strong> No refund</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Cancellation After Course Start</h3>
                  <p className="text-gray-700 mb-4">
                    No refunds are provided once the course has commenced, except in exceptional 
                    circumstances at the discretion of QuickLearn Systems management.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Course Rescheduling</h3>
                  <p className="text-gray-700 mb-4">
                    If QuickLearn Systems needs to reschedule a course, participants will be offered:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Transfer to the next available course date</li>
                    <li>Full refund if new dates are not suitable</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Retake Guarantee</h3>
                  <p className="text-gray-700 mb-4">
                    If you don't pass your certification exam on the first attempt, you may retake 
                    our training program at no additional cost within 12 months. This applies to 
                    select courses only.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Refund Processing</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Refunds are processed within 7-10 business days</li>
                    <li>Refunds are issued to the original payment method</li>
                    <li>Processing fees may apply as per payment provider policies</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    For questions about terms, refunds, or to request a refund, please contact:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> support@quicklearnsys.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +111 (564) 568 25</p>
                    <p className="text-gray-700"><strong>Business Hours:</strong> Mon-Fri: 9am-6pm IST</p>
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
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, courseInterested, inquiryType, message } = body;

    // Validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"QuickLearn Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "info@quicklearnsys.com",
      replyTo: email,
      subject: `New Contact Enquiry from ${fullName}${courseInterested ? ` - ${courseInterested}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          ${phone ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ""}
          ${company ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td></tr>` : ""}
          ${courseInterested ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Course</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${courseInterested}</td></tr>` : ""}
          ${inquiryType ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Inquiry Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${inquiryType}</td></tr>` : ""}
        </table>
        <h3 style="margin-top: 20px;">Message</h3>
        <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 8px;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

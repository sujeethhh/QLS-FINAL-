import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
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

    // Notify admin about new subscriber
    await transporter.sendMail({
      from: `"QuickLearn Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "training@quicklearnsys.com",
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
        <p><strong>Subscribed at:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // Send confirmation to subscriber
    await transporter.sendMail({
      from: `"QuickLearn Systems" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to QuickLearn Newsletter!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: #4C0519; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">QuickLearn Systems</h1>
            <p style="color: #f9a8d4; margin: 5px 0 0;">Learn. Certify. Excel.</p>
          </div>
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #1f2937;">Thank you for subscribing!</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              You&apos;ll now receive updates about our latest courses, certifications, and training events.
            </p>
            <p style="color: #4b5563; line-height: 1.6;">
              Stay ahead in your career with QuickLearn&apos;s expert-led training programs.
            </p>
          </div>
          <div style="background: #f3f4f6; padding: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              &copy; ${new Date().getFullYear()} QuickLearn Systems. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Successfully subscribed!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}

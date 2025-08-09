import { Resend } from "resend";
import type { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with your verified domain
      to: ["exploraview.wes@gmail.com"], // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0;">Exploraview Wealth Enhancement Services</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1e3a8a; margin-top: 0; border-bottom: 2px solid #eab308; padding-bottom: 10px;">Contact Details</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 8px 0;"><strong style="color: #1e3a8a;">Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong style="color: #1e3a8a;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
                ${
                  company
                    ? `<p style="margin: 8px 0;"><strong style="color: #1e3a8a;">Company:</strong> ${company}</p>`
                    : ""
                }
                ${
                  phone
                    ? `<p style="margin: 8px 0;"><strong style="color: #1e3a8a;">Phone:</strong> <a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></p>`
                    : ""
                }
              </div>
              
              <h3 style="color: #1e3a8a; margin-top: 25px; margin-bottom: 15px;">Message:</h3>
              <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; border-left: 4px solid #eab308;">
                <p style="margin: 0; line-height: 1.6; color: #334155;">${message.replace(
                  /\n/g,
                  "<br>"
                )}</p>
              </div>
            </div>
          </div>
          
          <div style="background: #1e3a8a; padding: 20px; text-align: center;">
            <p style="color: #dbeafe; margin: 0; font-size: 14px;">
              This email was sent from the Exploraview contact form.
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

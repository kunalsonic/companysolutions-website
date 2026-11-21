import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, service, state, proposedName } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const leadRecord = {
      id: `lead_${Date.now()}`,
      createdAt: new Date().toISOString(),
      fullName: String(fullName).trim(),
      phone: String(phone).trim(),
      service: service || "General Inquiry",
      state: state || "Not specified",
      proposedName: proposedName || "N/A",
    };

    // 1. Save locally in JSON database (for backup)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "leads.json");
      let leads = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        leads = JSON.parse(fileContent || "[]");
      }

      leads.unshift(leadRecord);
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
    } catch (saveError) {
      console.error("Local persistence error (non-fatal):", saveError);
    }

    // 2. Dispatch Email Alert if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.ALERT_TO_EMAIL || "info@companysolutions.in";

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const formattedPhone = leadRecord.phone.replace(/[^0-9+]/g, "");
        const waLink = `https://wa.me/${formattedPhone.replace(/^\+/, "")}`;

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: #0f172a; padding: 24px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">COMPANY SOLUTIONS INDIA</h2>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px;">New Customer Lead / Consultation Request</p>
            </div>
            
            <div style="padding: 24px;">
              <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 8px 0; color: #1e293b; font-size: 16px;">Inquiry Details</h3>
                <p style="margin: 4px 0; font-size: 14px; color: #475569;"><strong>Client Name:</strong> ${leadRecord.fullName}</p>
                <p style="margin: 4px 0; font-size: 14px; color: #475569;"><strong>Phone / Mobile:</strong> <a href="tel:${formattedPhone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${leadRecord.phone}</a></p>
                <p style="margin: 4px 0; font-size: 14px; color: #475569;"><strong>Service Requested:</strong> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${leadRecord.service}</span></p>
                <p style="margin: 4px 0; font-size: 14px; color: #475569;"><strong>City / State:</strong> ${leadRecord.state}</p>
                ${leadRecord.proposedName !== "N/A" ? `<p style="margin: 4px 0; font-size: 14px; color: #475569;"><strong>Proposed Company Name:</strong> ${leadRecord.proposedName}</p>` : ""}
                <p style="margin: 4px 0; font-size: 12px; color: #94a3b8;"><strong>Timestamp:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="${waLink}" style="display: inline-block; background: #10b981; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Open Chat on WhatsApp</a>
                <a href="tel:${formattedPhone}" style="display: inline-block; background: #1e293b; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-left: 10px;">Direct Phone Call</a>
              </div>
            </div>

            <div style="background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              This notification was generated from <a href="https://www.companysolutions.in" style="color: #2563eb; text-decoration: none;">companysolutions.in</a>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Company Solutions Lead Alert" <${smtpUser}>`,
          to: toEmail,
          replyTo: toEmail,
          subject: `🚀 New Lead: ${leadRecord.fullName} (${leadRecord.service})`,
          html: htmlContent,
        });

        console.log(`[EMAIL ALERT] Sent notification to ${toEmail}`);
      } catch (emailError) {
        console.error("Email dispatch failed (non-fatal):", emailError);
      }
    } else {
      console.log(`[LEAD RECEIVED - NO SMTP] ${leadRecord.fullName} (${leadRecord.phone}) - Configure SMTP in environment variables for automatic email alerts.`);
    }

    return NextResponse.json({
      success: true,
      message: "Consultation request received successfully.",
      leadId: leadRecord.id,
    });
  } catch (error) {
    console.error("Lead API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing consultation request." },
      { status: 500 }
    );
  }
}

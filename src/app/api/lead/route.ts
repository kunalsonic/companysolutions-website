import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    // Persist lead to a secure local JSON database
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

      leads.unshift(leadRecord); // newest first
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
    } catch (saveError) {
      console.error("Error persisting lead locally:", saveError);
    }

    // Optional: Log inquiry in server terminal for real-time visibility
    console.log(`[NEW LEAD] ${leadRecord.fullName} (${leadRecord.phone}) - ${leadRecord.service}`);

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

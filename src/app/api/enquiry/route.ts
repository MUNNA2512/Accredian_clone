import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// A local JSON path to store lead data as a mock database/storage
const STORAGE_FILE = path.join("/tmp", "accredian_leads.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, courseDomain, candidates, mode, location } = body;

    // Direct field validation
    if (!name || !email || !phone || !company || !courseDomain || !candidates || !mode || !location) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const leadEntry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      courseDomain,
      candidates: parseInt(candidates, 10),
      mode,
      location,
      createdAt: new Date().toISOString(),
    };

    // 1. Mock DB: Save locally to /tmp/accredian_leads.json
    let currentLeads = [];
    try {
      if (fs.existsSync(STORAGE_FILE)) {
        const fileContent = fs.readFileSync(STORAGE_FILE, "utf-8");
        currentLeads = JSON.parse(fileContent);
      }
    } catch (e) {
      console.error("Failed to read existing leads storage file:", e);
    }

    currentLeads.push(leadEntry);

    try {
      fs.writeFileSync(STORAGE_FILE, JSON.stringify(currentLeads, null, 2), "utf-8");
      console.log(`[Enquiry API] Lead securely saved locally inside ${STORAGE_FILE}`);
    } catch (e) {
      console.error("Failed to save lead info locally:", e);
    }

    // 2. Integration: Forward in background to the Google App Script used in the reference site
    try {
      const googleGASUrl = "https://script.google.com/macros/s/AKfycbzndnuMbsuLzgM8Ew1I3-ZNKdwD7UAYIBNSj9wpf6DFN2LSJ88gMCPtqvntgAMFbv_q/exec";
      const formData = new URLSearchParams();
      formData.append("Fullname", name);
      formData.append("Email", email);
      formData.append("Phone", phone);
      formData.append("Company", company);
      formData.append("CourseDomain", courseDomain);
      formData.append("NoOfCandidates", candidates.toString());
      formData.append("Mode", mode);
      formData.append("Location", location);

      // We make a fetch call in background (non-blocking in client flow)
      fetch(googleGASUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          console.log("[Enquiry API] Forwarded to Google App Script webhook. Status:", res.status);
        })
        .catch((err) => {
          console.error("[Enquiry API] Google App Script forwarding failed:", err);
        });
    } catch (err) {
      console.error("[Enquiry API] Failed background forwarding setup:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully!",
      leadId: leadEntry.id,
    });
  } catch (error: any) {
    console.error("[Enquiry API] Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const { applicationId, email } = await request.json();

    // Build query based on provided fields
    const query: any = {};
    
    if (applicationId) {
      query.applicationId = applicationId;
    }
    
    if (email) {
      query.email = email;
    }

    if (!applicationId && !email) {
      return NextResponse.json(
        { error: "Please provide either Application ID or Email" },
        { status: 400 }
      );
    }

    const application = await db.collection("applications").findOne(query);

    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      applicationId: application.applicationId,
      email: application.email,
      firstName: application.firstName,
      lastName: application.lastName,
      program: application.program,
      status: application.status,
      submittedAt: application.submittedAt,
      lastUpdated: application.lastUpdated,
      notes: application.notes || "",
    });
  } catch (error) {
    console.error("Error fetching application status:", error);
    return NextResponse.json(
      { error: "Failed to fetch application status" },
      { status: 500 }
    );
  }
}

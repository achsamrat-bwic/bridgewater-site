import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, generateApplicationId } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    console.log("Attempting to connect to database...");
    const { db } = await connectToDatabase();
    console.log("Connected to database successfully");
    
    const formData = await request.json();
    console.log("Form data received:", formData);

    const applicationId = generateApplicationId();
    
    const applicationDoc = {
      applicationId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      address: formData.address,
      city: formData.city,
      program: formData.program,
      previousSchool: formData.previousSchool,
      previousGrade: formData.previousGrade,
      passedYear: formData.passedYear,
      parentName: formData.parentName,
      parentRelation: formData.parentRelation,
      parentPhone: formData.parentPhone,
      parentEmail: formData.parentEmail,
      parentOccupation: formData.parentOccupation,
      message: formData.message,
      status: "submitted",
      submittedAt: new Date(),
      lastUpdated: new Date(),
      notes: "",
    };

    console.log("Inserting document into applications collection...");
    const result = await db.collection("applications").insertOne(applicationDoc);
    console.log("Document inserted successfully:", result.insertedId);

    return NextResponse.json(
      {
        success: true,
        applicationId,
        message: "Application submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to submit application", details: errorMessage },
      { status: 500 }
    );
  }
}

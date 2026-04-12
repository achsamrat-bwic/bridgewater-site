import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { applicationId, email } = await request.json();

    if (!applicationId || !email) {
      return NextResponse.json({
        success: false,
        message: 'Application ID and email are required',
      }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const applicationsCollection = db.collection('applications');

    // Find application by ID and email
    const application = await applicationsCollection.findOne({
      applicationId,
      email,
    });

    if (!application) {
      return NextResponse.json({
        success: false,
        message: 'Application not found. Please check your Application ID and email.',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        applicationId: application.applicationId,
        fullName: application.fullName || `${application.firstName} ${application.lastName}`,
        status: application.status,
        createdAt: application.createdAt || application.submittedAt,
        lastUpdated: application.lastUpdated || application.updatedAt,
        notes: application.notes || '',
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Status check error:', error);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to check application status',
    }, { status: 500 });
  }
}

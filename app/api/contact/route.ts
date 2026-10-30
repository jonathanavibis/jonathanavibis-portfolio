import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    
    
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields" },
        { status: 400 }
      );
    }

    const newContact = await Contact.create(body);

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error: any) {
    console.error("Database connection or save error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
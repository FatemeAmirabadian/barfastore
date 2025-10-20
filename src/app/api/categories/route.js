import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json(categories);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/categories
export async function POST(req) {
  try {
    const data = await req.json();
    const category = await prisma.category.create({ data });
    return NextResponse.json({ success: true, category });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// PUT /api/categories
export async function PUT(req) {
  try {
    const data = await req.json();
    const category = await prisma.category.update({
      where: { id: data.id },
      data
    });
    return NextResponse.json({ success: true, category });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE /api/categories
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const category = await prisma.category.delete({ where: { id } });
    return NextResponse.json({ success: true, category });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/articles
export async function GET() {
  try {
    const articles = await prisma.article.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json(articles);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/articles
export async function POST(req) {
  try {
    const data = await req.json();
    const article = await prisma.article.create({ data });
    return NextResponse.json({ success: true, article });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// PUT /api/articles
export async function PUT(req) {
  try {
    const data = await req.json();
    const article = await prisma.article.update({
      where: { id: data.id },
      data
    });
    return NextResponse.json({ success: true, article });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE /api/articles
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const article = await prisma.article.delete({ where: { id } });
    return NextResponse.json({ success: true, article });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

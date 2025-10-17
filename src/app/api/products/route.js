import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/products
export async function GET() {
  try {
    const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/products
export async function POST(req) {
  try {
    const data = await req.json();
    const product = await prisma.product.create({ data });
    return NextResponse.json({ success: true, product });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// PUT /api/products
export async function PUT(req) {
  try {
    const data = await req.json();
    const product = await prisma.product.update({
      where: { id: data.id },
      data
    });
    return NextResponse.json({ success: true, product });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE /api/products
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const product = await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true, product });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

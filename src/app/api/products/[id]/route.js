// import { NextResponse } from "next/server";

// export async function GET(request, { params }) {
//   const productId = parseInt(params.id);
//   const product = products.find(p => p.id === productId);
//   if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
//   return NextResponse.json(product);
// }

// export async function PUT(request, { params }) {
//   const productId = parseInt(params.id);
//   const product = products.find(p => p.id === productId);
//   if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });

//   const { name, price } = await request.json();
//   if (name) product.name = name;
//   if (price) product.price = price;
//   return NextResponse.json(product);
// }

// export async function DELETE(request, { params }) {
//   const productId = parseInt(params.id);
//   const product = products.find(p => p.id === productId);
//   if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });

//   products = products.filter(p => p.id !== productId);
//   return NextResponse.json({}, { status: 204 });
// }

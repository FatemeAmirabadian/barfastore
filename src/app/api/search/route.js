import { NextResponse } from "next/server";
import { products } from "../../../../data/products";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return NextResponse.json(results.slice(0, 5));
}

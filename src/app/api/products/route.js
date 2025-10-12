import { NextResponse } from 'next/server';
import { products } from '../../../../data/products';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const newProduct = await request.json();
    
    // اضافه کردن محصول جدید
    products.push({
      ...newProduct,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'محصول با موفقیت اضافه شد',
      product: newProduct 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'خطا در اضافه کردن محصول' },
      { status: 500 }
    );
  }
}


export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const productToDelete = products.find(p => p.id === id);
    
    if (!productToDelete) {
      return NextResponse.json(
        { success: false, error: 'محصول یافت نشد' },
        { status: 404 }
      );
    }
    const filteredProducts = products.filter(p => p.id !== id);
    products.length = 0;
    products.push(...filteredProducts);
    return NextResponse.json({ 
      success: true, 
      message: 'محصول با موفقیت حذف شد',
      product: productToDelete 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'خطا در حذف کردن محصول' },
      { status: 500 }
    );
  }
}
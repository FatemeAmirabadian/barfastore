import Image from "next/image";
import { formatPriceToFarsi, getProductBySlug } from "../../lib/helpers";
import { getDiscountedPrice } from "../../lib/helpers";
import PublicLayout from "./layouts/PublicLayout";
import HeartButton from "./elements/HeartButton";
import ColorSelector from "./elements/ColorSelector";
import ProductTabs from "./elements/ProductTabs";
import Link from "next/link";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  const imageUrl =
    product.images?.[0]?.url || "https://via.placeholder.com/150";
  if (!product) {
    return <p className="text-center mt-10">محصول یافت نشد</p>;
  }

  const hasDiscount =
    product.discountPercent > 0 &&
    (!product.discountEnd || new Date(product.discountEnd) >= new Date());

  return (
    <PublicLayout>
      <div className=" bg-white overflow-hidden transition grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-5 mb-50 md:mb-0 mx-auto">
        <div className=" relative w-full h-[50vh] order-1 md:order-2 mb-5 md:mb-0">
          {/* تصویر */}
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
          {/* بج درصد تخفیف */}
          {hasDiscount && (
            <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-full flex flex-row-reverse items-center gap-1">
              <span>{formatPriceToFarsi(product.discountPercent)}</span>
              <span>درصد</span>
            </div>
          )}
        </div>
        {/* نام و دسته بندی محصول */}
        <div className="order-2 md:order-1 md:col-span-2  px-2">
          <div className="flex justify-between items-center border-b border-gray-300 md:border-hidden pb-3">
            <HeartButton />
            <div>
              <p className="text-xl text-right">{product.name}</p>
              <p className="text-sm text-gray-500 text-right">
                {product.category.name}
              </p>
            </div>
          </div>
          {/* انتخاب رنگ و تب های محصول */}
          <ColorSelector colors={product.colors} />
          <ProductTabs product={product} />
        </div>
      </div>
      {/*  قیمت با و بدون تخفیف و افزودن به سبد خرید در حالت موبایل*/}
      <div className="fixed left-0 bottom-0 h-[20vh] w-full bg-white text-center rounded-t-lg border-t border-gray-100 z-30 md:hidden">
        <div className="flex justify-between px-3">
          <Link href="/cart">
            <div className="mt-2 bg-purple-500 text-white rounded-xl p-2 mt-2 flex items-center justify-center w-full">
              افزودن به سبد خرید
            </div>
          </Link>

          <div className="flex flex-col justify-center items-center">
            {product.discountPercent > 0 &&
            new Date(product.discountEnd) >= new Date() ? (
              <>
                <span className="text-gray-400 line-through text-md">
                  {formatPriceToFarsi(product.price)}
                </span>
                <div className="flex">
                  <span className="text-purple-700 font-semibold px-1">
                    تومان
                  </span>
                  <span className="text-purple-700 font-bold text-lg">
                    {formatPriceToFarsi(
                      getDiscountedPrice(product.price, product.discountPercent)
                    )}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex">
                <span className="text-purple-700 font-semibold px-1">
                  تومان
                </span>
                <span className="text-purple-700 font-semibold">
                  {formatPriceToFarsi(product.price)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*  قیمت با و بدون تخفیف و افزودن به سبد خرید در حالت دسکتاپ*/}
      <div className="hidden md:block  max-w-7xl mx-auto bg-white">
        <div className="flex justify-between p-10 border-t border-gray-100">
          <Link href="/cart">
            <div className="mt-2 bg-purple-500 text-white rounded-xl p-3 flex items-center justify-center w-full">
              افزودن به سبد خرید
            </div>
          </Link>

          <div className="flex flex-col justify-center items-center">
            {product.discountPercent > 0 &&
            new Date(product.discountEnd) >= new Date() ? (
              <>
                <span className="text-gray-400 line-through text-xl">
                  {formatPriceToFarsi(product.price)}
                </span>
                <div className="flex">
                  <span className="text-purple-700 font-semibold px-1">
                    تومان
                  </span>
                  <span className="text-purple-700 font-bold text-xl">
                    {formatPriceToFarsi(
                      getDiscountedPrice(product.price, product.discountPercent)
                    )}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex">
                <span className="text-purple-700 font-semibold px-1">
                  تومان
                </span>
                <span className="text-purple-700 font-semibold">
                  {formatPriceToFarsi(product.price)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

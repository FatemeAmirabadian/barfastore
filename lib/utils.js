
export function formatPriceToFarsi(num) {
    if (!num) return "";
  
    // تبدیل عدد به رشته و اضافه کردن جداکننده هزار با ریجکس
    let str = Math.floor(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // تبدیل اعداد لاتین به فارسی
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str.replace(/\d/g, (d) => farsiDigits[d]);
  }
  
  
export function getDiscountedPrice(price, discountPercent = 0) {
    if (!price) return null;
    return discountPercent > 0
      ? Math.round(price * (1 - discountPercent / 100))
      : price;
  }

  
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

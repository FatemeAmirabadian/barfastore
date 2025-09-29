import Link from "next/link";
import MobileNavigationBar from "./MobileNavigationBar";

const Navigation = () => {
  return (
    <>
      {/* موبایل: navigation پایین صفحه */}
      <MobileNavigationBar />

      {/* دسکتاپ: navigation کنار لوگو */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/">جستجو</Link>
        <Link href="/profile">حساب کاربری</Link>
        <Link href="/cart">سبدخرید</Link>
      </div>
    </>
  );
};

export default Navigation;

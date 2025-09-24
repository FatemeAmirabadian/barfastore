import MobileNavigationBar from "./MobileNavigationBar";


const Navigation = () => {
  return (
    <>
      {/* موبایل: navigation پایین صفحه */}
      <MobileNavigationBar/>

      {/* دسکتاپ: navigation کنار لوگو */}
      <div className="hidden md:flex gap-6 items-center">
        <button>جستجو</button>
        <button>حساب کاربری</button>
        <button>سبدخرید</button>
      </div>
    </>
  );
};

export default Navigation;

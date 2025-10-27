import { BsThreeDots } from "react-icons/bs";
import { formatPriceToFarsi } from "../../../../lib/utils";
import DashboardCard from "./DashboardCard";
import { BadgeDollarSign, ShoppingBag, UserCircle } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import { getProducts } from "../../../../lib/helpers";

const AnalyticsDashboard = async () => {
  const products = await getProducts()
  const newproducts = await products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,10);
  return (
    <div className="flex flex-col gap-2 w-full md:w-[80vw] mt-15 md:mt-0">
        <div className="grid grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-3 gap-3 text-sm text-gray-500">
          <DashboardCard
            className="col-span-1 row-span-1 col-start-1 row-start-1"
            variant="orange"
            icon={BadgeDollarSign}
            title="کل فروش ها"
          >
            <span className="flex justify-between items-center">
              <span className="text-black">
                {formatPriceToFarsi(451158)} تومان
              </span>
              <span className="flex flex-col items-center text-[10px] leading-tight">
                <span className="text-red-500">-3.47%</span>
                <span className="text-gray-500">از هفته پیش</span>
              </span>
            </span>
          </DashboardCard>
          <DashboardCard
            className="col-span-1 row-span-1 col-start-2 row-start-1"
            icon={ShoppingBag}
            title="کل سفارش ها"
          >
            <span className="flex justify-between items-center">
              <span className="text-black">{formatPriceToFarsi(458)}</span>
              <span className="flex flex-col items-center text-xs">
                <span className="text-red-500">-3.47%</span>
                <span className="text-gray-500">از هفته پیش</span>
              </span>
            </span>
          </DashboardCard>
          <DashboardCard
            className="col-span-1 row-span-1 col-start-1 row-start-4 md:col-start-3 md:row-start-1"
            icon={UserCircle}
            title="کل بازدید ها"
          >
            <span className="flex justify-between items-center">
              <span className="text-black">{formatPriceToFarsi(425158)}</span>
              <span className="flex flex-col items-center text-xs">
                <span className="text-red-500">-3.47%</span>
                <span className="text-gray-500">از هفته پیش</span>
              </span>
            </span>
          </DashboardCard>
          <DashboardCard
            className="col-span-1 row-span-3 col-start-2 row-start-4 md:col-start-4 md:row-start-1"
            title="جدیدترین محصولات"
          >
            {newproducts.map((p,index)=>(<div key={index} className="text-center">{p.name}</div>))}
          </DashboardCard>
          <DashboardCard
            className="col-span-2 row-span-2  md:col-start-1 md:row-start-2"
            title="انالیز درامد"
          >
            <button className="col-span-2 bg-orange-500 text-white p-1 rounded-sm flex items-center">
              <FaAngleDown /> هفته گذشته
            </button>
          </DashboardCard>
          <DashboardCard
            className="col-span-1 row-span-2 md:col-start-3 md:row-start-2"
            title="تارگت ماهانه"
            icon={BsThreeDots}
          >
          </DashboardCard>
        </div>
      </div>
  )
}

export default AnalyticsDashboard

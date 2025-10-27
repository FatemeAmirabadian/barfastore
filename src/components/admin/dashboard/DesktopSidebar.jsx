import Logo from '@/components/elements/Logo'
import { Settings2Icon, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { BsBasket, BsBoxSeam } from 'react-icons/bs'
import { RiAppsLine, RiArticleLine } from 'react-icons/ri'
import { TbRosetteDiscount } from 'react-icons/tb'

const DesktopSidebar = () => {
  return (
    <div className="hidden md:block md:fixed top-0 right-0 h-full w-[15vw] bg-gray-100 shadow-md p-5 flex flex-col">
        <Logo />
        <div className="my-5 space-y-2 border-b">
          <button className="flex items-center gap-5 bg-orange-400 text-white rounded-lg w-full p-2">
            <RiAppsLine size={20} />
            <span>داشبورد</span>
          </button>
          <Link
            href={"/admin/products"}
            className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
          >
            <BsBoxSeam size={20} />
            محصولات
          </Link>
          <Link
            href={"/admin"}
            className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
          >
            <Users size={20} />
            کاربران
          </Link>
          <Link
            href={"/admin"}
            className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
          >
            <BsBasket size={20} />
            سفارشات
          </Link>
          <Link
            href={"/admin/categories"}
            className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
          >
            <BiCategoryAlt size={20} />
            دسته بندی ها
          </Link>
          <Link
            href={"/admin/articles"}
            className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
          >
            <RiArticleLine size={20} />
            مقالات
          </Link>
          <Link
            href={"/admin/discounts"}
            className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
          >
            <TbRosetteDiscount size={20} />
            تخفیفات
          </Link>
        </div>
        <Link
          href={"/admin/discounts"}
          className="flex items-center gap-5 rounded-lg w-full p-2 hover:bg-orange-400 hover:text-white transition"
        >
          <Settings2Icon size={20} />
          تنظیمات
        </Link>
      </div>
  )
}

export default DesktopSidebar

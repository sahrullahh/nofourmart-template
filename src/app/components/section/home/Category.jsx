"use client";
import { Icon } from "@iconify/react";
import CardCategory from "./Card/CardCategory";

export default function Category() {
  const categories = [
    {
      id: 1,
      title: "Fruits and Vegetables",
      images: "/images/categories/homepage-new-cat-1.png",
    },
    {
      id: 2,
      title: "Breads Sweets",
      images: "/images/categories/homepage-new-cat-2.png",
    },
    {
      id: 3,
      title: "Frozen Seafoods",
      images: "/images/categories/homepage-new-cat-3.png",
    },
    {
      id: 4,
      title: "Raw Meats",
      images: "/images/categories/homepage-new-cat-4.png",
    },
    {
      id: 5,
      title: "Milk and Dairies",
      images: "/images/categories/homepage-new-cat-7.png",
    },
    {
      id: 6,
      title: "Coffee and Teas",
      images: "/images/categories/homepage-new-cat-6.png",
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-[80%] mx-auto mt-20">
        <div className="flex gap-5 items-center">
          <h2 className="text-3xl font-medium tracking-tighter text-neutral-800 ">
            Browse by Category
          </h2>
          <button className="font-normal ml-5 flex items-center gap-2 text-gray-400 hover:text-theme-primary">
            <span>All Categories</span>
            <Icon icon="fa6-solid:angle-right" />
          </button>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {categories.map((item, index) => (
            <CardCategory
              title={item.title}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

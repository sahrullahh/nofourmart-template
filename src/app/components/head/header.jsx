"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function header() {
  const categories = ["Daily Deals", "Top Promotions", "New Arrivals"];
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const data = [
    {
      id: 1,
      name: "Beras MT",
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = data.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  return (
    <div className="bg-white w-full border-b">
      <div className="w-full border-b pt-2 pb-2">
        <div className="max-w-[80%] mx-auto flex items-center justify-between gap-5">
          <div className="flex gap-5">
            <span className="flex gap-2 items-center ">
              <Icon icon="prime:map-marker" />
              <p className="text-sm text-gray-500">
                Bondowoso, kembang, Jawa Timur 68219
              </p>
            </span>
            <div className="w-[1px] h-[10px] bg-gray-400 translate-y-1"></div>
            <span className="flex gap-2 items-center ">
              <Icon icon="tdesign:call-1" />
              <p className="text-sm text-gray-500">62+ 85 731 617 852</p>
            </span>
          </div>
          <div className="flex gap-5">
            <span className="flex gap-2 items-center ">
              <Icon icon="fluent:phone-16-regular" />
              <p className="text-sm text-gray-500">Download app</p>
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="border-b w-full">
        <div className="max-w-[80%] mx-auto">
          <div className="flex justify-between items-center pt-8 pb-8 gap-10">
            <div className="w-[20%]">
              <h2 className="font-bold tracking-tighter text-neutral-700 text-2xl">
                Nofour<span className="text-[#FAB528]">Mart</span>
              </h2>
              <small className="text-xs text-gray-500">GROCERY</small>
            </div>
            <div className="bg-[#F3F3F3] w-full flex gap-3 p-1 rounded-md">
              <select
                name=""
                id=""
                className="bg-[#F3F3F3] text-sm px-3 py-2.5 tracking-tighter text-neutral-600"
              >
                <option value=""> ALL CATEGORIES</option>
              </select>
              <div className="w-[1px] h-[23px] bg-gray-400 translate-y-2"></div>
              <input
                type="text"
                onChange={handleSearch}
                value={query}
                className="px-5 w-full py-2.5 bg-[#F3F3F3] text-sm outline-none "
                placeholder="i'm searching for..."
              />
              <div></div>
              <button className="">
                <Icon
                  icon="lets-icons:search-light"
                  className="text-2xl mr-4 text-gray-800"
                />
              </button>
            </div>
            <div className="text-right w-[20%] items-center flex gap-8 ">
              <span className="relative">
                <Icon
                  icon="mdi-light:cart"
                  className="text-3xl text-gray-800"
                />
                <span className="bg-[#FAB528] text-sm p-3 flex items-center justify-center text-white w-8 h-8 absolute -top-5 left-3  rounded-full">
                  0
                </span>
              </span>
              <span>
                <Icon
                  icon="clarity:bell-line"
                  className="text-3xl text-gray-800"
                />
              </span>
              <span className="flex gap-3 items-center">
                <Icon
                  icon="solar:user-outline"
                  className="text-3xl text-gray-800"
                />
                <div className="text-left">
                  <p className="text-sm text-gray-500">Login</p>
                  <h2 className="font-semibold">User</h2>
                </div>
              </span>

              {/* <span className="text-left">
                <p className="text-xs font-semibold text-gray-500">Your cart</p>
                <h2 className="text-lg font-bold">Rp.0,00</h2>
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto ">
        <div className="pt-3 pb-3 flex gap-10 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-[#FAB528]  outline-none flex items-center text-sm px-5 py-3 tracking-tighter rounded-sm text-neutral-800  gap-5">
              <span>
                <Icon
                  icon="codicon:menu"
                  className="text-2xl text-gray-800"
                />
              </span>
              <span className="font-semibold">SHOP BY CATEGORY</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 divide-y px-3 pt-2 pb-2">
              {categories.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="py-3 cursor-pointer"
                >
                  <p>{item}</p>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-5 items-center">
              <NavigationMenuItem>
                <Link
                  href="/"
                  legacyBehavior
                  passHref
                >
                  <div className="flex gap-2 items-center">
                    <Icon icon="bytesize:lightning" />
                    <NavigationMenuLink>Best Deal</NavigationMenuLink>
                  </div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-5 items-center">
              <NavigationMenuItem>
                <Link
                  href="/"
                  legacyBehavior
                  passHref
                >
                  <div className="flex gap-2 items-center">
                    <Icon icon="fluent:tag-24-regular" />
                    <NavigationMenuLink>Special Prices</NavigationMenuLink>
                  </div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Fresh
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Frozen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Warm
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}

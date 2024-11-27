"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full " ref={navRef}>
      {PRODUCT_CATEGORIES.map((product, index) => {
        const handleopen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;
        return (
          <NavItem
            category={product}
            key={index}
            close={() => setActiveIndex(null)}
            isOpen={isOpen}
            handleOpen={handleopen}
            isAnyOpen={activeIndex !== null}
          />
        );
      })}
    </div>
  );
};

export default NavItems;

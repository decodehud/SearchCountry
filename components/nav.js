"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="md:flex justify-between backdrop-blur-sm backdrop-saturate-200 bg-white/80 dark:bg-[#0d1117]/50 p-4 rounded-lg ">
        <div className="flex justify-between">
          <div className="font-semibold text-2xl text-primary">
            <Link href="/">SearchCountrie</Link>
          </div>

          <div className="md:hidden">
            <ThemeSwitch />
          </div>
        </div>

        <div className="hidden md:block right-5 ">
          <ThemeSwitch />
        </div>
      </div>
    </section>
  );
};

export default Nav;

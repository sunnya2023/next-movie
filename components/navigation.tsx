"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "❤️" : null}
        </li>
        <li>
          <Link href="/about-us">About us</Link>
          {path === "/about-us" ? "❤️" : null}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

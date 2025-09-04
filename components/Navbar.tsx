"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import MobileMenu from "./MobileMenu"
import { useState } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        {/* logo now points at “/” */}
        <Link href="/">
          <Image src="/sensai.svg" alt="logo" width={300} height={150} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Partner with us"
            variant="btn_green"
            href="#partner"
          />
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-block cursor-pointer lg:hidden"
        >
          <Image 
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </button>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}

export default Navbar

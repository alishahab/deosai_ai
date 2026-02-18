"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden">
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 bg-black bg-opacity-60 hover:bg-opacity-30 rounded-full"
          >
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="regular-16 text-gray-800 flex items-center cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button 
              type="button"
              title="Partner with us"
              variant="btn_green"
              href="#partner"
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
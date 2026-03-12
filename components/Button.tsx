"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

const Button = ({ type, title, icon, variant, full, href, onClick }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
      </Link>
    );
  }

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};


export default Button
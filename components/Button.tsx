import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
}

import Link from "next/link";

const Button = ({ type, title, icon, variant, full, href }: ButtonProps) => {
  if (href) {
    // Render a <Link> without an <a> tag
    return (
      <Link href={href} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
      </Link>
    );
  }

  // Render a <button> tag if no href is provided
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};


export default Button
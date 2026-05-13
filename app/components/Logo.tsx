import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  light?: boolean;
};

const sizes = {
  sm: { img: 36, word: "text-lg" },
  md: { img: 44, word: "text-xl" },
  lg: { img: 56, word: "text-2xl" },
};

export default function Logo({
  showWordmark = true,
  size = "md",
  className = "",
  onClick,
  light = false,
}: LogoProps) {
  const s = sizes[size];

  return (
    <Link href="/" onClick={onClick} className={`group flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="GreenTheory logo"
        width={s.img}
        height={s.img}
        className="rounded-lg transition-transform group-hover:scale-105"
        priority
      />
      {showWordmark && (
        <span
          className={`font-display font-semibold tracking-tight ${s.word} ${
            light ? "text-cream" : "text-forest"
          }`}
        >
          Green<span className={light ? "text-sage-light" : "text-moss"}>Theory</span>
        </span>
      )}
    </Link>
  );
}

"use client";

import Image from "next/image";
import clsx from "clsx";

const PHOTO = "/Images/IMG_20260611_130038_714.webp";

type Props = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function CreatorImage({ className, priority = false, sizes = "(max-width: 768px) 90vw, 420px" }: Props) {
  return (
    <div className={clsx("relative w-full h-full overflow-hidden bg-surface", className)}>
      <Image
        src={PHOTO}
        alt="Sneha Jayabhaye — Founder & Creative Director, Sunentrix"
        fill
        priority={priority}
        sizes={sizes}
        quality={90}
        className="object-cover object-center"
      />
      {/* Soft warm overlay to blend with the palette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c2e]/15 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

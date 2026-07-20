import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      alt="KAJA"
      className={className}
      height={963}
      priority={priority}
      src="/brand/kaja-logo.png"
      width={4382}
    />
  );
}

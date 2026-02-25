
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  logoSrc?: string;
};

export default function Header({ logoSrc = "/images/Logo3.svg" }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-6">
          
          <Link href="/">
          <div className="flex items-center">
            <Image
              src={logoSrc}
              alt="HAVEN"
              width={200}
              height={40}
              className="h-auto"
            />
          </div>
        </Link>
        </div>
      </div>
    </header>
  );
}
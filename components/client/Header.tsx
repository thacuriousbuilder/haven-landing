
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-6">
          
          <Link href="/">
          <div className="flex items-center">
            <Image
              src="/images/HAVEN.svg"
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
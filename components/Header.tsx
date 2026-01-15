
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Logo3.svg"
              alt="HAVEN"
              width={200}
              height={40}
              className="h-auto"
            />
          </div>

        </div>
      </div>
    </header>
  );
}
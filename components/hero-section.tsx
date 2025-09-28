import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              CHARGE
              <br />
              YOUR DEVICES
              <br />
              <span className="">ANYWHERE</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md">The most affordable powerbank service in Britain.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://apps.apple.com" target="_blank" className="">
                <Image src="/images/appstore.jpeg" alt="App store" width={150} height={50} className="w-40 rounded-md h-12 object-cover" />
              </Link>
              <Link href="https://play.google.com/store/apps" target="_blank" className="">
                <Image src="/images/palystore.jpeg" alt="Play store" width={150} height={50} className="w-40 rounded-md h-12 object-cover" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/banner.png"
                alt="Blue powerbank with QR code"
                width={400}
                height={400}
                className="w-full max-w-md mx-auto bg-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

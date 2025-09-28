import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaApple } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              CHARGE
              <br />
              YOUR DEVICES
              <br />
              <span className="text-purple-600">ANYWHERE</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md">The most affordable powerbank service in Britain.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-12 py-6 rounded-lg">
                <FaApple className="!w-5 !h-5" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on the</p>
                  <p className="text-base">App Store</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 py-6 rounded-lg"
              >
                <Image src="/images/google-play.png" alt="Paly store" width={20} height={20} />
                <div className="text-left">
                  <p className="text-xs opacity-80">Get it on</p>
                  <p className="text-base">Google Play</p>
                </div>
              </Button>
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

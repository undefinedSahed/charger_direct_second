import { Zap } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Always charged devices",
  "24/7 availability",
  "Convenient locations",
  "Ease of use",
  "Sustainability (environmentally friendly solution)",
  "Return to any station",
]

export default function BenefitsSection() {
  return (
    <section className="text-white">
      <div className="grid lg:grid-cols-3 w-full items-center rounded-3xl">
        <div className="relative w-full lg:col-span-1">
          <Image
            src="/images/pp.png"
            alt="Phone and powerbank"
            width={400}
            height={400}
            className="w-full aspect-square lg:aspect-[5/7] object-cover"
          />
        </div>

        <div className="space-y-6 bg-[#1f1a44] h-full place-content-center lg:col-span-2 lg:pl-32 p-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Zap className="w-6 h-6 text-white flex-shrink-0" fill="white" />
              <span className="text-xl font-bold">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

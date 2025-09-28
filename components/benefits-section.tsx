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
    <section className="benefits-dark py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/phone-powerbank.png"
              alt="Phone and powerbank"
              width={400}
              height={400}
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

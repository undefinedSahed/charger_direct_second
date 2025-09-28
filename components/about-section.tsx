import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="space-y-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide">ABOUT US</p>
              <h2 className="text-4xl font-bold text-gray-900">
                About
                <br />
                Charger D<span className="text-purple-600">i</span>rect
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="text-xl">
                Charger Direct is a licensed power bank service providing power bank rental machines to hospitals and f&b venues across Britain.
              </p>
              <p className="text-xl">
                Our network of power bank stations are owned and operated directly by Charger Direct LTD.
              </p>
            </div>
          </div>

          <div className="">
            <div className="space-y-4">
              <Image
                src="/images/products.png"
                alt="White charging station"
                width={150}
                height={200}
                className="w-full aspect-[5/4] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

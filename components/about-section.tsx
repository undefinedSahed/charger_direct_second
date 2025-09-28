import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wide">ABOUT US</p>
              <h2 className="text-4xl font-bold text-gray-900">
                About
                <br />
                Charger D<span className="text-purple-600">i</span>rect
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Charger Direct is a British company that provides affordable powerbank rental services across the UK.
                Our mission is to keep your devices charged wherever you go.
              </p>
              <p>
                With our network of charging stations in hospitals, F&B venues, and other convenient locations, you'll
                never have to worry about a dead battery again.
              </p>
              <p>
                Our environmentally friendly solution promotes sustainability while offering the convenience and
                reliability you need in today's connected world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/white-charging-station-kiosk.jpg"
                alt="White charging station"
                width={150}
                height={200}
                className="w-full rounded-lg"
              />
              <Image
                src="/images/charging-stations-multiple.png"
                alt="Multiple charging stations"
                width={150}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src="/images/charging-station-black.png"
                alt="Black charging station"
                width={150}
                height={200}
                className="w-full rounded-lg"
              />
              <Image
                src="/compact-white-charging-station.jpg"
                alt="Compact charging station"
                width={150}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

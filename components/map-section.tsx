export default function MapSection() {
  return (
    <section className="map-section py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Britain is
              <br />
              covered
            </h2>
            <p className="text-lg opacity-90">
              Find our charging stations across the UK in hospitals, restaurants, cafes, and other convenient locations.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/30 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="text-white/80">Interactive map coming soon</p>
                <p className="text-sm text-white/60">View all charging station locations across Britain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

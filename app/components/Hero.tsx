import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[70vh] w-full">
        <Image
          src="/hero/hero-power-unit.png"
          alt="Engineered power generation and distribution system"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/55" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white max-w-2xl">
            Engineering reliable energy systems for a sustainable future
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl">
            Unithium Energy Systems designs and deploys dependable power solutions
            for industrial, commercial, and emerging energy needs.
          </p>
          <a
            href="/projects"
            className="inline-block mt-6 rounded-md bg-unithiumGreen px-6 py-3 text-white font-medium"
          >
            Explore our solutions →
          </a>
        </div>
      </div>
    </section>
  );
}

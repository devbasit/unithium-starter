import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 items-center">
        <Image
          src="/about/about-installation.png"
          alt="Unithium Energy Systems engineering installation"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold text-unithiumBlue">
            About Unithium
          </h2>
          <p className="mt-4 text-gray-600">
            Unithium Energy Systems is an engineering-driven company focused on
            delivering dependable and efficient energy solutions.
          </p>
          <p className="mt-4 text-gray-600">
            Our work spans system design, deployment, and optimization, with a
            strong emphasis on safety, sustainability, and operational
            reliability.
          </p>

          <a
            href="/about"
            className="inline-block mt-6 text-unithiumGreen font-medium"
          >
            Learn more about Unithium →
          </a>
        </div>
      </div>
    </section>
  );
}

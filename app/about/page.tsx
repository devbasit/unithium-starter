import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Unithium Energy Systems",
  description:
    "Learn about Unithium Energy Systems, an engineering-driven company delivering reliable, efficient, and future-ready energy solutions.",
};

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          About Unithium
        </h1>

        {/* Intro */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Unithium Energy Systems is an engineering-driven company focused on
          delivering dependable, efficient, and future-ready energy solutions.
          We design and deploy power systems that prioritize reliability,
          safety, and long-term operational performance.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our work spans energy system design, deployment, optimization, and
          lifecycle support. By combining sound engineering principles with
          modern technologies, we help organizations build resilient energy
          infrastructure suited for today’s demands and tomorrow’s growth.
        </p>

        {/* Vision */}
        <section className="mt-12">
          <h2 className="text-2xl font-medium text-unithiumBlue">
            Our Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To be a trusted provider of reliable and intelligent energy systems,
            enabling sustainable operations and resilient infrastructure across
            industries.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-10">
          <h2 className="text-2xl font-medium text-unithiumBlue">
            Our Mission
          </h2>
          <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
            <li>
              Design and deploy energy systems that deliver consistent,
              dependable power under real-world operating conditions.
            </li>
            <li>
              Apply engineering best practices to improve system safety,
              efficiency, and maintainability.
            </li>
            <li>
              Integrate modern technologies and data-driven insights to optimize
              energy performance and reliability.
            </li>
            <li>
              Build long-term partnerships through transparency, technical
              competence, and operational excellence.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Unithium Energy Systems",
  description:
    "Explore career opportunities at Unithium Energy Systems and be part of building reliable, future-ready energy infrastructure.",
};

export default function CareersPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          Careers at Unithium
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          At Unithium Energy Systems, we are building a team of engineers,
          technologists, and problem-solvers passionate about reliable and
          sustainable energy systems.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          We value technical depth, safety-conscious design, and a disciplined
          engineering mindset. As we grow, we are always interested in working
          with individuals who share our commitment to operational excellence.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-unithiumBlue">
            Opportunities
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We do not have open roles listed at the moment. However, we welcome
            expressions of interest from professionals in power systems,
            renewable energy, electrical engineering, software, and operations.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-medium text-unithiumBlue">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            If you are interested in future opportunities, please reach out via
            our contact page with your background and area of interest.
          </p>
        </section>
      </div>
    </main>
  );
}

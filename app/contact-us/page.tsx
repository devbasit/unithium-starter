import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Contact Unithium Energy Systems",
  description:
    "Get in touch with Unithium Energy Systems to discuss energy solutions, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          We welcome inquiries related to energy system design, project
          collaboration, partnerships, and general information about Unithium
          Energy Systems.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-medium text-unithiumBlue">
            General Enquiries
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For general questions or to start a conversation, please reach out
            via email:
          </p>

          <p className="mt-2 text-gray-800 font-medium">
            unithiumpower@gmail.com
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-medium text-unithiumBlue">
            Project Discussions
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            If you are interested in future opportunities, please reach out via our{" "}
            <Link
              href="/contact-us"
              className="text-unithiumBlue hover:underline"
            >
              contact page
            </Link>{" "}
            with your background and area of interest.
          </p>
        </section>
      </div>
    </main>
  );
}

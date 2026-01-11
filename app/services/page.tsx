import ServiceCarousel from "../components/ServiceCarousel";

export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">Services</h1>
        <p className="mt-4 text-gray-700">Explore our services below.</p>
        <div className="mt-8">
          <ServiceCarousel />
        </div>
      </div>
    </main>
  );
}

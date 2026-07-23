import type { Metadata } from "next";
import ServicesCatalog from "@/components/ServicesCatalog";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HydraFacial, laser, injectables, and skin renewal treatments at Aesthetics Labs.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Treatments designed around real skin goals"
          description="Browse our core menu, then book a consultation so we can tailor a plan to your skin type, timeline, and comfort level."
        />
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <ServicesCatalog />
      </section>
    </div>
  );
}

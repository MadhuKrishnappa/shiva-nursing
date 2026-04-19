import Hero from "./component/hero";
import InstituteOverview from "./component/institute-overview";
import WhyChooseUs from "./component/why-choose-us";
import CourseHighlights from "./component/course-highlights";
import AdmissionCTA from "./component/admission-cta";
import ContactSection from "./component/contact-section";
import InnovativeGallery from "./component/gallery";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Institute Overview */}
      <section id="about">
        <InstituteOverview />
      </section>

      {/* Institute Overview */}
      <section id="gallery">
        <InnovativeGallery />
      </section>

      {/* Why Choose Us */}
      <section id="why">
        <WhyChooseUs />
      </section>

      {/* Course Highlights */}
      <section id="courses">
        <CourseHighlights />
      </section>

       {/* Admission CTA */}
      <section id="admission">
        <AdmissionCTA />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
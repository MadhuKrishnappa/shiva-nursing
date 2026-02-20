import Hero from "./component/hero";
import InstituteOverview from "./component/institute-overview";
import WhyChooseUs from "./component/why-choose-us";
import CourseHighlights from "./component/course-highlights";
import AdmissionCTA from "./component/admission-cta";
import ContactSection from "./component/contact-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Institute Overview */}
      <InstituteOverview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Course Highlights */}
      <CourseHighlights />

      {/* Admission CTA */}
      <AdmissionCTA />

      {/* Contact */}
      <ContactSection />
    </>
  );
}

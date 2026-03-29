// src/App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/VideoEditorHero";
import WorkGallery from "./components/WorkGallery";
import AboutContact from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="scroll-mt-0">
          <HeroSection />
        </section>

        {/* Work Gallery Section */}
        <section id="gallery" className="scroll-mt-20">
          <WorkGallery />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <AboutContact />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="scroll-mt-20">
          <TestimonialSection />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
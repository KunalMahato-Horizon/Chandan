// src/App.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/VideoEditorHero";
// import ServiceSlates from "./components/FilmSlateServices";
import WorkGallery from "./components/WorkGallery";
import MarqueeShowcase from "./components/ContentMarquee";
import InteractiveAboutContact from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-blue-600 selection:text-white">
      {/* Custom Cursor - Add this at the root level */}
      <CustomCursor />
      
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="scroll-mt-0">
          <HeroSection />
        </section>

        {/* Services Section */}
        {/* <section id="services" className="scroll-mt-20">
          <ServiceSlates />
        </section> */}

        {/* Work Gallery Section */}
        <section id="gallery" className="scroll-mt-20 border-t border-white/5">
          <WorkGallery />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <InteractiveAboutContact />
        </section>

        {/* Testimonials Section */}
        <section id="skills" className="scroll-mt-20">
          <MarqueeShowcase />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
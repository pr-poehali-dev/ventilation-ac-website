import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ContentSections from '@/components/sections/ContentSections';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <main className="pt-16">
        <HeroSection scrollToSection={scrollToSection} />
        <ContentSections />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

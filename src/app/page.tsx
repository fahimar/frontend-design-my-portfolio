"use client";

import NavBar from "@/components/common/NavBar";
import AboutMeSection from "@/components/sections/AboutMeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main>
      <NavBar />

      <div className="mt-32 flex flex-col gap-32 mx-4 md:mx-16 mb-32">
        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <MyProjectsSection />
        <TestimonialSection />
        <NewsletterSection />
      </div>
      <FooterSection />
    </main>
  );
}

"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { VideoSection } from "./VideoSection";
import { NewPricingSection } from "./NewPrincingSection";
import { ComparisonSection } from "./ComparisonSection";
import { UseCasesSection } from "./UseCasesSection";
import { FeaturesSection } from "./FeaturesSection";
import { FaqSection } from "./FaqSection";
import {Footer} from "./Footer";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Use Cases",
      link: "#use cases",
    },
    {
      name: "Benefits",
      link: "#benefits",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">SignUp</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                SignUp
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <HeroSection/>
      <VideoSection/>
      <ComparisonSection/>
      <UseCasesSection/>
      <FeaturesSection/>
      <NewPricingSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

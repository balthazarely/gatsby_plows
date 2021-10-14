import React, { forwardRef, useRef } from 'react';
import HeroLarge from '../components/PageElements/HeroLarge';
import OurClients from '../components/PageElements/OurClients';
import Layout from '../layouts/layout';
import { SEO } from '../components/Metadata/SEO';
import { FeatureOne } from '../components/PageElements/FeatureOne';
import { FeatureTwo } from '../components/PageElements/FeatureTwo';
import { FeatureThree } from '../components/PageElements/FeatureThree';
import { CTASection } from '../components/PageElements/CTASection';
import { GettingStarted } from '../components/PageElements/GettingStarted';
import { Testimonials } from '../components/PageElements/Testimonials';

interface LocationType {
  location: Location;
}

const Index = ({ location }: LocationType) => {
  const sectionTwoRef = useRef<HTMLInputElement>(null);

  const scrollToSectionTwo = () => {
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout currentRoute={location.pathname}>
      <SEO title="Home" />
      <HeroLarge scrollToSectionTwo={scrollToSectionTwo} />
      <FeatureOne />
      <div ref={sectionTwoRef}>
        <FeatureTwo />
      </div>
      <FeatureThree />
      <GettingStarted />
      <OurClients />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;

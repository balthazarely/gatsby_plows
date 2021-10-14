import React, { useState } from 'react';
import { SEO } from '../components/Metadata/SEO';
import Layout from '../layouts/layout';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageElements/PageHeader';
import { frameVariants } from '../animations/animations';
import { CareerCard } from '../components/Elements/Cards/CareerCard';
import { neoTreksCareers } from '../components/Content/Careers';
import { CareerLocationBtn } from '../components/Elements/Buttons/CareerLocationBtn';

interface LocationType {
  location: Location;
}

const Careers = ({ location }: LocationType) => {
  const [country, setCountry] = useState<string>('All');
  const setJobCountry = (country: string) => {
    setCountry(country);
  };

  const countries = ['All', 'USA', 'Czechia'];
  return (
    <Layout currentRoute={location.pathname}>
      <SEO title="Careers" />
      <div className="page__container ">
        <PageHeader pageTitle="Careers" centered={true} />
        <p className="mt-4 text-center leading-relaxed text-base text-gray-500 ">
          Explore a career at NeoTreks in either our US or Czechia office.
        </p>
        <div className="selector__wrapper  mt-4 flex gap-4 justify-center mx-auto ">
          {countries.map((item, i) => (
            <div key={i}>
              <CareerLocationBtn
                selectedCountry={country}
                country={item}
                setJobCountry={setJobCountry}
              />
            </div>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 "
          variants={frameVariants}
          initial="hidden"
          animate="visible"
        >
          {neoTreksCareers
            .filter((listing) => listing.country.includes(country))
            .map((career) => (
              <div key={career.link}>
                <CareerCard
                  title={career.title}
                  location={career.location}
                  country={career.country}
                  link={career.link}
                />
              </div>
            ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Careers;

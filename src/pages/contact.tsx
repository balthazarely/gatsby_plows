import React, { useState } from 'react';
import { ContactForm } from '../components/PageElements/ContactForm';
import { ContactUs } from '../components/PageElements/ContactUs';
import { Modal } from '../components/Elements/Modal';
import { SEO } from '../components/Metadata/SEO';
import ContactMap from '../components/PageElements/ContactMap';
import Layout from '../layouts/layout';

interface LocationType {
  location: Location;
}

const Contact = ({ location }: LocationType) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedOffice, setSelectedOffice] = useState<string>('Denver');

  return (
    <Layout currentRoute={location.pathname}>
      <SEO title="Contact" />
      <div className="bg-gray-50 ">
        <div className="page__container  ">
          <div className="flex justify-between gap-8 flex-col lg:flex-row  ">
            <div className="flex flex-1 sm:flex-row lg:flex-col flex-col  ">
              <ContactUs
                selectedOffice={selectedOffice}
                setSelectedOffice={setSelectedOffice}
              />
              <ContactForm setShowModal={setShowModal} />
            </div>
            <div className="flex flex-1 flex-col  ">
              <ContactMap
                selectedOffice={selectedOffice}
                setSelectedOffice={setSelectedOffice}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  );
};

export default Contact;

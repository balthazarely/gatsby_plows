import React, { useState } from 'react';
import { Modal } from '../components/Elements/Modal';
import { RequestDemoForm } from '../components/PageElements/RequestDemoForm';
import { SEO } from '../components/Metadata/SEO';
import Layout from '../layouts/layout';

interface LocationType {
  location: Location;
}

const RequestDemo = ({ location }: LocationType) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <Layout currentRoute={location.pathname}>
      <SEO title="Request Demo" />
      <div className="page__container ">
        <div className="flex justify-between gap-8 flex-col md:flex-row  ">
          <div className="flex-1 mt-4 max-w-2xl leading-relaxed text-base  lg:mx-auto ">
            <div className="text-2xl text-gray-900 font-semibold mb-8">
              PlowOps drastically improves the safety and efficiency of state
              and local municipality winter operations.
            </div>
            <div className="text-base text-gray-500 font-normal">
              Want to learn more about how PlowOps will modernize your snowplow
              operations? Schedule a demo today to see what digitizing your
              winter operations with PlowOps can do for you.
            </div>
          </div>
          <RequestDemoForm setShowModal={setShowModal} />
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  );
};

export default RequestDemo;

// const formFields = [
//   {
//     name: 'name',
//     type: 'text',
//     placeholder: 'Full Name',
//     validation: {
//       required: true,
//       min: 2,
//       max: 40,
//     },
//   },
//   {
//     name: 'organization',
//     type: 'text',
//     placeholder: 'Organization',
//     validation: {
//       required: true,
//       min: 2,
//       max: 40,
//     },
//   },
//   {
//     name: 'email',
//     type: 'email',
//     placeholder: 'Email',
//     validation: {
//       required: true,
//       pattern: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
//     },
//   },
//   {
//     name: 'Phone',
//     type: 'text',
//     placeholder: 'Phone',
//     validation: {
//       required: true,
//       min: 2,
//       max: 40,
//     },
//   },
//   {
//     name: 'number-of-winter-maintenance-vehicles',
//     type: 'number',
//     placeholder: 'Number of winter maintenance vehicles',
//     validation: {
//       required: true,
//       min: 2,
//       max: 40,
//     },
//   },
//   {
//     name: 'description',
//     type: 'text',
//     placeholder: 'Tell us how we can help',
//     validation: {
//       required: true,
//       min: 10,
//       max: 500,
//     },
//   },
// ];

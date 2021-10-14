import React from 'react';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';

interface ContactPropTypes {
  selectedOffice: string;
  setSelectedOffice: (office: string) => void;
}

export const ContactUs = ({
  selectedOffice,
  setSelectedOffice,
}: ContactPropTypes) => {
  return (
    <div className="flex-1 ">
      <p className="feature__header__text">Get in touch</p>
      <div className="location__wrapper mt-8 flex flex-row sm:flex-col md:flex-col lg:flex-row justify-between">
        <div className="flex-1">
          <div className="flex items-start mb-4 group">
            <HiOutlineLocationMarker
              className={`text-3xl group-hover:text-theme-100 ${
                selectedOffice === 'Denver' ? 'text-theme-300' : 'text-gray-900'
              }`}
            />
            <div className="ml-2">
              <div
                onClick={() => setSelectedOffice('Denver')}
                className={`cursor-pointer text-base font-bold  group-hover:text-theme-100 ${
                  selectedOffice === 'Denver'
                    ? 'text-theme-300'
                    : 'text-gray-900'
                }`}
              >
                Corporate Office
                <div className="text-gray-500 text-sm font-normal ">
                  202 6th Street, Suite 302
                  <br /> Castle Rock, CO, 80104
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start mb-4 group">
            <HiOutlineLocationMarker
              className={`text-3xl group-hover:text-theme-100 ${
                selectedOffice === 'Frýdek-Místek'
                  ? 'text-theme-300'
                  : 'text-gray-900'
              }`}
            />
            <div className="ml-2">
              <div
                onClick={() => setSelectedOffice('Frýdek-Místek')}
                className={`cursor-pointer text-base font-bold  group-hover:text-theme-100 ${
                  selectedOffice === 'Frýdek-Místek'
                    ? 'text-theme-300'
                    : 'text-gray-900'
                }`}
              >
                Frýdek-Místek Office
                <div className="text-gray-500 text-sm font-normal ">
                  1188 Na Poříčí Frýdek – Místek
                  <br /> 738 01, Czech Republic
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <HiOutlinePhone className="text-3xl text-gray-300" />
            <div className="text-gray-500 text-sm ml-2">(719) 966-7304</div>
          </div>
          <div className="flex items-center mb-4">
            <HiOutlineMail className="text-3xl text-gray-300" />
            <a
              target="BLANK"
              className="text-gray-500 text-sm ml-2"
              href="mailto:sales@neotreks.com"
            >
              sales@neotreks.com
            </a>
          </div>
          <div className="flex items-center mb-4">
            <HiOutlineMail className="text-3xl text-gray-300" />
            <a
              target="BLANK"
              className="text-gray-500 text-sm ml-2"
              href="mailto:support@neotreks.com"
            >
              support@neotreks.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

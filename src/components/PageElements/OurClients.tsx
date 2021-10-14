import React from 'react';
import client_idot from '../../../static/partner-logos/client_idot.png';
import client_montgomery_township from '../../../static/partner-logos/client_montgomery_township.png';
import client_montgomery from '../../../static/partner-logos/client_montgomery.png';
import client_town_cr from '../../../static/partner-logos/client_town_cr.jpeg';
import client_wyoming from '../../../static/partner-logos/client_wyoming.png';
import Fade from 'react-reveal/Fade';

const OurClients = () => {
  return (
    <div className=" bg-white py-24 ">
      <div className="feature__container ">
        <Fade bottom distance="100px">
          <p className="feature__header__text lg:text-center mb-4">
            Trusted by
          </p>
        </Fade>
        <div className="flex-wrap flex flex-row justify-around items-center gap-3">
          <Fade bottom distance="100px">
            <img
              src={client_idot}
              className="max-w-72 h-auto md:order-1 order-4 "
              alt="logo"
            />
          </Fade>
          <Fade bottom distance="100px">
            <img
              src={client_montgomery_township}
              className="max-w-72 h-auto md:order-3 order-5"
              alt="logo"
            />
          </Fade>
          <Fade bottom distance="100px">
            <img
              src={client_montgomery}
              className="max-w-72 max-h-32 md:order-2 order-1"
              alt="logo"
            />
          </Fade>
          <Fade bottom distance="100px">
            <img
              src={client_town_cr}
              className="max-w-72 max-h-24 md:order-4 order-2"
              alt="logo"
            />
          </Fade>
          <Fade bottom distance="100px">
            <img
              src={client_wyoming}
              className="max-w-72 max-h-36 md:order-5 order-3"
              alt="logo"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurClients;

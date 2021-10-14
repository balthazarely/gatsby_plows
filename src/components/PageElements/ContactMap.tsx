import React, { useState, useEffect, useRef } from 'react';
import * as maplibre from 'maplibre-gl';
import { Helmet } from 'react-helmet';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  zIndex: 1,
};

interface MapPropTypes {
  selectedOffice: string;
  setSelectedOffice: (office: string) => void;
}

const ContactMap = ({ selectedOffice, setSelectedOffice }: MapPropTypes) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState<number>(-104.86084379719782);
  const [lat, setLat] = useState<number>(39.375087603332325);

  useEffect(() => {
    if (mapContainerRef.current != null) {
      map.current = new maplibre.Map({
        accessToken: process.env.GATSBY_ENV_MAPBOX_TOKEN,
        container: mapContainerRef.current,
        style:
          'https://maps.accuterra.com/v1/styles/accuterra-outdoors/style.json?key=eXePb4yLgQNHuICMzEylJWfs1A74RiKqGKytyMi7W9IFin0dlc',
        center: [lng, lat],
        zoom: 14,
        customAttribution:
          '<a href="https://accuterra.com/" target="_blank">© AccuTerra</a>',
      });

      const DenverPopup = new maplibre.Popup({
        offset: 25,
        closeButton: false,
      }).setHTML(
        '<div style="font-size: 14px; font-weight: 900">NeoTreks Corporate</div>'
      );

      DenverPopup.on('open', () => {
        setSelectedOffice('Denver');
      });

      const CzechMPopup = new maplibre.Popup({
        offset: 25,
        closeButton: false,
      }).setHTML(
        '<div style="font-size: 14px; font-weight: 900">Frýdek-Místek Office</div>'
      );

      CzechMPopup.on('open', () => {
        setSelectedOffice('Frýdek-Místek');
      });

      new maplibre.Marker()
        .setLngLat([-104.86084379719782, 39.375087603332325])
        .setPopup(DenverPopup)
        .addTo(map.current);

      new maplibre.Marker()
        .setLngLat([18.350775411674416, 49.67851816770763])
        .setPopup(CzechMPopup)
        .addTo(map.current);
    }

    map.current.on('mousedown', () => {
      setSelectedOffice('none');
    });
  }, []);

  useEffect(() => {
    if (selectedOffice === 'Frýdek-Místek') {
      map.current.flyTo({
        center: [18.350775411674416, 49.67851816770763],
        zoom: 14,
        speed: 3,
        essential: true,
      });
    }
    if (selectedOffice === 'Denver') {
      map.current.flyTo({
        center: [-104.86084379719782, 39.375087603332325],
        zoom: 14,
        speed: 3,
        essential: true,
      });
    }
  }, [selectedOffice]);

  return <div ref={mapContainerRef} style={mapContainerStyle} />;
};

export default ContactMap;

// src/components/AdSenseAd.js
import React, { useEffect } from 'react';

const AdSenseAd = ({ client, slot, format = 'auto', responsive = 'true' }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.setAttribute('data-ad-client', client);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [client]);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}></ins>
  );
};

export default AdSenseAd;

// src/components/AdSenseAd.js
import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      data-ad-client="ca-pub-6869692723025523"
      data-ad-slot="5368868717"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
};

export default AdSenseAd;

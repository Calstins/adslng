'use client';

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface ReCaptchaProps {
  children: React.ReactNode;
}

const ReCaptchaProvider: React.FC<ReCaptchaProps> = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY!}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;

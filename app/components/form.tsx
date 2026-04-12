"use client";

import React from 'react';

interface GoogleFormProps {
  formUrl?: string;
  title?: string;
}

const GoogleForm: React.FC<GoogleFormProps> = ({ 
  formUrl = "https://forms.gle/Kwx5FtSkDyrbkhwd8", 
  title = "Application Form" 
}) => {
  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <div className="relative w-full scrollbar-hide" style={{ minHeight: "2200px" }}>
          <iframe
            src={formUrl}
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="absolute inset-0 w-full h-full"
            title={title}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;

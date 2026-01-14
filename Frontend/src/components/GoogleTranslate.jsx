// GoogleTranslate.jsx
import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("google-translate-script")) return;

    // Define the callback function
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) {
        console.warn("Google translate script not loaded properly");
        return;
      }
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,de,es,it,zh-CN,ja,ru,hy,ar,hi,pt,ko,tr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Create and append the script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      delete window.googleTranslateElementInit;
      const el = document.getElementById("google-translate-script");
      if (el) document.body.removeChild(el);
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      style={{ 
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        height: 0,
        width: 0,
        overflow: 'hidden'
      }} 
    />
  );
};

export default GoogleTranslate;
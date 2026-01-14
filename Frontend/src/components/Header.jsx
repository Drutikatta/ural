import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Placeholder: language change handler
  const handleLanguageSelect = (languageCode) => {
    console.log("Language selected:", languageCode);
    // You can integrate Google Translate, i18next, or your logic here
    setLanguageDropdownOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'pt', name: 'Portuguese' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo + Title */}
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#3498db" />
              <path d="M20 8L28.2846 12V20L20 24L11.7154 20V12L20 8Z" fill="white" />
              <path d="M20 24V32L11.7154 28V20L20 24Z" fill="#85c1e9" />
              <path d="M28.2846 20V28L20 32V24L28.2846 20Z" fill="#85c1e9" />
            </svg>
            <h1 
              className="ml-3 text-2xl font-bold text-[#3498db] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Nuclopedia
            </h1>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-10 relative">
            <button 
              className="text-base font-medium text-gray-700 hover:text-[#2176FF]"
              onClick={() => navigate("/EconomicCalculator")}
            >
              Calculator
            </button>
            <button 
              className="text-base font-medium text-gray-700 hover:text-[#2176FF]"
              onClick={() => navigate("/CombinedCharts")}
            >
              Economic
            </button>
            <button 
              className="text-base font-medium text-gray-700 hover:text-[#2176FF]"
              onClick={() => navigate("/news")}
            >
              News
            </button>

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                className="text-base font-medium text-gray-700 hover:text-[#2176FF] focus:outline-none"
                onClick={toggleDropdown}
              >
                Language ▾
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50 overflow-hidden">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <button
              className="text-base font-medium text-white bg-[#3498db] rounded-md px-6 py-2.5 hover:bg-[#2980b9] transition-colors duration-200 shadow-sm cursor-pointer flex items-center"
              onClick={() => navigate("/participantLogin")}
            >
              <span>Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

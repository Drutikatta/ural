import React from 'react';
import {
  FaUsers,        // For participant tracking
  FaWpforms,      // For custom forms
  FaUsersCog,     // For team management
  FaClock,        // For real-time updates
  FaEnvelopeOpenText, // For automated emails
  FaMoneyBillWave,    // For payment
  FaChartBar,     // For analytics
  FaTools         // For more features
} from 'react-icons/fa';

const FacilitiesSection = () => {
  const facilities = [
    { icon: <FaUsers className="text-blue-600 text-3xl mx-auto" />, title: 'User Authentication' },
    { icon: <FaWpforms className="text-blue-600 text-3xl mx-auto" />, title: 'Isotopes Different Sectors' },
    { icon: <FaUsersCog className="text-blue-600 text-3xl mx-auto" />, title: 'Calculator' },
    { icon: <FaClock className="text-blue-600 text-3xl mx-auto" />, title: 'Economic Visual representation' },
    { icon: <FaEnvelopeOpenText className="text-blue-600 text-3xl mx-auto" />, title: 'News' },
    { icon: <FaMoneyBillWave className="text-blue-600 text-3xl mx-auto" />, title: 'Chat bot' },
    { icon: <FaChartBar className="text-blue-600 text-3xl mx-auto" />, title: 'User Friendly' },
    { icon: <FaTools className="text-blue-600 text-3xl mx-auto" />, title: 'More Features Coming' },
  ];

  return (
    <div className=" py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Text */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-3">
              Everything You Need <span className="text-blue-600"></span>
              <br />Know about Nuclear Tech
            </h2>
            <p className="text-gray-700 mb-8">
              Unlock the power of nuclear technology and isotopes for a sustainable future. Stay informed with the latest innovations, research, and real-world applications.
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Start Learning
            </button>
          </div>

          {/* Right Section - Facilities Grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
                  <div className="mb-4">
                    {facility.icon}
                  </div>
                  <p className="text-center text-sm font-medium text-gray-800">{facility.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;

import React from 'react';
import { FaWhatsapp, FaTelegram, FaFacebook, FaTimes } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Us</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">waxuu ka hadli doonaa website sheekoyinka guulaha tusaale ahaan dadkii guulaystay iyo wadooyinkii ay mareen IWM dhiirigalinta wax yaabo ku saabsan oo qofka dhiiri galinaya iyo jidh dhiska habka jidhka loo dhiso iyo wax yaabaha la is tic maalo sida cuntooyinka iyo wixii la cuno IWM</p>
        <div className="flex flex-col space-y-4">
          <a
            href="https://wa.me/+251915180432"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://t.me/abdirahamaanhassan"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaTelegram className="text-2xl" />
            <span>Telegram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092308092206"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaFacebook className="text-2xl" />
            <span>Facebook</span>
          </a>
           
        </div>
        <div className="mt-8 text-gray-600 dark:text-gray-300">
          <p><strong>Phone:</strong> +251915180432</p>
          <p><strong>Email:</strong>abdirahmanduale33@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

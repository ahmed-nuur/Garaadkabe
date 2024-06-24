import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">About Us</h2>
        
        {/* Company introduction */}
        <p className="mb-4 text-gray-600 dark:text-gray-300">
        waxuu ka hadli doonaa website sheekoyinka guulaha tusaale ahaan dadkii guulaystay iyo wadooyinkii ay mareen IWM dhiirigalinta wax yaabo ku saabsan oo qofka dhiiri galinaya iyo jidh dhiska habka jidhka loo dhiso iyo wax yaabaha la is tic maalo sida cuntooyinka iyo wixii la cuno IWM.
        </p>
        
       
        
        {/* Contact information */}
        <div className="mt-8 text-gray-600 dark:text-gray-300">
          <p>If you have any questions or want to learn more about us, feel free to contact us!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

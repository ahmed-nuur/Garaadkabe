import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">About Us</h2>
        
        {/* Company introduction */}
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Welcome to our company! We are dedicated to providing the best services and products to our customers. Our mission is to innovate and lead in our industry, and our vision is to create a better future through our efforts.
        </p>
        
        {/* Mission section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To deliver high-quality products and services that improve the lives of our customers and contribute to a sustainable world.
          </p>
        </div>
        
        {/* Vision section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To be a global leader in our industry, recognized for our commitment to excellence, innovation, and social responsibility.
          </p>
        </div>
        
        {/* Team section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Individual team member cards */}
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src="/path-to-image1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">John Doe</h4>
              <p className="text-gray-600 dark:text-gray-300">CEO</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src="/path-to-image2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Jane Smith</h4>
              <p className="text-gray-600 dark:text-gray-300">CTO</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src="/path-to-image3.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Alice Johnson</h4>
              <p className="text-gray-600 dark:text-gray-300">CFO</p>
            </div>
            {/* Additional team members can be added similarly */}
          </div>
        </div>
        
        {/* Impact section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Impact metrics cards */}
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">10K+</h4>
              <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">500+</h4>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">50+</h4>
              <p className="text-gray-600 dark:text-gray-300">Awards Won</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">20+</h4>
              <p className="text-gray-600 dark:text-gray-300">Years in Business</p>
            </div>
          </div>
        </div>
        
        {/* Contact information */}
        <div className="mt-8 text-gray-600 dark:text-gray-300">
          <p>If you have any questions or want to learn more about us, feel free to contact us!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

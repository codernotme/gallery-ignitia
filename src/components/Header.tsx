import React from 'react';

const Header = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-6">
          Ignitia
          <span className="text-orange-500"> Over the Years</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Welcome to the visual journey of Ignitia 2k25! This gallery celebrates the spirit of innovation, collaboration, and creativity captured in moments that define our flagship event.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gray-100   text-gray-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
import React, { useState } from 'react';
import ImagePreview from './ImagePreview';

interface Photo {
  url: string;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos = [
    {
      url: "./assests/1.jpg"
    },
    {
      url: "./assests/2.jpg"
    },
    {
      url: "./assests/3.jpg"
    },
    {
      url: "./assests/4.jpg"
    },
    {
      url: "./assests/5.jpg"
    },
    {
      url: "./assests/6.jpg"
    },
    {
      url: "./assests/7.jpg"
    },
    {
      url: "./assests/8.jpg"
    },
    {
      url: "./assests/9.jpg"
    },
    {
      url: "./assests/10.jpg"
    },
    {
      url: "./assests/11.jpg"
    },
    {
      url: "./assests/12.jpg"
    },
    {
      url: "./assests/13.jpg"
    },
    {
      url: "./assests/14.jpg"
    },
    {
      url: "./assests/15.jpg"
    },
    {
      url: "./assests/16.jpg"
    },
    {
      url: "./assests/17.jpg"
    },
    {
      url: "./assests/18.jpg"
    },
    {
      url: "./assests/19.jpg"
    },
    {
      url: "./assests/20.jpg"
    },
    {
      url: "./assests/21.jpg"
    },
    {
      url: "./assests/22.jpg"
    },
    {
      url: "./assests/23.jpg"
    },
    {
      url: "./assests/24.jpg"
    },
    {
      url: "./assests/25.jpg"
    },
    {
      url: "./assests/26.jpg"
    },
    {
      url: "./assests/27.jpg"
    },
    {
      url: "./assests/28.jpg"
    },
    {
      url: "./assests/29.jpg"
    },

  ];


  return (
    <section className="py-16 px-6 bg-black text-white" id="gallery">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Some of The Best Clicks
      </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <ImagePreview
          imageUrl={selectedPhoto.url}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
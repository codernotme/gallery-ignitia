import React, { useState } from 'react';
import ImagePreview from './ImagePreview';

interface Photo {
  url: string;
  caption: string;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos = [
    {
      url: "./assests/1.jpg",
      caption: "The Stylish Explorer"
    },
    {
      url: "./assests/2.jpg",
      caption: "The Cool Cat"
    },
    {
      url: "./assests/3.jpg",
      caption: "The Athletic Pro"
    },
    {
      url: "./assests/4.jpg",
      caption: "The Winter Adventurer"
    },
    {
      url: "./assests/5.jpg",
      caption: "The Music Lover"
    },
    {
      url: "./assests/6.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/7.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/8.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/9.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/10.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/11.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/12.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/13.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/14.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/15.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/16.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/17.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/18.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/19.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/20.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/21.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/22.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/23.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/24.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/25.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/26.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/27.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/28.jpg",
      caption: "The Intellectual"
    },
    {
      url: "./assests/29.jpg",
      caption: "The Intellectual"
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
                alt={photo.caption}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <ImagePreview
          imageUrl={selectedPhoto.url}
          caption={selectedPhoto.caption}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
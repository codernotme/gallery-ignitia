"use client";
import { useState } from "react";
import ImagePreview from "./ImagePreview"; // Fixed import path

interface Photo {
  url: string;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos = [
    {
      url: "/assets/1.jpg",
    },
    {
      url: "/assets/2.jpg",
    },
    {
      url: "/assets/3.jpg",
    },
    {
      url: "/assets/4.jpg",
    },
    {
      url: "/assets/5.jpg",
    },
    {
      url: "/assets/6.jpg",
    },
    {
      url: "/assets/7.jpg",
    },
    {
      url: "/assets/8.jpg",
    },
    {
      url: "/assets/9.jpg",
    },
    {
      url: "/assets/10.jpg",
    },
    {
      url: "/assets/11.jpg",
    },
    {
      url: "/assets/12.jpg",
    },
    {
      url: "/assets/13.jpg",
    },
    {
      url: "/assets/14.jpg",
    },
    {
      url: "/assets/15.jpg",
    },
    {
      url: "/assets/16.jpg",
    },
    {
      url: "/assets/17.jpg",
    },
    {
      url: "/assets/18.jpg",
    },
    {
      url: "/assets/19.jpg",
    },
    {
      url: "/assets/20.jpg",
    },
    {
      url: "/assets/21.jpg",
    },
    {
      url: "/assets/22.jpg",
    },
    {
      url: "/assets/23.jpg",
    },
    {
      url: "/assets/24.jpg",
    },
    {
      url: "/assets/25.jpg",
    },
    {
      url: "/assets/26.jpg",
    },
    {
      url: "/assets/27.jpg",
    },
    {
      url: "/assets/28.jpg",
    },
    {
      url: "/assets/29.jpg",
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
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string;
  caption: string;
  onClose: () => void;
}

const ImagePreview = ({ imageUrl, caption, onClose }: ImagePreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 text-white hover:text-orange-500 transition z-50 m-4"
          aria-label="Close preview"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={caption}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          <p className="text-white text-lg mt-4 text-center">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
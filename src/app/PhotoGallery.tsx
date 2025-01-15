import React from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: "https://drive.google.com/uc?export=view&id=1-Q2QcG72EkGwIVAfFbF12bii5Irc_y8j",
    alt: "Image1",
    caption: "Us in suits"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1Pv_yrw7oFVL76dwmcC40vGwdZ_hSyRWa",
    alt: "Image2",
    caption: "Us eating food"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1cl720pSFtqCMrqTrw2z1uVK_mdKkeRmi",
    alt: "Image3",
    caption: "Us in suits again"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1dq9wiRJxD9u4mzzHW3CyTtBkjTPYJFgF",
    alt: "Image4",
    caption: "HEHEHEHEHEHEHEHEHEHEH"
  }
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

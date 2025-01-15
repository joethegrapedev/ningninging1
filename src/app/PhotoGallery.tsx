import React from 'react'
import Image from 'next/image'



interface Photo {
    src: string
    alt: string
    caption: string
  }


  const photos: Photo[] = [
    {
      src: "/images/image1.jpeg",
      alt: "Image1",
      caption: "us in suits"
    },
    {
      src: "/images/image2.jpeg",
      alt: "Image2",
      caption: "us eating food"
    },
    {
      src: "/images/image3.jpeg",
      alt: "Image3",
      caption: "us in suits again"
    },
    {
      src: "/images/image4.jpeg",
      alt: "Image4",
      caption: "HEHEHEHEHEHEHEHEHEHEH "
    }
  ]
  
  
  export default function PhotoGallery() {
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
    )
  }

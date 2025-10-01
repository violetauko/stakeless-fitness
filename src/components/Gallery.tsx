import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  image: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, image: '/images/img1.jpeg'},
    { id: 2, image: '/images/img2.jpeg' },
    { id: 3, image: '/images/img3.jpeg'},
    { id: 4, image: '/images/img4.jpeg'},
    { id: 5, image: '/images/img5.jpeg'},
    { id: 6, image: '/images/img6.jpeg' },
    { id: 7, image: '/images/img7.jpeg'},
    { id: 8, image: '/images/img8.jpeg' },
    { id: 9, image: '/images/img9.jpeg' },
    { id: 10, image: '/images/img10.jpeg'},
    { id: 11, image: '/images/img11.jpeg' },
    { id: 12, image: '/images/img12.jpeg'},
    { id: 13, image: '/images/img13.jpeg'},
    { id: 14, image: '/images/img14.jpeg'},
    { id: 15, image: '/images/img15.jpeg' },
    { id: 16, image: '/images/img16.jpeg'},
  ];

  return (
    <div id='gallery' className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
         <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="flex-1 h-0.5 bg-red-500 max-w-16 sm:max-w-24 md:max-w-32"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mx-2 sm:mx-4 whitespace-nowrap">FROM OUR GALLERY</h2>
            <div className="flex-1 h-0.5 bg-red-500 max-w-16 sm:max-w-24 md:max-w-32"></div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Explore our vibrant community through our gallery.
          </p>
        </div>

        {/* Gallery Grid - Museum-style masonry layout */}
        <div className="gallery-container">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item item-${index + 1} group relative overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300`}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage.image}
                alt="Selected Gallery Image"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 280px);
          gap: 12px;
        }

        /* Row 1: tall, tall+wide, extra wide */
        .item-1 {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }

        .item-2 {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }

        .item-3 {
          grid-column: 3 / 5;
          grid-row: 1 / 2;
        }

        /* Row 2: (continues tall images), medium, medium */
        .item-4 {
          grid-column: 3 / 4;
          grid-row: 2 / 3;
        }

        .item-5 {
          grid-column: 4 / 5;
          grid-row: 2 / 3;
        }

        /* Row 3: medium, medium, wide */
        .item-6 {
          grid-column: 1 / 2;
          grid-row: 3 / 4;
        }

        .item-7 {
          grid-column: 2 / 3;
          grid-row: 3 / 4;
        }

        .item-8 {
          grid-column: 3 / 5;
          grid-row: 3 / 4;
        }

        .item-9 {
          grid-column: 1 / 2;
          grid-row: 4 / 5;
        }

        @media (max-width: 1024px) {
          .gallery-container {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 200px);
          }

          .item-1 {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          .item-2 {
            grid-column: 2 / 3;
            grid-row: 1 / 3;
          }

          .item-3 {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
          }

          .item-4 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          .item-5 {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
          }

          .item-6 {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }

          .item-7 {
            grid-column: 2 / 4;
            grid-row: 3 / 4;
          }

          .item-8 {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
          }

          .item-9 {
            grid-column: 2 / 4;
            grid-row: 4 / 5;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }

          .item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-7, .item-8, .item-9 {
            grid-column: auto;
            grid-row: auto;
          }

          .item-2 {
            grid-column: 1 / 3;
          }

          .item-3 {
            grid-column: 1 / 3;
          }

          .item-9 {
            grid-column: 1 / 3;
          }
        }

        @media (max-width: 480px) {
          .gallery-container {
            grid-template-columns: 1fr;
          }

          .item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-7, .item-8, .item-9 {
            grid-column: 1;
            grid-row: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
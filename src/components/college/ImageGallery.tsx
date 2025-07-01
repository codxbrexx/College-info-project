import React, { useState } from 'react';
import type { GalleryItem } from '../../types/college';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ImageGalleryProps {
  items: GalleryItem[];
}

const categories = [
  'All', 'Fest', 'Campus Life', 'Convocation', 'Labs', 'Library', 'Sports', 'Events', 'Other'
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    let newIndex = currentIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    } else {
      newIndex = (currentIndex + 1) % filteredItems.length;
    }
    setSelectedImage(filteredItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="py-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer group border border-gray-200 dark:border-gray-700"
              onClick={() => openModal(item, index)}
            >
              <img
                src={item.imageUrl}
                alt={item.caption}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center font-semibold px-4">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p className="text-lg">No images found for this category.</p>
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-colors z-10"
                aria-label="Close image"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                <p className="text-lg font-semibold">{selectedImage.caption}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedImage.category}</p>
              </div>
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;

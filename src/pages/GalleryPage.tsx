import React from 'react';
import { useCollegeData } from '../hooks/useCollegeData';
import ImageGallery from '../components/college/ImageGallery';
import Loading from '../components/common/Loading';
import { Image } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const { galleryItems } = useCollegeData();

  if (!galleryItems) {
    return <Loading text="Loading gallery images..." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
          <Image className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          College Gallery
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A visual journey through campus life, events, and infrastructure.
        </p>
      </div>

      {galleryItems.length > 0 ? (
        <ImageGallery items={galleryItems} />
      ) : (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p className="text-lg">No gallery items available yet.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

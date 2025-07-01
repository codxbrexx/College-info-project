import React from 'react';
import type { CollegeInfo } from '../../types/college';

interface CollegeBannerProps {
  collegeInfo: CollegeInfo;
}

const CollegeBanner: React.FC<CollegeBannerProps> = ({ collegeInfo }) => {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-8">
      <img
        src={collegeInfo.bannerImage}
        alt={`${collegeInfo.name} Banner`}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8 flex items-end">
        <img
          src={collegeInfo.logo}
          alt={`${collegeInfo.name} Logo`}
          className="h-20 w-20 md:h-24 md:w-24 object-contain bg-white p-2 rounded-full shadow-lg mr-4"
        />
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {collegeInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-1">
            {collegeInfo.location.city}, {collegeInfo.location.state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeBanner;

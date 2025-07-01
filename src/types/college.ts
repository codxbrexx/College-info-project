
export interface CollegeInfo {
  name: string;
  establishedYear: number;
  location: { city: string; state: string };
  accreditation: string[];
  logo: string; // URL to logo image
  bannerImage: string; // URL to banner image
  type: 'Government' | 'Private';
  campusSize: string; // e.g., "100 acres"
  facultyStudentRatio: string; // e.g., "1:15"
  hostelFacility: string; // Detailed info
  transportFacility: string; // Detailed info
  description: string; // A brief description of the college
}

export interface Course {
  id: string;
  name: string;
  type: 'UG' | 'PG';
  program: string; // e.g., "B.Tech", "M.Tech", "MBA"
  department: string; // e.g., "Computer Science Engineering", "Electronics & Communication Engineering"
  duration: string; // e.g., "4 years", "2 years"
  annualFee: number;
  seatIntake: number;
  entranceExam: string[]; // e.g., "JEE Main", "GATE"
  description: string; // Short description of the course
}

export interface PlacementStat {
  year: number;
  averagePackage: number; // in LPA
  highestPackage: number; // in LPA
  topRecruiters: string[]; // Array of company names or logo URLs
  departmentStats: { department: string; percentage: number }[]; // Placement percentage per department
  reportPdfUrl?: string; // URL to downloadable PDF report
}

export interface Ranking {
  id: string;
  organization: string; // e.g., "NIRF", "QS Asia"
  rank: string; // e.g., "24th in Engineering", "Top 200"
  year: number;
  category?: string; // e.g., "Engineering", "Overall"
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: 'Award' | 'Honor' | 'Patent' | 'Innovation';
  year: number;
}

export interface Alumni {
  id: string;
  name: string;
  profileImage: string; // URL to alumni image
  currentCompany: string;
  designation: string;
  venture?: string; // If they started a company
  linkedinUrl?: string;
  batch: string; // e.g., "2015-2019"
  testimonial?: string; // Optional testimonial from alumni
}

export interface GalleryItem {
  id: string;
  imageUrl: string; // URL to image
  caption: string;
  category: 'Fest' | 'Campus Life' | 'Convocation' | 'Labs' | 'Library' | 'Sports' | 'Events' | 'Other';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string; // URL to user avatar
  role: 'student' | 'admin';
  coursesEnrolled?: string[]; // Array of course IDs
  placementStatus?: 'Applied' | 'Interviewing' | 'Placed' | 'Not Placed' | 'N/A';
  collegeNotices?: string[]; // Array of notice IDs (if you implement a notice board)
  // Add any other student-specific fields
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  category: 'General' | 'Academic' | 'Placement' | 'Event';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string; // e.g., "B.Tech CSE Student", "Alumni Batch 2020"
  text: string;
  image?: string; // URL to author's image
}

import type { CollegeInfo, Course, PlacementStat, Ranking, Achievement, Alumni, GalleryItem, Notice, Testimonial } from '../types/college';

// --- College Info ---
export const mockCollegeInfo: CollegeInfo = {
  name: 'Indian Institute of Information Technology, Lucknow',
  establishedYear: 2015,
  location: { city: 'Lucknow', state: 'Uttar Pradesh' },
  accreditation: ['NAAC Grade A', 'UGC Approved', 'AICTE Approved'],
  logo: '/images/iiitl-logo.png',
  bannerImage: '../assets/iiitl-bg.jpg',
  type: 'Government',
  campusSize: '50 acres',
  facultyStudentRatio: '1:20',
  hostelFacility: 'Modern hostels for boys and girls with all necessary amenities, including Wi-Fi, common rooms, and mess facilities.',
  transportFacility: 'Well-connected by public transport; college also provides limited shuttle services for students and staff.',
  description: 'Established by the Ministry of Education, IIIT-Lucknow is a leading institute known for its strong coding culture, innovative research, and industry ties. Indian Institute of Information Technology, Lucknow shapes future tech leaders through hands-on learning and vibrant tech communities.',
};

// --- Courses ---
export const mockCourses: Course[] = [
  {
    id: 'cse_ug',
    name: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
    type: 'UG',
    program: 'B.Tech',
    department: 'Computer Science Engineering',
    duration: '4 years',
    annualFee: 150000,
    seatIntake: 60,
    entranceExam: ['JEE Main'],
    description: 'Comprehensive program covering core computer science concepts, software development, data science, and artificial intelligence.',
  },
  {
    id: 'it_ug',
    name: 'Bachelor of Technology (B.Tech) in Information Technology',
    type: 'UG',
    program: 'B.Tech',
    department: 'Information Technology',
    duration: '4 years',
    annualFee: 150000,
    seatIntake: 60,
    entranceExam: ['JEE Main'],
    description: 'Focuses on network security, database management, web technologies, and IT infrastructure.',
  },
  
  {
    id: 'csb_ug',
    name: 'Bachelor of Technology (B.Tech) in computer science and business',
    type: 'UG',
    program: 'B.Tech',
    department: 'computer science and business',
    duration: '4 years',
    annualFee: 160000,
    seatIntake: 60,
    entranceExam: ['JEE Main'],
    description: 'Specialized program in AI, machine learning, deep learning, and their applications in various domains.',
  },
  {
    id: 'ai_ug',
    name: 'Bachelor of Technology (B.Tech) in Artificial Intelligence',
    type: 'UG',
    program: 'B.Tech',
    department: 'Artificial Intelligence',
    duration: '4 years',
    annualFee: 160000,
    seatIntake: 60,
    entranceExam: ['JEE Main'],
    description: 'Specialized program in AI, machine learning, deep learning, and their applications in various domains.',
  },
  {
    id: 'cse_pg',
    name: 'Master of Technology (M.Tech) in Computer Science Engineering',
    type: 'PG',
    program: 'M.Tech',
    department: 'Computer Science Engineering',
    duration: '2 years',
    annualFee: 90000,
    seatIntake: 40,
    entranceExam: ['GATE'],
    description: 'Advanced studies in areas like AI, Machine Learning, Cybersecurity, and advanced algorithms.',
  },
  {
    id: 'ds_pg',
    name: 'Master of Technology (M.Tech) in Data Science',
    type: 'PG',
    program: 'M.Tech',
    department: 'Data Science',
    duration: '2 years',
    annualFee: 95000,
    seatIntake: 30,
    entranceExam: ['GATE'],
    description: 'Focuses on statistical modeling, big data analytics, and data visualization techniques.',
  },
];

// --- Placements ---
export const mockPlacementStats: PlacementStat[] = [
  {
    year: 2019,
    averagePackage: 17,
    highestPackage: 60,
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 98 },
      { department: 'Information Technology', percentage: 95 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },
      { department: 'Data Science', percentage: 96 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2023.pdf',
  },
  {
    year: 2020,
    averagePackage: 19.4,
    highestPackage: 74,
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 98 },
      { department: 'Information Technology', percentage: 95 },
      { department: 'computer science and business', percentage: 97 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },

      { department: 'Data Science', percentage: 96 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2023.pdf',
  },
  {
    year: 2021,
    averagePackage: 22,
    highestPackage: 71,
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 98 },
      { department: 'Information Technology', percentage: 95 },
      { department: 'computer science and business', percentage: 97 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },

      { department: 'Data Science', percentage: 96 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2023.pdf',
  },
  {
    year: 2022,
    averagePackage: 23.4,
    highestPackage: 94.2,
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 98 },
      { department: 'Information Technology', percentage: 95 },
      { department: 'computer science and business', percentage: 97 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },
      { department: 'Data Science', percentage: 96 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2023.pdf',
  },
  {
    year: 2023,
    averagePackage: 25.4,
    highestPackage: 150,
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 98 },
      { department: 'Information Technology', percentage: 99 },
      { department: 'computer science and business', percentage: 97 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },
      { department: 'Data Science', percentage: 96 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2023.pdf',
  },
  {
    year: 2024,
    averagePackage: 30, // LPA - New data for 2024
    highestPackage: 84, // LPA - New data for 2024
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Zomato', 'Ubar', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 99 },
      { department: 'Information Technology', percentage: 97 },
      { department: 'Artificial Intelligence', percentage: 98 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },

      { department: 'Data Science', percentage: 95 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2024.pdf',
  },
  {
    year: 2025,
    averagePackage: 33, // LPA - New data for 2025
    highestPackage: 74, // LPA - New data for 2025
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Oracle', 'TCS Digital', 'Infosys', 'Wipro'],
    departmentStats: [
      { department: 'Computer Science Engineering', percentage: 100 },
      { department: 'Information Technology', percentage: 98 },
      { department: 'Artificial Intelligence', percentage: 99 },
      { department: 'computer science and Artificial intelligence', percentage: 97 },

      { department: 'Data Science', percentage: 96 },
    ],
    reportPdfUrl: '/reports/iiitl_placement_report_2025.pdf',
  },
];

// --- Rankings ---
export const mockRankings: Ranking[] = [
  { id: 'nirf_eng_2023', organization: 'NIRF', rank: '89th', year: 2023, category: 'Engineering' },
  { id: 'nirf_overall_2023', organization: 'NIRF', rank: '125th', year: 2023, category: 'Overall' },
  { id: 'qs_asia_2023', organization: 'QS Asia', rank: 'Top 150', year: 2023 },
  { id: 'nirf_eng_2022', organization: 'NIRF', rank: '95th', year: 2022, category: 'Engineering' },
];

// --- Achievements ---
export const mockAchievements: Achievement[] = [
  {
    id: 'award_innovation_hub',
    title: 'National Innovation Award for Incubation Centre',
    description: 'Awarded by the Ministry of Education for fostering a vibrant startup ecosystem.',
    type: 'Award',
    year: 2022,
  },
  {
    id: 'patent_ai_healthcare',
    title: 'Patent Granted for AI-driven Healthcare Diagnostic System',
    description: 'Faculty from CSE department secured a patent for their novel diagnostic system.',
    type: 'Patent',
    year: 2023,
  },
  {
    id: 'honor_research_excellence',
    title: 'UGC Honor for Research Excellence',
    description: 'Recognized for significant contributions to interdisciplinary research.',
    type: 'Honor',
    year: 2021,
  },
  {
    id: 'innovation_blockchain_security',
    title: 'Student Team Wins National Blockchain Security Hackathon',
    description: 'Our B.Tech IT students secured first place in the national hackathon for their innovative blockchain security solution.',
    type: 'Innovation',
    year: 2023,
  },
];

// --- Alumni ---
export const mockAlumni: Alumni[] = [
  {
    id: 'alumni_1',
    name: 'Priya Sharma',
    profileImage: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Google',
    designation: 'Software Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/priyasharma',
    batch: '2019-2023',
    testimonial: "IIIT Lucknow provided me with a strong foundation in cutting-edge technologies and the confidence to excel in the tech industry. The faculty and resources were exceptional."
  },
  {
    id: 'alumni_2',
    name: 'Rahul Singh',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Microsoft',
    designation: 'Senior Product Manager',
    linkedinUrl: 'https://www.linkedin.com/in/rahulsingh',
    batch: '2018-2022',
    testimonial: "The practical exposure and industry-oriented curriculum at IIIT Lucknow were instrumental in shaping my career path, especially in product management."
  },
  {
    id: 'alumni_3',
    name: 'Anjali Gupta',
    profileImage: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'DataGenius AI',
    designation: 'CEO & Founder',
    venture: 'DataGenius AI (AI/Data Science Startup)',
    linkedinUrl: 'https://www.linkedin.com/in/anjaligupta',
    batch: '2017-2021',
    testimonial: "The entrepreneurial spirit fostered at IIIT Lucknow gave me the courage to start my own venture in the AI space. Forever grateful for the support system and innovative environment."
  },
  {
    id: 'alumni_4',
    name: 'Vikram Kumar',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Adobe',
    designation: 'Software Development Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/vikramkumar',
    batch: '2019-2023',
    testimonial: "The rigorous curriculum and hands-on projects at IIIT Lucknow prepared me perfectly for a challenging role in software development."
  },
  {
    id: 'alumni_4',
    name: 'Vikram Kumar',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Adobe',
    designation: 'Software Development Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/vikramkumar',
    batch: '2019-2023',
    testimonial: "The rigorous curriculum and hands-on projects at IIIT Lucknow prepared me perfectly for a challenging role in software development."
  },
  {
    id: 'alumni_4',
    name: 'Vikram Kumar',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Adobe',
    designation: 'Software Development Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/vikramkumar',
    batch: '2019-2023',
    testimonial: "The rigorous curriculum and hands-on projects at IIIT Lucknow prepared me perfectly for a challenging role in software development."
  },
  {
    id: 'alumni_4',
    name: 'Vikram Kumar',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Adobe',
    designation: 'Software Development Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/vikramkumar',
    batch: '2019-2023',
    testimonial: "The rigorous curriculum and hands-on projects at IIIT Lucknow prepared me perfectly for a challenging role in software development."
  },
  {
    id: 'alumni_4',
    name: 'Vikram Kumar',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    currentCompany: 'Adobe',
    designation: 'Software Development Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/vikramkumar',
    batch: '2019-2023',
    testimonial: "The rigorous curriculum and hands-on projects at IIIT Lucknow prepared me perfectly for a challenging role in software development."
  },
];

// --- Gallery ---
export const mockGalleryItems: GalleryItem[] = [
  { id: 'gal_1', imageUrl: '/images/gallery/iiitl_fest_1.jpg', caption: 'Annual Tech Fest - Infusion', category: 'Fest' },
  { id: 'gal_2', imageUrl: '/images/gallery/iiitl_campus_1.jpg', caption: 'Main Academic Block', category: 'Campus Life' },
  { id: 'gal_3', imageUrl: '/images/gallery/iiitl_convocation_1.jpg', caption: 'Convocation Ceremony 2023', category: 'Convocation' },
  { id: 'gal_4', imageUrl: '/images/gallery/iiitl_lab_1.jpg', caption: 'Advanced AI Lab', category: 'Labs' },
  { id: 'gal_5', imageUrl: '/images/gallery/iiitl_library_1.jpg', caption: 'Central Library Reading Hall', category: 'Library' },
  { id: 'gal_6', imageUrl: '/images/gallery/iiitl_sports_1.jpg', caption: 'Inter-College Sports Meet', category: 'Sports' },
  { id: 'gal_7', imageUrl: '/images/gallery/iiitl_fest_2.jpg', caption: 'Cultural Night at Fest', category: 'Fest' },
  { id: 'gal_8', imageUrl: '/images/gallery/iiitl_campus_2.jpg', caption: 'Green Campus View', category: 'Campus Life' },
];

// --- User Profiles (for AuthContext) ---
export const mockUsers: UserProfile[] = [
  {
    id: 'user_admin_1',
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    role: 'admin',
    coursesEnrolled: [],
    placementStatus: 'N/A',
  },
  {
    id: 'user_student_1',
    name: 'Student User',
    email: 'student@example.com',
    avatar: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
    role: 'student',
    coursesEnrolled: ['cse_ug'],
    placementStatus: 'Applied',
  },
];

// --- Notices (for Dashboard) ---
export const mockNotices: Notice[] = [
  {
    id: 'notice_1',
    title: 'Semester End Examinations Schedule Released',
    content: 'The schedule for the upcoming semester end examinations has been published on the academic portal. Students are advised to check the dates carefully.',
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    category: 'Academic',
  },
  {
    id: 'notice_2',
    title: 'Placement Drive for 2024 Batch - Phase 1',
    content: 'Companies like Google, Microsoft, and Adobe are conducting their first phase of recruitment for the 2024 graduating batch. Register on the placement portal by October 20th.',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    category: 'Placement',
  },
  {
    id: 'notice_3',
    title: 'Annual Cultural Fest "Infusion" Dates Announced',
    content: 'Get ready for Infusion 2024! The annual cultural fest will be held from March 10th to March 12th. Registrations for various events will open soon.',
    publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    category: 'Event',
  },
  {
    id: 'notice_4',
    title: 'Hackathon Registration Open: CodeSprint 2024',
    content: 'Join CodeSprint 2024, our annual coding hackathon! Form your teams and register by November 15th. Exciting prizes await!',
    publishedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    category: 'Event',
  },
];

// --- Testimonials ---
export const mockTestimonials: Testimonial[] = [
  {
    id: 'test_1',
    author: 'Rohan Mehta',
    role: 'B.Tech CSE Student (Batch 2025)',
    text: "The faculty here is incredibly supportive and the labs are state-of-the-art, especially in AI and Data Science. I'm gaining practical skills that are directly applicable to the industry.",
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 'test_2',
    author: 'Dr. Kavita Rao',
    role: 'Head of Department, IT',
    text: "We are committed to providing a holistic education that blends academic rigor with real-world challenges, preparing our students to be future leaders in the IT sector.",
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 'test_3',
    author: 'Sameer Khan',
    role: 'Alumni (Batch 2022), Software Engineer at Google',
    text: "My time at IIIT Lucknow was transformative. The strong academic foundation and the vibrant campus life helped me grow both personally and professionally, leading to my dream job.",
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
];

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'student';
  coursesEnrolled: string[];
  placementStatus: string;
};

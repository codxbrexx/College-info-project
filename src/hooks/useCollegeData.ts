import { useState, useMemo } from "react";
import type {
  CollegeInfo,
  Course,
  PlacementStat,
  Ranking,
  Achievement,
  Alumni,
  GalleryItem,
  Notice,
  Testimonial,
} from "../types/college";
import {
  mockCollegeInfo,
  mockCourses,
  mockPlacementStats,
  mockRankings,
  mockAchievements,
  mockAlumni,
  mockGalleryItems,
  mockNotices,
  mockTestimonials,
} from "../data/mockCollegeData";

export const useCollegeData = () => {
  // State for all data types (can be fetched from Firebase in a real app)
  const [collegeInfo] = useState<CollegeInfo>(mockCollegeInfo);
  const [courses, setCourses] = useState<Course[]>(mockCourses); // Made courses stateful for admin edits
  const [placementStats, setPlacementStats] = useState<PlacementStat[]>(mockPlacementStats); // Made placementStats stateful
  const [rankings, setRankings] = useState<Ranking[]>(mockRankings); // Made rankings stateful
  const [achievements] = useState<Achievement[]>(mockAchievements);
  const [alumni, setAlumni] = useState<Alumni[]>(mockAlumni); // Made alumni stateful for admin edits
  const [galleryItems] = useState<GalleryItem[]>(mockGalleryItems);
  const [notices, setNotices] = useState<Notice[]>(mockNotices); // Made notices stateful for admin edits
  const [testimonials] = useState<Testimonial[]>(mockTestimonials);

  // Memoized data for efficient access
  const getCourseById = useMemo(
    () => (id: string) => {
      return courses.find((course) => course.id === id);
    },
    [courses]
  );

  const getCoursesByProgramType = useMemo(
    () => (type: "UG" | "PG") => {
      return courses.filter((course) => course.type === type);
    },
    [courses]
  );

  const getLatestPlacementStats = useMemo(() => {
    if (placementStats.length === 0) return null;
    return placementStats.sort((a, b) => b.year - a.year)[0];
  }, [placementStats]);

  const getLatestRankings = useMemo(() => {
    if (rankings.length === 0) return [];
    const latestYear = Math.max(...rankings.map((r) => r.year));
    return rankings.filter((r) => r.year === latestYear);
  }, [rankings]);

  const getRecentNotices = useMemo(
    () =>
      (limit: number = 5) => {
        return notices
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .slice(0, limit);
      },
    [notices]
  );

  // Admin functions (placeholders - would interact with Firebase/backend)
  const addCourse = (newCourse: Course) => {
    setCourses((prev) => [...prev, newCourse]);
    console.log("Admin: Added course", newCourse);
  };

  const updateCourse = (updatedCourse: Course) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === updatedCourse.id ? updatedCourse : course))
    );
    console.log("Admin: Updated course", updatedCourse);
  };

  const deleteCourse = (courseId: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== courseId));
    console.log("Admin: Deleted course", courseId);
  };

  const addNotice = (newNotice: Notice) => {
    setNotices((prev) => [...prev, newNotice]);
    console.log("Admin: Added notice", newNotice);
  };

  const deleteNotice = (noticeId: string) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== noticeId));
    console.log("Admin: Deleted notice", noticeId);
  };

  const addAlumni = (newAlumni: Alumni) => {
    setAlumni((prev) => [...prev, newAlumni]);
    console.log("Admin: Added alumni", newAlumni);
  };

  const updateAlumni = (updatedAlumni: Alumni) => {
    setAlumni((prev) =>
      prev.map((alumnus) => (alumnus.id === updatedAlumni.id ? updatedAlumni : alumnus))
    );
    console.log("Admin: Updated alumni", updatedAlumni);
  };

  const deleteAlumni = (alumniId: string) => {
    setAlumni((prev) => prev.filter((alumnus) => alumnus.id !== alumniId));
    console.log("Admin: Deleted alumni", alumniId);
  };

  const updatePlacementStat = (updatedStat: PlacementStat) => {
    setPlacementStats((prev) =>
      prev.map((stat) => (stat.year === updatedStat.year ? updatedStat : stat))
    );
    console.log("Admin: Updated placement stat", updatedStat);
  };

  const uploadPlacementReport = (file: File) => {
    console.log("Admin: Uploading placement report", file.name);
    // In a real app, this would involve actual file upload to storage (e.g., Firebase Storage)
  };

  return {
    collegeInfo,
    courses,
    placementStats,
    rankings,
    achievements,
    alumni,
    galleryItems,
    notices,
    testimonials,
    getCourseById,
    getCoursesByProgramType,
    getLatestPlacementStats,
    getLatestRankings,
    getRecentNotices,
    // Admin functions
    addCourse,
    updateCourse,
    deleteCourse,
    addNotice,
    deleteNotice, // Added deleteNotice
    addAlumni,    // Added addAlumni
    updateAlumni, // Added updateAlumni
    deleteAlumni, // Added deleteAlumni
    updatePlacementStat, // Added updatePlacementStat
    uploadPlacementReport,
  };
};

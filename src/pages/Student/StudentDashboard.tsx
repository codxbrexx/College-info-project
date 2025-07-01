import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  BookText,
  Briefcase,
  Bell,
  Settings,
  User,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useCollegeData } from "../../hooks/useCollegeData";
import Loading from "../../components/common/Loading";
import type { Course } from "../../types/college";

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const { courses, notices, getCourseById, getRecentNotices } =
    useCollegeData();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Please sign in to access your dashboard
        </h1>
        <Link
          to="/login"
          className="mt-4 inline-block text-primary-600 hover:underline"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const enrolledCourses =
    user.coursesEnrolled
      ?.map((courseId: string) => getCourseById(courseId))
      .filter(Boolean) as Course[] || []; // Assert as Course[]
  const recentNotices = getRecentNotices(3); // Show top 3 recent notices

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-20 w-20 rounded-full object-cover border-4 border-primary-500"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome, {user.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Student Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4"> {/* Changed shadow-sm to shadow-md */}
          <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600">
            <BookText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enrolled Courses
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {enrolledCourses.length}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4"> {/* Changed shadow-sm to shadow-md */}
          <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-900/20 text-secondary-600">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Placement Status
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.placementStatus || "N/A"}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4"> {/* Changed shadow-sm to shadow-md */}
          <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              New Notices
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {recentNotices.length}
            </p>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Your Enrolled Courses
        </h2>
        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) =>
              course ? (
                <div
                  key={course.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700" /* Changed shadow-sm to shadow-md */
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {course.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">
                    {course.program} - {course.department}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Duration: {course.duration}
                  </p>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"> {/* Changed shadow-sm to shadow-md */}
            <p>You are not currently enrolled in any courses.</p>
            <Link
              to="/courses"
              className="text-primary-600 hover:underline mt-2 inline-block"
            >
              Explore Courses
            </Link>
          </div>
        )}
      </div>

      {/* Recent Notices */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent College Notices
        </h2>
        {recentNotices.length > 0 ? (
          <div className="space-y-4">
            {recentNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700" /* Changed shadow-sm to shadow-md */
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {notice.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {format(new Date(notice.publishedAt), "MMM d, yyyy")}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                  {notice.content}
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                  {notice.category}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"> {/* Changed shadow-sm to shadow-md */}
            <p>No recent notices available.</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/settings" // Placeholder for user settings
            className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span>Profile Settings</span>
          </Link>
          <Link
            to="/placements"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Briefcase className="h-4 w-4" />
            <span>View Placements</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

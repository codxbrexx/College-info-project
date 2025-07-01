import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookText,
  Edit,
  PlusCircle,
  Trash2,
  Users,
  DollarSign, // Added for placement stats
  TrendingUp, // Added for placement stats
  Award, // Added for ranking stats
  Bell, // Added for notices
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCollegeData } from '../../hooks/useCollegeData';
import Loading from '../../components/common/Loading';
import type { Course, Notice, UserProfile, Alumni, PlacementStat } from '../../types/college'; // Import Alumni and PlacementStat
import { format } from 'date-fns';
import PlacementStatsCard from '../../components/college/PlacementStatsCard'; // Import PlacementStatsCard
import PlacementChart from '../../components/college/PlacementChart'; // Import PlacementChart

const AdminDashboard: React.FC = () => {
  const { user, isAdmin } = useAuth();
  const {
    courses, notices, addCourse, updateCourse, deleteCourse, addNotice, deleteNotice,
    alumni, addAlumni, updateAlumni, deleteAlumni,
    placementStats, updatePlacementStat, uploadPlacementReport,
    rankings,
    getLatestPlacementStats, getLatestRankings
  } = useCollegeData();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'users' | 'notices' | 'placements' | 'alumni'>('overview');
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({ title: '', content: '', category: 'General' });
  const [isAlumniModalOpen, setIsAlumniModalOpen] = useState(false); // State for Alumni modal
  const [editingAlumni, setEditingAlumni] = useState<Alumni | null>(null); // State for editing Alumni

  if (!user || !isAdmin) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Access Denied
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          You do not have administrative privileges to view this page.
        </p>
        <Link to="/login" className="mt-4 inline-block text-primary-600 hover:underline">
          Go to Login
        </Link>
      </div>
    );
  }

  const latestPlacement = getLatestPlacementStats;
  const latestRankings = getLatestRankings;

  // --- Course Management ---
  const handleAddEditCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse?.id) { // Check if ID exists for editing
      updateCourse(editingCourse);
    } else {
      const newCourse: Course = {
        ...editingCourse!,
        id: `course_${Date.now()}`, // Generate a simple ID for mock data
        annualFee: Number(editingCourse!.annualFee),
        seatIntake: Number(editingCourse!.seatIntake),
        entranceExam: editingCourse!.entranceExam || [],
      };
      addCourse(newCourse);
    }
    setIsCourseModalOpen(false);
    setEditingCourse(null);
  };

  const openCourseModalForEdit = (course: Course) => {
    setEditingCourse(course);
    setIsCourseModalOpen(true);
  };

  const openCourseModalForAdd = () => {
    setEditingCourse({
      id: '', name: '', type: 'UG', program: '', department: '',
      duration: '', annualFee: 0, seatIntake: 0, entranceExam: [], description: ''
    });
    setIsCourseModalOpen(true);
  };

  const handleDeleteCourse = (courseId: string) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(courseId);
    }
  };

  // --- Notice Management ---
  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNotice.title && newNotice.content && newNotice.category) {
      const noticeToAdd: Notice = {
        ...newNotice as Notice,
        id: `notice_${Date.now()}`,
        publishedAt: new Date().toISOString(),
      };
      addNotice(noticeToAdd);
      setNewNotice({ title: '', content: '', category: 'General' });
      setIsNoticeModalOpen(false);
    }
  };

  const handleDeleteNotice = (noticeId: string) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      deleteNotice(noticeId);
    }
  };

  // --- Alumni Management ---
  const handleAddEditAlumni = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAlumni?.id) {
      updateAlumni(editingAlumni);
    } else {
      const newAlumni: Alumni = {
        ...editingAlumni!,
        id: `alumni_${Date.now()}`,
        profileImage: editingAlumni?.profileImage || 'https://via.placeholder.com/100', // Default image if not provided
      };
      addAlumni(newAlumni);
    }
    setIsAlumniModalOpen(false);
    setEditingAlumni(null);
  };

  const openAlumniModalForEdit = (alumni: Alumni) => {
    setEditingAlumni(alumni);
    setIsAlumniModalOpen(true);
  };

  const openAlumniModalForAdd = () => {
    setEditingAlumni({
      id: '', name: '', profileImage: '', currentCompany: '', designation: '',
      batch: '', linkedinUrl: '', testimonial: '', venture: ''
    });
    setIsAlumniModalOpen(true);
  };

  const handleDeleteAlumni = (alumniId: string) => {
    if (window.confirm('Are you sure you want to delete this alumni profile?')) {
      deleteAlumni(alumniId);
    }
  };

  // --- User Management (Placeholder) ---
  const mockStudents: UserProfile[] = [
    { id: 's1', name: 'kriti', email: 'kriti@example.com', role: 'student', avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', coursesEnrolled: [], placementStatus: 'N/A' },
    { id: 's2', name: 'varun agarwal', email: 'varun@example.com', role: 'student', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', coursesEnrolled: [], placementStatus: 'N/A' },
  ];
  const mockAdmins: UserProfile[] = [
    { id: 'a1', name: 'Mozammil Ali', email: 'ali@example.com', role: 'admin', avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', coursesEnrolled: [], placementStatus: 'N/A' },
  ];

  const handleUserRoleChange = (userId: string, newRole: 'student' | 'admin') => {
    console.log(`Admin: Changing role for user ${userId} to ${newRole}`);
    // Implement backend call to update user role
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      console.log(`Admin: Deleting user ${userId}`);
      // Implement backend call to delete user
    }
  };

  // --- Placement Report Upload ---
  const handleReportUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      uploadPlacementReport(file);
      alert(`File ${file.name} uploaded (simulated).`);
    }
  };

  // --- Placement Stats Editing ---
  const handlePlacementStatChange = (year: number, field: keyof PlacementStat, value: any) => {
    const updatedStats = placementStats.map(stat => {
      if (stat.year === year) {
        return { ...stat, [field]: value };
      }
      return stat;
    });
    // This will update the local state, but in a real app, you'd call updatePlacementStat
    // which would then trigger a re-render from the useCollegeData hook.
    // For now, we'll simulate the update directly here for the form.
    const statToUpdate = updatedStats.find(s => s.year === year);
    if (statToUpdate) {
      updatePlacementStat(statToUpdate);
    }
  };

  const handleDepartmentStatChange = (year: number, department: string, percentage: number) => {
    const updatedStats = placementStats.map(stat => {
      if (stat.year === year) {
        const updatedDeptStats = stat.departmentStats.map(ds =>
          ds.department === department ? { ...ds, percentage } : ds
        );
        return { ...stat, departmentStats: updatedDeptStats };
      }
      return stat;
    });
    const statToUpdate = updatedStats.find(s => s.year === year);
    if (statToUpdate) {
      updatePlacementStat(statToUpdate);
    }
  };


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
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage college content and users
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'overview'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'courses'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'users'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'notices'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            Notices
          </button>
          <button
            onClick={() => setActiveTab('placements')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'placements'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            Placements
          </button>
          <button
            onClick={() => setActiveTab('alumni')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'alumni'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            Alumni
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to the Admin Panel. Use the tabs above to manage different sections of the college portal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <PlacementStatsCard
              title="Total Courses"
              value={courses.length}
              icon={BookText}
              colorClass="text-primary-600"
            />
            <PlacementStatsCard
              title="Total Users (Mock)"
              value={mockStudents.length + mockAdmins.length}
              icon={Users}
              colorClass="text-secondary-600"
            />
            <PlacementStatsCard
              title="Total Alumni"
              value={alumni.length}
              icon={Users}
              colorClass="text-purple-600"
            />
            {latestPlacement && (
              <>
                <PlacementStatsCard
                  title={`Avg. Package (${latestPlacement.year})`}
                  value={latestPlacement.averagePackage}
                  unit="LPA"
                  icon={DollarSign}
                  colorClass="text-green-600"
                  decimalPlaces={1}
                />
                <PlacementStatsCard
                  title={`Highest Package (${latestPlacement.year})`}
                  value={latestPlacement.highestPackage}
                  unit="LPA"
                  icon={TrendingUp}
                  colorClass="text-orange-600"
                  decimalPlaces={1}
                />
              </>
            )}
            {latestRankings.length > 0 && (
              <PlacementStatsCard
                title={`${latestRankings[0].organization} Rank (${latestRankings[0].year})`}
                value={parseInt(latestRankings[0].rank.replace(/\D/g, ''))} // Extract number from rank string
                unit={latestRankings[0].rank.replace(/\d/g, '')} // Extract unit like "th"
                icon={Award}
                colorClass="text-yellow-600"
              />
            )}
          </div>
          {latestPlacement && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Department-wise Placement Percentage ({latestPlacement.year})
              </h3>
              <PlacementChart placementStat={latestPlacement} />
            </div>
          )}
        </div>
      )}

      {activeTab === 'courses' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Courses</h2>
            <button
              onClick={openCourseModalForAdd}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Add New Course</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {course.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {course.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {course.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => openCourseModalForEdit(course)}
                        className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-200 mr-3"
                      >
                        <Edit className="h-5 w-5 inline" />
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
                      >
                        <Trash2 className="h-5 w-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Manage Users (Mock Data)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[...mockStudents, ...mockAdmins].map((userItem) => (
                  <tr key={userItem.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {userItem.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {userItem.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      <select
                        value={userItem.role}
                        onChange={(e) => handleUserRoleChange(userItem.id, e.target.value as 'student' | 'admin')}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDeleteUser(userItem.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
                      >
                        <Trash2 className="h-5 w-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'notices' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Notices</h2>
            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Add New Notice</span>
            </button>
          </div>
          <div className="space-y-4">
            {notices.length > 0 ? (
              notices.map(notice => (
                <div key={notice.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{notice.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {format(new Date(notice.publishedAt), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{notice.content}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    {notice.category}
                  </span>
                  <div className="mt-3 flex justify-end space-x-2">
                    {/* Edit button placeholder */}
                    {/* <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-200">
                      <Edit className="h-4 w-4" />
                    </button> */}
                    <button
                      onClick={() => handleDeleteNotice(notice.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No notices published yet.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'placements' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Manage Placements</h2>
          <div className="mb-6">
            <label htmlFor="placementReport" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload Placement Report (PDF)
            </label>
            <input
              type="file"
              id="placementReport"
              accept=".pdf"
              onChange={handleReportUpload}
              className="block w-full text-sm text-gray-900 dark:text-gray-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary-50 file:text-primary-700
                hover:file:bg-primary-100 dark:file:bg-primary-900/20 dark:file:text-primary-400 dark:hover:file:bg-primary-900"
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Upload the latest annual placement report in PDF format.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Placement Statistics</h3>
          {placementStats.map(stat => (
            <div key={stat.year} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Year: {stat.year}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Average Package (LPA)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={stat.averagePackage}
                    onChange={(e) => handlePlacementStatChange(stat.year, 'averagePackage', parseFloat(e.target.value))}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Highest Package (LPA)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={stat.highestPackage}
                    onChange={(e) => handlePlacementStatChange(stat.year, 'highestPackage', parseFloat(e.target.value))}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Top Recruiters (comma-separated)</label>
                  <textarea
                    value={stat.topRecruiters.join(', ')}
                    onChange={(e) => handlePlacementStatChange(stat.year, 'topRecruiters', e.target.value.split(',').map(s => s.trim()))}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-y"
                  />
                </div>
              </div>
              <h5 className="text-md font-semibold text-gray-900 dark:text-white mt-4 mb-2">Department-wise Percentages:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stat.departmentStats.map(deptStat => (
                  <div key={deptStat.department}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{deptStat.department} (%)</label>
                    <input
                      type="number"
                      step="1"
                      min="0"
                      max="100"
                      value={deptStat.percentage}
                      onChange={(e) => handleDepartmentStatChange(stat.year, deptStat.department, parseInt(e.target.value))}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'alumni' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Alumni</h2>
            <button
              onClick={openAlumniModalForAdd}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Add New Alumni</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Batch
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {alumni.map((alumniItem) => (
                  <tr key={alumniItem.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {alumniItem.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {alumniItem.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {alumniItem.currentCompany}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {alumniItem.batch}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => openAlumniModalForEdit(alumniItem)}
                        className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-200 mr-3"
                      >
                        <Edit className="h-5 w-5 inline" />
                      </button>
                      <button
                        onClick={() => handleDeleteAlumni(alumniItem.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
                      >
                        <Trash2 className="h-5 w-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Course Add/Edit Modal */}
      {isCourseModalOpen && editingCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {editingCourse.id ? 'Edit Course' : 'Add New Course'}
            </h2>
            <form onSubmit={handleAddEditCourse} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Course Name</label>
                <input
                  type="text"
                  value={editingCourse.name}
                  onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Program Type</label>
                <select
                  value={editingCourse.type}
                  onChange={(e) => setEditingCourse({ ...editingCourse, type: e.target.value as 'UG' | 'PG' })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Program (e.g., B.Tech)</label>
                <input
                  type="text"
                  value={editingCourse.program}
                  onChange={(e) => setEditingCourse({ ...editingCourse, program: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                <input
                  type="text"
                  value={editingCourse.department}
                  onChange={(e) => setEditingCourse({ ...editingCourse, department: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Duration (e.g., 4 years)</label>
                <input
                  type="text"
                  value={editingCourse.duration}
                  onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Annual Fee</label>
                <input
                  type="number"
                  value={editingCourse.annualFee}
                  onChange={(e) => setEditingCourse({ ...editingCourse, annualFee: Number(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Seat Intake</label>
                <input
                  type="number"
                  value={editingCourse.seatIntake}
                  onChange={(e) => setEditingCourse({ ...editingCourse, seatIntake: Number(e.target.value) })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Entrance Exam (comma-separated)</label>
                <input
                  type="text"
                  value={editingCourse.entranceExam?.join(', ') || ''}
                  onChange={(e) => setEditingCourse({ ...editingCourse, entranceExam: e.target.value.split(',').map(s => s.trim()) })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                  value={editingCourse.description}
                  onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-y"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  {editingCourse.id ? 'Save Changes' : 'Add Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notice Add Modal */}
      {isNoticeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Add New Notice</h2>
            <form onSubmit={handleAddNotice} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                <input
                  type="text"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                <textarea
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-y"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                <select
                  value={newNotice.category}
                  onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value as Notice['category'] })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="General">General</option>
                  <option value="Academic">Academic</option>
                  <option value="Placement">Placement</option>
                  <option value="Event">Event</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsNoticeModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Add Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Alumni Add/Edit Modal */}
      {isAlumniModalOpen && editingAlumni && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {editingAlumni.id ? 'Edit Alumni Profile' : 'Add New Alumni Profile'}
            </h2>
            <form onSubmit={handleAddEditAlumni} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  value={editingAlumni.name}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Image URL</label>
                <input
                  type="text"
                  value={editingAlumni.profileImage}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, profileImage: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Company</label>
                <input
                  type="text"
                  value={editingAlumni.currentCompany}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, currentCompany: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Designation</label>
                <input
                  type="text"
                  value={editingAlumni.designation}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, designation: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Batch (e.g., 2015-2019)</label>
                <input
                  type="text"
                  value={editingAlumni.batch}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, batch: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn URL</label>
                <input
                  type="text"
                  value={editingAlumni.linkedinUrl || ''}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, linkedinUrl: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Testimonial</label>
                <textarea
                  value={editingAlumni.testimonial || ''}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, testimonial: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Venture (if applicable)</label>
                <input
                  type="text"
                  value={editingAlumni.venture || ''}
                  onChange={(e) => setEditingAlumni({ ...editingAlumni, venture: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAlumniModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  {editingAlumni.id ? 'Save Changes' : 'Add Alumni'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

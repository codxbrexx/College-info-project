import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCollegeData } from '../hooks/useCollegeData';
import TestimonialCard from '../components/common/TestimonialCard';
import NewsletterForm from '../components/common/NewsletterForm';
import { GraduationCap, BookText, Briefcase, Award } from 'lucide-react';
import CountUp from 'react-countup';

const Home: React.FC = () => {
  const { collegeInfo, testimonials, getLatestPlacementStats, getLatestRankings, courses } = useCollegeData();
  const latestPlacement = getLatestPlacementStats;
  const latestRankings = getLatestRankings;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <section>      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url(${collegeInfo.bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(50%) blur(2px)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            variants={itemVariants}
          >
            Welcome to <span className="text-teal-300">{collegeInfo.name}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-xl  mb-12 mt-10 max-w-4xl mx-auto text-gray-100 font-light"
            variants={itemVariants}
          >
            {collegeInfo.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <Link
              to="/info"
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 text-lg"
            >
              <GraduationCap className="h-6 w-6" />
              <span>Discover More</span>
            </Link>

            <Link
              to="/courses"
              className="border-2 border-white border-solid text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 text-lg"
            >
              <BookText className="h-6 w-6" />
              <span>Our Programs</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20  bg-white dark:bg-gray-900 text-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-14">
            Empowering Futures: Our Key Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-100 border-solid dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
            >
              <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                <CountUp end={collegeInfo.establishedYear} duration={2.5} />
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Founded In</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-100 border-solid dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
            >
              <BookText className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                <CountUp end={courses.length} duration={2.5} />+
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Diverse Programs</p>
            </motion.div>

            {latestPlacement && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-100 border-solid dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
              >
                <Briefcase className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  <CountUp
                    end={latestPlacement.averagePackage}
                    duration={2.5}
                    decimals={1}
                    suffix=" LPA"
                  />
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Avg. Placement ({latestPlacement.year})
                </p>
              </motion.div>
            )}

            {latestRankings.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-100 border-solid dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
              >
                <Award className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                <p className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  #{latestRankings[0].rank}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Top Ranking ({latestRankings[0].organization})
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-14">
              Voices of Our Valued Alumni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {testimonials.map((testimonial) => (
                <motion.div key={testimonial.id} variants={itemVariants}>
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action / Newsletter */}
      <section className="py-20  bg-white dark:bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Connected with {collegeInfo.name}
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get the latest news, exclusive events, and important updates delivered right to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
      </section>

    </motion.div>
  );
};

export default Home;

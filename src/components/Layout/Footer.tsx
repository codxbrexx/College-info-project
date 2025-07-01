import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import NewsletterForm from '../common/NewsletterForm';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold text-white">College Info</span> 
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Indian Institute of Information Technology, Lucknow is a premier institution committed to excellence in information technology education and research. {/* Updated description */}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/info"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-primary-400 transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/placements"
                  className="hover:text-primary-400 transition-colors"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="hover:text-primary-400 transition-colors"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy" // Placeholder
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms" // Placeholder
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq" // Placeholder
                  className="hover:text-primary-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap" // Placeholder
                  className="hover:text-primary-400 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

       

        {/* Copyright */}
        <div className="border-t border-gray-800 border-solid dark:border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Indian Institute of Information Technology, Lucknow. All rights reserved. {/* Changed name */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

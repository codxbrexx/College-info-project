import React from 'react';
import ContactForm from '../components/college/ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useCollegeData } from '../hooks/useCollegeData';
import Loading from '../components/common/Loading';

const ContactPage: React.FC = () => {
  const { collegeInfo } = useCollegeData();

  if (!collegeInfo) {
    return <Loading text="Loading contact information..." />;
  }

  // Updated Google Maps embed URL to be more generic for IIIT Lucknow
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
    `Indian Institute of Information Technology, Lucknow, Uttar Pradesh`
  )}&key=YOUR_GOOGLE_MAPS_API_KEY`; // Replace with your actual API key

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
          <Mail className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We're here to help! Reach out to us for admissions, general inquiries, or support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Indian Institute of Information Technology, Lucknow, Chak Ganjaria, Amethi, Lucknow, Uttar Pradesh - 226002 {/* Updated address */}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Admission Helpline</h3>
                <p className="text-gray-700 dark:text-gray-700">+91-522-2986001</p> {/* Updated phone */}
                <p className="text-gray-700 dark:text-gray-700">+91-522-2986002</p> {/* Updated phone */}
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">General Inquiries</h3>
                <p className="text-gray-700 dark:text-gray-300">info@iiitl.ac.in</p> {/* Updated email */}
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Office Hours</h3>
                <p className="text-gray-700 dark:text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.54 2 12.04c0 4.97 3.61 9.12 8.34 9.95v-7.05H7.07v-2.9h2.97V8.41c0-2.93 1.79-4.53 4.4-4.53 1.26 0 2.37.09 2.69.14v3.07h-1.82c-1.42 0-1.7.67-1.7 1.65v2.16h3.33l-.53 3.4h-2.8V22c4.9-.87 8.5-5.04 8.5-9.96.01-5.5-4.5-10-10-10z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.1 5.4 7.5 3.53 4.7c-.36.62-.56 1.35-.56 2.14 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.03 2.98-1.47 1.15-3.33 1.84-5.36 1.84-.35 0-.7-.02-1.04-.06C3.17 20.16 5.32 21 7.68 21c9.2 0 14.23-7.64 14.23-14.29 0-.22-.01-.43-.01-.64z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.535V9.249h3.418v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.064-2.065 2.062 2.062 0 012.064-2.066 2.062 2.062 0 012.065 2.066 2.062 2.062 0 01-2.065 2.065zm1.785 13.019H3.55v-11.6h3.572v11.6zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.227 0z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="YouTube">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 7.104c-.204-.76-.82-1.377-1.58-1.58C18.82 5 12 5 12 5s-6.82 0-7.963.524c-.76.204-1.377.82-1.58 1.58C2 8.18 2 12 2 12s0 3.82.524 4.963c.204.76.82 1.377 1.58 1.58C5.18 19 12 19 12 19s6.82 0 7.963-.524c.76-.204 1.377-.82 1.58-1.58C22 15.82 22 12 22 12s0-3.82-.524-4.963zM9.99 15.417V8.583L15.007 12l-5.017 3.417z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Google Map */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Find Us on Map
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="College Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

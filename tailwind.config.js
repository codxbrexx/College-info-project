// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue 600
          light: '#3b82f6',   // Blue 500
          700: '#1d4ed8',     // Deeper blue for some elements
          900: '#1e3a8a',     // Even deeper blue for hero backgrounds
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          800: '#1e40af',
        },
        secondary: {
          DEFAULT: '#10b981', // Emerald 500
          600: '#059669',     // Deeper emerald
          light: '#34d399',   // emerald-400
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4a5568', // New dark mode border/subtle text
          700: '#374151',
          800: '#2d3748', // New dark mode mid-background
          900: '#1a202c', // New dark mode deep-background
          950: '#111827', // Keep for very dark elements if needed, or remove
        },
        // Define specific dark mode colors if you prefer custom names
        // darkBgDeep: '#1a202c',
        // darkBgMid: '#2d3748',
        // darkTextPrimary: '#f3f4f6',
        // darkTextSecondary: '#d1d5db',
        // darkTextSubtle: '#9ca3af',
        // darkBorder: '#4a5568',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
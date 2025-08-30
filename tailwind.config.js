/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1e40af",      // royal blue
          "secondary": "#dc2626",    // cherry red
          "accent": "#059669", 
          "neutral": "#374151",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",
          "info": "#1d4ed8",
          "success": "#16a34a",
          "warning": "#d97706",
          "error": "#dc2626",
        },
        dark: {
          "primary": "#3b82f6",      // royal blue (lighter for dark)
          "secondary": "#ef4444",    // cherry red (brighter for dark)
          "accent": "#10b981",
          "neutral": "#374151", 
          "base-100": "#1f2937",
          "base-200": "#111827", 
          "base-300": "#374151",
          "base-content": "#f9fafb",
          "info": "#60a5fa",
          "success": "#22c55e",
          "warning": "#f59e0b", 
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
}

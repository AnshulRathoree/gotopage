import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/global.css'; // Import global styles
import App from './App';
import { slideIn } from './utils/animations'; // Example animation utility
import gsap from 'gsap'; // Import GSAP if using animations

// Initialize GSAP or other global libraries
gsap.defaults({ ease: "power3.out" });

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Add a global animation on page load
slideIn('.navbar'); // Example: Slide in the navbar
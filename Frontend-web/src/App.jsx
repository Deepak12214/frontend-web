import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CourseCategory from './pages/CourseCategory';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import InstructorProfile from './pages/InstructorProfile';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import CartPage from './pages/Cart';


const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:courseId" element={<CourseDetails />} />
                    <Route path="/category/:categorySlug" element={<CourseCategory />} />
                    <Route path="/instructor/:instructorId" element={<InstructorProfile />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/blog/:slug" element={<BlogDetails />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

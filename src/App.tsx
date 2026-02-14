import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { HomePage } from './components/home/HomePage';
import { ComparisonPage } from './components/comparison/ComparisonPage';
import { MethodologyPage } from './components/about/MethodologyPage';

import './components/layout/Header.css';
import './components/layout/Footer.css';
import './components/layout/Sidebar.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="page-wrapper">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/compare/:slug" element={
              <>
                <Sidebar />
                <div className="content-area">
                  <ComparisonPage />
                </div>
              </>
            } />
            <Route path="/methodology" element={
              <div className="content-area">
                <MethodologyPage />
              </div>
            } />
            <Route path="*" element={
              <div className="content-area">
                <HomePage />
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

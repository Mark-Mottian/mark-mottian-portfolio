import { Route, Routes } from "react-router-dom";

import PortfolioSidebar from "./components/PortfolioSidebar";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectCaseStudyPage from "./pages/ProjectCaseStudyPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <ScrollToTop />

      <div className="portfolio-layout">
        <PortfolioSidebar />

        <div className="portfolio-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectSlug" element={<ProjectCaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <footer className="site-footer">
            <p>© 2026 Mark Mottian</p>

            <div>
              <a
                href="https://github.com/Mark-Mottian"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mark-mottian"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { BlogListPage } from "@/pages/BlogListPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { GameOfLifeBackground } from "@/components/GameOfLifeBackground";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GameOfLifeBackground />
      <NavBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

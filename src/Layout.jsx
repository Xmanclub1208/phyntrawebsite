import React, { Suspense, memo, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Eager loaded pages
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import LegalPage from "./pages/LegalPage";
import WebHostPage from "./pages/WebHostPage";
import VPSHostPage from "./pages/VPSHostPage";
import DedicatedPage from "./pages/DedicatedPage";
import NotFoundPage from "./pages/NotFoundPage";
import HardwarePage from "./pages/HardwarePage";
import HomePage from "./pages/HomePage";
// Lazy loaded pages
const GamesPage = React.lazy(() => import("./pages/GamesPage"));
const MinecraftPage = React.lazy(() => import("./pages/MinecraftPage"));

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <div className="relative">
      <div className="w-12 h-12 border-t-2 border-red-500 rounded-full animate-spin"></div>
      <div className="mt-4 text-red-500 text-sm">Loading...</div>
    </div>
  </div>
);

const routes = [
  { path: "/", component: HomePage },
  { path: "/games", component: GamesPage },
  { path: "/about", component: AboutPage },
  { path: "/webhosting", component: WebHostPage },
  { path: "/dedicated", component: DedicatedPage },
  { path: "/vps", component: VPSHostPage },
  { path: "/hardware", component: HardwarePage },
  { path: "/support", component: SupportPage },
  { path: "/legal", component: LegalPage },
  { path: "/minecraft", component: MinecraftPage },
];

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-red-600 to-red-700
        hover:from-red-500 hover:to-red-600 shadow-lg transition-all duration-300 z-50
        border border-red-500/30 hover:border-red-500/50 hover:scale-110
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setShowContent(false);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 400);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div
        className={`transition-opacity duration-300 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <Navbar />
      <main className="flex-grow relative">
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PageTransition>
                    <Component />
                  </PageTransition>
                }
              />
            ))}
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;

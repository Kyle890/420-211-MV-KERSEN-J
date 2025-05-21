import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Home from './Pages/Home';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const ProjectForm = lazy(() => import("./Pages/ProjectForm"));
const Interest = lazy(() => import("./Pages/Interest"));
const NewsPage = lazy(() => import("./Pages/NewsPage"))

export default function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <div className="flex flex-col min-h-screen bg-[#E2E2E2]">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-3xl font-bold">Chargement...</h1>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home setUser={setUser} />} />

            <Route
              path="/Portfolio"
              element={
                <ProtectedRoute user={user}>
                  <Portfolio user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ProjectForm"
              element={
                <ProtectedRoute user={user}>
                  <ProjectForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Interest"
              element={
                <ProtectedRoute user={user}>
                  <Interest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/NewsPage"
              element={
                <ProtectedRoute user={user}>
                  <NewsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Home from './Pages/Home'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
const Portfolio = lazy(() => import("./Pages/Portfolio"))
const ProjectForm = lazy(() => import("./Pages/ProjectForm"))
const Interest = lazy(() => import("./Pages/Interest"))

export default function App() {

  return (
   <div className="flex flex-col min-h-screen bg-[#E2E2E2]">
    <Header />
    <div className="flex-grow">
      <Suspense fallback={
          <div className="h-screen flex items-center justify-center"
            >
              <h1 className="text-3xl font-bold">Chargement...</h1>
          </div>
        }>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/ProjectForm" element={<ProjectForm />} />
            <Route path="/Interest" element={<Interest />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
   </div>
  )
}
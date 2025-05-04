import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
const Portfolio = lazy(() => import("./Pages/Portfolio"))
const ProjectForm = lazy(() => import("./Pages/ProjectForm"))
const Interest = lazy(() => import("./Pages/Interest"))
import Home from './Pages/Home'
import Header from "./Components/Header"

export default function App() {

  return (
   <>
   <Header />
   <Suspense fallback={
      <div className="h-screen flex items-center justify-center"
        >
          <span className="text-3xl font-bold text-center">Chargement...</span>
      </div>
    }>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ProjectForm" element={<ProjectForm />} />
        <Route path="/Interest" element={<Interest />} />
      </Routes>
    </Suspense>
   </>
  )
}
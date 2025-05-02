import { Routes, Route } from "react-router-dom"
import Portfolio from './Pages/Portfolio'
import ProjectForm from './Pages/ProjectForm'
import Interest from './Pages/Interest'
import Home from './Pages/Home'
import NavBar from "./Components/NavBar"

function App() {

  return (
   <>
   <NavBar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/ProjectForm" element={<ProjectForm />} />
      <Route path="/Interest" element={<Interest />} />
    </Routes>
   </>
  )
}

export default App

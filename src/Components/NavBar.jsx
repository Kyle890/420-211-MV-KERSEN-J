import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center">
        <button className="m-4 border-2 p-4 rounded transition-all duration-300 hover:bg-gray-400">
            <Link to="/Portfolio"> Portfolio </Link>
        </button>
        <button className="m-4 border-2 p-4 rounded transition-all duration-300 hover:bg-gray-400">
            <Link to="/ProjectForm"> ProjectForm </Link>
        </button>
        <button className="m-4 border-2 p-4 rounded transition-all duration-300 hover:bg-gray-400">
            <Link to="/Interest"> Interest </Link>
        </button>
    </nav>
  )
}

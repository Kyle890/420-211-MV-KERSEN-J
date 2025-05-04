import { Link } from "react-router-dom"

const links = [
  { to: "/Portfolio", label: "Portfolio" },
  { to: "/ProjectForm", label: "ProjectForm"},
  { to: "/Interest", label: "Interest" }
]

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center items-center">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to = {to}
              className = "m-4 border-2 p-4 rounded transition-colors duration-300 bg-[#507ca9] hover:bg-[#042558] text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
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
          <li key={to} className="relative group m-4">
            <Link
              to = {to}
              className = "p-4 text-white rounded bg-[#507ca9] relative"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[5px] bg-[#042558] transition-all duration-400 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
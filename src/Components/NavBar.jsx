import { Link } from "react-router-dom"

export default function NavBar() {

  const links = [
    { to: "/Portfolio", label: "Portfolio" },
    { to: "/ProjectForm", label: "ProjectForm"},
    { to: "/Interest", label: "InterestAPI" }
  ]

  return (
    <nav>
      <ul className="flex justify-center items-center">
        {links.map(({ to, label }) => (
          <li key={to} className="group m-4 text-black font-bold">
            <Link
              to = {to}
              className = "p-4 rounded relative"
            >
              {label}
              <span className="absolute top-0 left-0 h-0 w-[2px] bg-black transition-all duration-500 group-hover:h-full"></span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
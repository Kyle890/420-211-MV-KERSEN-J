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
          <li key={to} className="group m-4 text-white font-bold">
            <Link
              to = {to}
              className = "p-4 rounded relative"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[5px] bg-[#042558] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
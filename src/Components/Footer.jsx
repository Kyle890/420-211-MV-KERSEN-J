import logoCourriel from "../assets/mail_logo.svg"
import logoGithub from "../assets/github_logo.svg"
import logoLinkedin from "../assets/linkedin_logo.svg"

export default function Footer() {

    const logos = [
        {link: "mailto:6290712@cegepmv.ca", img: logoCourriel, text: "logo mail"},
        {link: "https://github.com/Kyle890", img: logoGithub, text: "logo github"},
        {link: "https://www.linkedin.com/?trk=public_profile_nav-header-logo", img: logoLinkedin, text: "logo linkedin"}
    ]

    return (
        <footer className="h-20 flex justify-evenly items-center bg-[#E2E2E2] ">
            <p className="text-[#395886]">Designed and developed by Nyle Kersen Joseph</p>
            <ul className="flex gap-4">
                {logos.map(({ link, img, text }) => (
                    <li key={text}>
                        <a href={link} target="_blank"><img className="h-11 rounded-2xl" src={img} alt= {text}/></a>
                    </li>
                ))}
            </ul>
            <p className="text-[#395886]">Copyright © 2025 Nyle Kersen Joseph.</p>
        </footer>
    )
}
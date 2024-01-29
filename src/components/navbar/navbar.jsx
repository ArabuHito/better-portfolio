import logo from "../../assets/images/logonamedark.svg";
import "./navbar.css";

const links = [
    {
        "name": "GitHub",
        "url": "https://github.com/ArabuHito"
    },
    {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/ayoub-boudouaya-184271290/"
    }
]

export function Navbar() {
    const externalLink = (link, name) => {
        return <a key={link} className="external-link" href={link}>{name}</a>
    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Boudouaya"/>
            </div>
            <div className="navbar-right">
                <nav>
                    {links.map((link) => externalLink(link.url, link.name))}
                </nav>
            </div>
        </div>
    )
}

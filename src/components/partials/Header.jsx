import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <p style={{ listStyleType: "none" }}>
                <Link to="/">Home</Link>
            </p>
        </nav>
    )
}
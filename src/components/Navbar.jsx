import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-matcha shadow-sm">

        <h1 className="font-bold text-lg text-mocha">
            Juveria Amin
        </h1>

        <ul className="flex gap-6 text-mocha font-medium">
            <li>
            <Link to="/" className="hover:text-cream transition">Home</Link>
            </li>
            <li>
            <Link to="/projects" className="hover:text-cream transition">Projects</Link>
            </li>
            <li>
            <Link to="/contact" className="hover:text-cream transition">Contact</Link>
            </li>
            <li>
            <Link to="/blog" className="hover:text-cream transition">Blog &lt;3</Link>
            </li>
        </ul>

        </nav>

    );
}

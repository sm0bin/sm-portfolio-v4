import { IoMdCloudDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinksWithPath = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },

    ]

    const navLinks = navLinksWithPath.map((link) => {
        return (
            <li key={link.path}>
                <NavLink to={link.path}>{link.title}</NavLink>
            </li>
        )
    })

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Shehjad Mobin</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn btn-secondary">Resume <IoMdCloudDownload className="text-2xl" /></NavLink>
            </div>
        </div>
    );
};

export default Navbar;
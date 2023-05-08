import { FC } from 'react';
import { Link } from 'react-scroll';

const Navbar: FC = () => (
    <nav className="flex  justify-between items-center h-14  px-10 text-lg bg-[#a832af] z-50 rounded-b-md text-black sticky top-0 left-0 ">
        <div />
        <ul className="flex items-center space-x-6 cursor-pointer font-medium ">
            <Link to="about">
                <li>About </li>
            </Link>
            <Link to="service">
                <li>Services</li>
            </Link>
            <Link to="resume">
                <li>Resume</li>
            </Link>
            <Link to="skills">
                <li>Skills</li>
            </Link>
            <Link to="projects">
                <li>Projects</li>
            </Link>
            <Link to="contact">
                <li>Contact</li>
            </Link>
        </ul>
    </nav>
);

export default Navbar;

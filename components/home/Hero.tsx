/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { CgArrowLongDownR } from 'react-icons/cg';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import Typed from 'react-typed';

const Hero: FC = () => (
    <main className="flex flex-col relative justify-center items-center h-[90vh] w-full ">
        <h1 className="text-[4.5rem] font-extrabold ">Zuberiya Fathima</h1>
        <div className=" space-x-3 items-center font-extrabold mt-4 flex">
            <span className="text-3xl">I'm a </span>
            <p>
                <Typed
                    strings={['FRONTEND DEVELOPER', 'WEB DESIGNER', 'FULLSTACK DEVELOPER']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                    className="text-[#a8328f] italic text-3xl"
                />
            </p>
        </div>
        <div className="absolute font-semibold text_color bottom-5 left-8 animate-bounce space-y-2">
            {/* <p>S</p>
            <p>C</p>
            <p>R</p>
            <p>O</p>
            <p>L</p>
            <p>L</p> */}

            <CgArrowLongDownR className="text-6xl" />
        </div>
        <div className="absolute bottom-5 right-8 space-y-2">
            <FaFacebookSquare className="text-4xl rounded-lg" />
            <FaTwitterSquare className="text-4xl rounded-lg" />
            <FaLinkedin className="text-4xl rounded-lg" />
        </div>
    </main>
);

export default Hero;

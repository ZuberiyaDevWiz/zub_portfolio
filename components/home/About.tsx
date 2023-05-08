/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const About: FC = () => (
    <section className="flex flex-col  items-center h-screen w-full py-20 px-20 " id="about">
        <h1 className=" ">Get to know me</h1>
        <h1 className="text-4xl py-3 border-b-4 border-b-[#a832af] font-extrabold">About Me</h1>
        <div className="grid grid-cols-2 gap-x- w-[80%] mx-auto mt-10">
            <Image src="/profile.jpg" alt="Picture of the author" width={500} height={500} />
            <div>
                <h3 className="text-xl font-bold text_color py-5">Who am I?</h3>
                <h2 className=" py-2 border-b-2 border-b-[#a832af]  text-2xl font-extrabold ">
                    I'm Zuberiya Fathima, a Web Designer and Developer
                </h2>
                <p className="text-xs py-5 font-medium text-gray-500">
                    As a frontend developer in an ecommerce platform, I'm responsible for designing
                    and maintaining the user interface and experience of the ecommerce site or
                    application. My role involves creating and implementing designs, optimizing web
                    pages, integrating third-party tools, and ensuring a seamless shopping
                    experience for customers. Collaboration with other teams is essential to ensure
                    the success of the platform.
                </p>
                <div className="py-5 grid grid-cols-2 gap-y-5  w-[90%] ">
                    <h5 className="text-sm font-medium text-gray-500">
                        <span className="font-semibold ">Name :</span> Zuberiya Fathima
                    </h5>
                    <h5 className="text-sm font-medium text_color">
                        <span className="font-semibold text-gray-500">Email :</span>{' '}
                        zuberiya139@gmail.com
                    </h5>
                    <h5 className="text-sm font-medium text-gray-500">
                        <span className="font-semibold ">Date of Birth :</span> 13-03-1999
                    </h5>
                    <h5 className="text-sm font-medium text-gray-500">
                        <span className="font-semibold">From :</span> Bangalore, India
                    </h5>
                </div>
                <div className="flex gap-x-3 mt-2 text-3xl pb-10">
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <FaLinkedin />
                </div>
                <Link href="/zuberiyaCV.pdf" className="">
                    <button
                        type="button"
                        className="bg_color rounded-full py-1 px-2 text-sm font-semibold tracking-wider font-sans text-white"
                    >
                        Download CV
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default About;

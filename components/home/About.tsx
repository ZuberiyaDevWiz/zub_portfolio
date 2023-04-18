/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { type FC } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const About: FC = () => (
    <section className="flex flex-col  items-center h-screen w-full py-10 px-20 " id="about">
        <h1 className=" ">Get to know me</h1>
        <h1 className="text-4xl py-3 border-b-4 border-b-[#a832af] font-extrabold">About Me</h1>
        <div className="grid grid-cols-2 gap-x-10 w-[80%] mx-auto mt-10">
            <Image src="/profile.jpg" alt="Picture of the author" width={350} height={500} />
            <div>
                <h3 className="text-xl font-bold text_color py-10">Who am I?</h3>
                <h2 className=" py-2 border-b-2 border-b-[#a832af]  text-2xl font-extrabold ">
                    I'm Zuberiya Fathima, a Web Designer and Developer
                </h2>
                <p className="text-xs py-5 font-medium text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit
                    porro dolore labore explicabo ipsum, consequatur autem sit quam assumenda quas
                    quaerat nisi hic quasi, libero, magni doloribus nam modi! Itaque, reprehenderit
                    aspernatur explicabo odit amet soluta saepe, minima qui voluptatem earum culpa
                </p>
                <div className="py-5 grid grid-cols-2 gap-y-5  w-[90%] ">
                    <h5 className="text-sm font-medium text-gray-500">
                        <span className="font-semibold ">Name :</span> Zuberiya Fathima
                    </h5>
                    <h5 className="text-sm font-medium text_color">
                        <span className="font-semibold text-gray-500">Email :</span>{' '}
                        zuberiyafathima@gmail.com
                    </h5>
                    <h5 className="text-sm font-medium text-gray-500">
                        <span className="font-semibold ">Date of Birth :</span> 13-03-1999
                    </h5>
                    <h5 className="text-sm font-medium text-gray-500">
                        <span className="font-semibold">From :</span> Bangalore, India
                    </h5>
                </div>
                <div className="flex gap-x-3 mt-2 text-3xl">
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <FaLinkedin />
                </div>
                <div className="py-6">
                    <button
                        type="button"
                        className="bg_color rounded-full py-1 px-2 text-sm font-semibold tracking-wider font-sans text-white"
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default About;

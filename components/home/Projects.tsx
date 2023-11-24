import Image from 'next/image';
import Link from 'next/link';

const Projects = () => (
    <section className="flex flex-col h-screen mx-auto pt-[13rem] w-[70%]" id="projects">
        <div className="flex flex-col space-y-1 pb-3 mx-auto ">
            <h3 className="text-gray-300 text-sm font-semibold text-center">
                Showcasing some of my best work
            </h3>
            <h1 className="text-4xl  font-bold text-white mx-auto border-b-4 pb-1 border-b-[#a832af] w-fit">
                Projects
            </h1>
            <Link href="https://cartibuy.sa" passHref className="pt-10">
                <Image src="/cartibuy-sa_logo.png" alt="cartibuy" width={500} height={500} />
            </Link>
        </div>
    </section>
);

export default Projects;

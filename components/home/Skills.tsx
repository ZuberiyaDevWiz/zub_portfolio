/* eslint-disable react/self-closing-comp */
const Skills = () => (
    <section className="mx-auto pt-10 w-[70%] " id="skills">
        <div className="flex flex-col space-y-2">
            <p className="text-sm  text-gray-500 font-semibold">
                My level of knowledge in some tools
            </p>
            <h1 className="text-white text-2xl font-bold pb-14">My Skills</h1>
        </div>
        <div className="grid grid-cols-3 gap-10 ">
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between text-sm">
                    HTML/CSS
                    <span className="flex justify-end text-xs pr-3">99%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="99" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    Tailwind
                    <span className="flex justify-end text-xs pr-3">99%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="99" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    TypeScript
                    <span className="flex justify-end text-xs pr-3">80%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="80" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    JavaScript
                    <span className="flex justify-end text-xs pr-3">80%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="80" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    ReactJS
                    <span className="flex justify-end text-xs pr-3">99%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="99" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    NextJS
                    <span className="flex justify-end text-xs pr-3">99%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="99" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    NodeJS
                    <span className="flex justify-end text-xs pr-3">60%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="60" max="100" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="flex justify-between">
                    MongoDB
                    <span className="flex justify-end text-xs pr-3">70%</span>
                </p>
                <progress className="progress progress-secondary w-80 " value="70" max="100" />
            </div>
        </div>
    </section>
);
export default Skills;

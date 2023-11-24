/* eslint-disable react/jsx-key */
/* eslint-disable react/self-closing-comp */

import { FC } from 'react';

interface ISkills {
    progressValue: string;
    progressMax: string;
    title: string;
    percentage: string;
}

const SkillField: FC<ISkills> = ({ percentage, progressValue, progressMax, title }) => (
    <div className="flex flex-col space-y-2">
        <p className="flex items-center justify-between text-sm">
            {title}
            <span className="flex justify-end text-xs pr-10">{percentage}</span>
        </p>
        <progress
            className="progress progress-secondary w-80 "
            value={progressValue}
            max={progressMax}
        />
    </div>
);

const SkillsArr = [
    {
        title: ' HTML/CSS',
        progressValue: '99',
        progressMax: '100',
        percentage: '99%',
    },
    {
        title: ' Tailwind',
        progressValue: '99',
        progressMax: '100',
        percentage: '99%',
    },
    {
        title: 'TypeScript',
        progressValue: '90',
        progressMax: '100',
        percentage: '90%',
    },
    {
        title: 'JavaScript',
        progressValue: '80',
        progressMax: '100',
        percentage: '80%',
    },
    {
        title: 'ReactJS',
        progressValue: '99',
        progressMax: '100',
        percentage: '99%',
    },
    {
        title: 'NextJS',
        progressValue: '99',
        progressMax: '100',
        percentage: '99%',
    },
    {
        title: 'NodeJS',
        progressValue: '60',
        progressMax: '100',
        percentage: '60%',
    },
    {
        title: 'MongoDB',
        progressValue: '70',
        progressMax: '100',
        percentage: '70%',
    },
];

const Skills = () => (
    <section className="mx-auto pt-40 w-[70%] " id="skills">
        <div className="flex flex-col space-y-2">
            <p className="text-sm  text-gray-300 font-semibold">
                My level of knowledge in some tools
            </p>
            <h1 className="text-white text-2xl font-bold pb-14">My Skills</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 text-gray-200">
            {SkillsArr.map((skill) => (
                <SkillField
                    title={skill.title}
                    progressValue={skill.progressValue}
                    progressMax={skill.progressMax}
                    percentage={skill.percentage}
                />
            ))}
        </div>
    </section>
);
export default Skills;

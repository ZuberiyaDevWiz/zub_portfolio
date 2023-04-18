/* eslint-disable react/jsx-key */
import Card from 'components/common/Card';
import Link from 'next/link';

const ExpEdu = () => {
    const expArr = [
        {
            text: 'ksdksdkajsdkkjsad',
            title: 'lsdlasdlaskdlaskld',
            desc: 'lsdalksdlaksdlasd',
        },
        {
            text: 'sldlaskdlsdlas',
            title: 'lskdlaskdlkasdlkasld',
            desc: 'lsdlaskdlasdlaslkdkas',
        },
        {
            text: 'smdlasdlasdlasldkasd',
            title: 'lsadlsakdlkslsldsaldsa',
            desc: 'sldlasdlkadslksdaklds',
        },
    ];
    const eduArr = [
        {
            text: 'ksdksdkajsdkkjsad',
            title: 'lsdlasdlaskdlaskld',
            desc: 'lsdalksdlaksdlasd',
        },
        {
            text: 'sldlaskdlsdlas',
            title: 'lskdlaskdlkasdlkasld',
            desc: 'lsdlaskdlasdlaslkdkas',
        },
    ];

    return (
        <section className="flex flex-col   h-screen mx-auto pt-10 w-[50%] " id="resume">
            <div className="flex flex-col space-y-1 pb-3 mx-auto ">
                <h3 className="text-gray-500 text-sm font-semibold">check out my Resume</h3>
                <h1 className="text-4xl  font-bold text-white mx-auto border-b-4 pb-1 border-b-[#a832af] w-fit">
                    <Link href="/">Resume</Link>
                </h1>
            </div>
            <h1 className="text-2xl text-white font-bold pt-6 ">Experience</h1>
            <div className="grid grid-cols-3 gap-x-10 gap-y-20 pt-6">
                {expArr.map((exp) => (
                    <Card text={exp.text} title={exp.title} desc={exp.desc} />
                ))}
            </div>
            <h1 className="text-2xl text-white font-bold pt-10 ">Education</h1>
            <div className="grid grid-cols-2 gap-x-10 gap-y-20 pt-6">
                {eduArr.map((edu) => (
                    <Card text={edu.text} title={edu.title} desc={edu.desc} />
                ))}
            </div>
        </section>
    );
};

export default ExpEdu;

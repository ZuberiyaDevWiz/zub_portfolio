/* eslint-disable react/jsx-key */
import Card from 'components/common/Card';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';

const Services = () => {
    const serviceArr = [
        {
            icon: <AiFillHtml5 />,
            title: 'WEB DESIGN',
            desc: 'I have worked on a wide range of websites for Blogs, Real Estate, Corporate, E-Commerce, Business, and any other industry. so I can design any kind of website.',
        },
        {
            icon: <IoMdPhotos />,
            title: 'LANDING PAGE',
            desc: 'I will create you responsive design website landing page, which would be modern and eye-catching. contact for more.',
        },
        {
            icon: <IoMdPhotos />,
            title: 'ECOMMERCE',
            desc: 'I will create professional ECommerce website for you company or your business, for more details please contact.',
        },
        {
            icon: <IoMdPhotos />,
            title: 'sfdfsffdsdfffdfsdf',
            desc: 'fsmm,smd,,mmds,fm,mfma,fmamf',
        },
        {
            icon: <IoMdPhotos />,
            title: 'sfdfsffdsdfffdfsdf',
            desc: 'fsmm,smd,,mmds,fm,mfma,fmamf',
        },
        {
            icon: <IoMdPhotos />,
            title: 'sfdfsffdsdfffdfsdf',
            desc: 'fsmm,smd,,mmds,fm,mfma,fmamf',
        },
    ];

    return (
        <>
            <section className="flex flex-col   h-screen mx-auto pt-20 w-[70%] ">
                <p className="text-gray-500 font-semibold text-sm">
                    services i offer to my clients
                </p>
                <h1 className="text-white text-2xl font-bold pb-10">My Services</h1>
                <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                    {serviceArr.map((service) => (
                        <Card icon={service.icon} title={service.title} desc={service.desc} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;

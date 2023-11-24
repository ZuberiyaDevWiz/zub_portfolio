/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-key */
import Card from 'components/common/Card';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';
import { CgWebsite } from 'react-icons/cg';
import { IoAccessibilityOutline } from 'react-icons/io5';
import { FiSettings, FiMonitor } from 'react-icons/fi';

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
            icon: <FiMonitor />,
            title: 'ECOMMERCE',
            desc: 'I will create professional ECommerce website for you company or your business, for more details please contact.',
        },
        {
            icon: <FiSettings />,
            title: 'PERFORMANCE OPTIMIZATION',
            desc: ' I will improve site speed and performance by optimizing images, reducing code size, and implementing other best practices.',
        },
        {
            icon: <IoAccessibilityOutline />,
            title: 'ACCESSIBILITY',
            desc: 'I will ensure that a website or application is accessible to users with disabilities, such as those using screen readers.',
        },
        {
            icon: <CgWebsite />,
            title: 'WEBSITE MAINTAINANCE & UPDATES',
            desc: 'I will provide ongoing support and maintenance to keep a website up to date and functioning properly.',
        },
    ];

    return (
        <>
            <section className="flex flex-col   h-screen mx-auto pt-20 w-[70%] " id="service">
                <p className="text-gray-300 font-semibold text-sm">
                    services i offer to my clients
                </p>
                <h1 className="text-white text-2xl font-bold pb-10">My Services</h1>
                <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                    {serviceArr.map((service) => (
                        <Card icon={service.icon} title={service.title} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;

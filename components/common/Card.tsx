/* eslint-disable react/jsx-key */
import { FC, ReactNode } from 'react';

interface cardProps {
    icon?: ReactNode;
    text?: string;
    title: string;
}

const Card: FC<cardProps> = ({ icon, title, text }) => (
    <section className="bg-gray-900 rounded-md px-5 py-7">
        <div className="flex flex-col space-y-3 ">
            <h1 className="text_color text-6xl">{icon}</h1>

            <h3 className="text_color">{text}</h3>

            <h2 className="text-white font-bold text-xl">{title}</h2>
        </div>
    </section>
);

export default Card;

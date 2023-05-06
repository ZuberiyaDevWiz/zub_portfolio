/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */

import { gsap } from 'gsap';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

interface CircleProps {
    size: string;
    delay: number;
}

export interface CircleRef {
    moveTo(x: number, y: number): void;
}

const Circle = forwardRef<CircleRef, CircleProps>(({ size, delay }, ref) => {
    const el = useRef<HTMLDivElement>(null);

    useImperativeHandle(
        ref,
        () => ({
            moveTo(x: number, y: number) {
                gsap.to(el.current, { x, y, delay });
            },
        }),
        [delay]
    );

    return <div className={`circle ${size}`} ref={el} />;
});

export default Circle;

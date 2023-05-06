/* eslint-disable react/display-name */

import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { gsap } from 'gsap';

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

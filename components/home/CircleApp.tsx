import React, { useEffect, useRef } from 'react';

import type { CircleRef } from './Circle';
import Circle from './Circle';

const CircleApp = () => {
    const circleRefs = useRef<CircleRef[]>([]);

    circleRefs.current = [];

    useEffect(() => {
        const { innerWidth, innerHeight } = window;
        circleRefs.current.forEach((ref) => ref.moveTo(innerWidth / 2, innerHeight / 2));

        const onMove = ({ clientX, clientY }: MouseEvent) => {
            circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
        };

        window.addEventListener('pointermove', onMove);

        return () => window.removeEventListener('pointermove', onMove);
    }, []);

    const addCircleRef = (ref: CircleRef | null) => {
        if (ref) {
            circleRefs.current.push(ref);
        }
    };

    return (
        <div className="app">
            <Circle size="sm" ref={addCircleRef} delay={0} />
            <Circle size="md" ref={addCircleRef} delay={0.1} />
            <Circle size="lg" ref={addCircleRef} delay={0.2} />
        </div>
    );
};

export default CircleApp;

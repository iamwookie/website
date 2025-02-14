'use client';

import { useState, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { incrementValentines } from 'app/actions';

import Container from './Container';
import Response from './Response';
import { Fireworks, type FireworksHandlers } from '@fireworks-js/react';

export default function Prompt({ count }: { count: number }) {
    const [response, setResponse] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const fireworksRef = useRef<FireworksHandlers>(null);

    const isDesktop = useMediaQuery({ minWidth: 768 });

    const handlePrompt = useCallback(() => {
        const maxX = window.innerWidth - (isDesktop ? 420 : 300);
        const maxY = window.innerHeight - (isDesktop ? 220 : 200);

        const newX = (Math.random() - 0.5) * maxX;
        const newY = (Math.random() - 0.5) * maxY;

        setPosition({ x: newX, y: newY });
    }, [isDesktop]);

    const handleResponse = () => {
        incrementValentines();
        fireworksRef.current?.start();
        setPosition({ x: 0, y: 0 });
        setResponse(true);
    };

    return (
        <>
            {/* Container */}
            <Container count={count} position={position}>
                <Response onYes={handleResponse} onNo={handlePrompt} response={response} />
            </Container>

            {/* Fireworks */}
            <Fireworks
                autostart={false}
                ref={fireworksRef}
                options={{ hue: { min: 300, max: 350 }, friction: 1, particles: 100 }}
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            />
        </>
    );
}

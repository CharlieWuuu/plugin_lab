'use client';

import { useRef } from 'react';
import gsap from 'gsap';

export default function GsapOnClickPage() {
    const boxRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (boxRef.current) {
            gsap.fromTo(boxRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-100">
            <button onClick={handleClick} className="px-4 py-2 text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition">
                播放動畫
            </button>

            <div ref={boxRef} className="w-40 h-16 bg-blue-500 text-white flex items-center justify-center text-lg rounded shadow">
                Hello
            </div>
        </div>
    );
}

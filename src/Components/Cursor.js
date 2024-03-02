import React, { useEffect, useState } from 'react'
import '../App.css'


const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    

    return (
        <>
            <div
                className="custom-cursor"
                style={{ left: `${position.x}px`, top: `${position.y}px` }} >
                <img src="../../Images/cursor.png" alt="Custom Cursor" />
            </div>
        </>
    )
}

export default Cursor;
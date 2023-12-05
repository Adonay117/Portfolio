import React, { useEffect, useState } from 'react';

const Toggle = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
    const [active, setActive] = useState(mode === 'dark');

    useEffect(() => {
        const body = document.querySelector('body');
        const elements = document.querySelectorAll('.icons-network, .logo, .project, .services, .about, .skills');
        
        elements.forEach(el => {
            el.className.split(' ').forEach(cls => {
                // Solo intenta eliminar la clase si el elemento la tiene
                if (el.classList.contains(`${cls}-dark`)) {
                    el.classList.remove(`${cls}-dark`);
                }
            });
        });

        if (mode === 'dark') {
            body.classList.add('dark');
            elements.forEach(el => el.classList.add(`${el.className}-dark`));
        } else {
            body.classList.remove('dark');
        }
    }, [mode]);

    const handleClick = () => {
        setActive(!active);
        setMode(active ? 'light' : 'dark');
        localStorage.setItem('mode', active ? 'light' : 'dark');
    };

    return (
        <div className={`toggle ${active ? 'active' : ''}`} onClick={handleClick}>
            
        </div>
    );
};

export default Toggle;
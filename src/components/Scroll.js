import React, { useEffect } from 'react';

const Scroll = ({ targetId, offset }) => {
    useEffect(() => {
        const element = document.getElementById(targetId);
        if (element) {
            const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = offset || 0;
            const yOffsetWithVh = yOffset * window.innerHeight / 100; // Convertir le décalage en vh en pixels
            window.scrollTo({ top: yCoordinate - yOffsetWithVh, behavior: 'smooth' });
        }
    }, [targetId, offset]);

    return null;
};

export default Scroll;

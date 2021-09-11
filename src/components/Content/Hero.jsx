import React from 'react';
import useDarkMode from 'use-dark-mode';

const Hero = () => {
    const {value} = useDarkMode(false);
    const isDarkMode = value;
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">
            {isDarkMode ? 'I wear my sunglasses at night!' : 'My futures so bright, I got to wear shades!'}
            </h1>
        </div>
    )
}

export default Hero;

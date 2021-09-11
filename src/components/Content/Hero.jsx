import React from 'react';
import {Text} from '../../context/LanguageContext';

const Hero = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">
                <Text tid="heroHeader" />
            </h1>
            <p className="large"><Text tid="heroParagraph" /></p>
        </div>
    )
}

export default Hero;

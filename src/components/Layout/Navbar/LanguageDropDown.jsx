import React, {useContext} from 'react';
import {languageOptions} from '../../../data/language';
import {LanguageContext} from '../../../context/LanguageContext';


const LanguageDropDown = () => {
    const {userLanguage, userLanguageChange} = useContext(LanguageContext);
    const handleLanguageChange = (e) => userLanguageChange(e.target.value);
    return (
        <>
            <select className="form-select" onChange={handleLanguageChange} value={userLanguage}>
              {Object.entries(languageOptions).map(([id, name]) => 
              <option key={id} value={id}>{name}</option>
              )}  
            </select>
        </>
    );
};

export default LanguageDropDown;

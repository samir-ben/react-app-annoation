import React from 'react';

const VerseItem = (props) => {
    const {verses} = props;
    return (
   
            <p className="white-text">{verses}</p>
     
    );
};

export default VerseItem;


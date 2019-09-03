import React from 'react';

const Person = props => {
    return (
        <div className="person">
            <p>{props.number}</p>
        </div>
    );
};

export default Person;


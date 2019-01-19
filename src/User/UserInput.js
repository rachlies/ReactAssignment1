import React from 'react';
import './User.css';

const input = (props) => {
    return (
        <div className="User">
            <input type="text" onChange = {props.changed}></input>
        </div>
    );
};

export default input;
import React from 'react';
import './User.css';

const output = (props) => {
    return (
        <div className="User">
           <p onClick = {props.click}>Para2 for {props.username}</p>
        </div>
    );
}


export default output;
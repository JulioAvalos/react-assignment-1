import React from 'react';
import './UserInput.css';

const userInput = (props) => {

    const style= {
        padding: '16px'
    };

    return (
        <div style={style}>
            <input 
                className="UserInput" 
                type="text" 
                onChange={props.changed} 
                value={props.name}/>
        </div>
    );
};

export default userInput;
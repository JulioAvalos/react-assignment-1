import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
    <div className="UserOutput">
        <p style={{fontWeight: 'bold', backgroundColor: 'cyan', padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
        <p style={{fontWeight: 'bold', backgroundColor: 'cyan' , padding: '10px' }}>
            Etiam luctus justo non mollis dapibus. Vestibulum erat metus, euismod at sodales eget, lobortis vel orci. 
        </p>
        <p style={{fontWeight: 'bold', backgroundColor: 'cyan', padding: '10px'  }}>
            Username: {props.username}
        </p>
    </div>
    );
};

export default userOutput;
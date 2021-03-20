import React from 'react';

function Button({label, onClick}) {
    return (
        <btn onClick={onClick}>
            {label}
        </btn>
    );
}

export default Button;

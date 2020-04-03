import React from 'react'


const Buttons = ({color, symbol, operation,testId}) => {

    const buttonStyle = {
        'margin': '6px',
        'backgroundColor': color ? color : '#a23939',
        'padding': '16px',
        'border': 'none',
        'color': 'white',
    };

    return (
        <button style={buttonStyle} data-testid={testId} onClick={() => operation(symbol)}>
            {symbol}
        </button>
    )
};

export default Buttons

import React from 'react'


const TextArea = ({text, testId}) => {
    return (
        <textarea data-testid={testId} className={'Screen'} defaultValue={text}></textarea>
    )
};

export default TextArea

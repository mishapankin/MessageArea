import React from 'react';
import TextareaAutoResize from 'react-textarea-autosize';
import './PlainTextArea.scss';

const PlainTextArea = {
    img: 'T',
    type: 'plain_text',
    component: function(props) {
        return (
            <TextareaAutoResize
                className="plain_text_area"
                onChange={(event) => props.update(event.target.value)}
            />
        );
    }
}


export default PlainTextArea;
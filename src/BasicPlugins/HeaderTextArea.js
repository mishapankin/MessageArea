import React from 'react';
import TextareaAutoResize from 'react-textarea-autosize';
import './HeaderTextArea.scss';

const HeaderTextArea = {
    img: 'H',
    type: 'header',
    component: function(props) {
        return (
            <TextareaAutoResize 
                className="header_text_area"
                onChange={(event) => props.update(event.target.value)}
            />
        );
    }
}

export default HeaderTextArea;
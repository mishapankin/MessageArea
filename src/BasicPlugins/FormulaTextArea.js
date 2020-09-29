import React from 'react';
import TextareaAutoResize from 'react-textarea-autosize';
import './FormulaTextArea.scss';
import katex from 'katex/dist/katex.mjs';
import 'katex/dist/katex.min.css';

const FormulaTextArea = {
    img: 'S',
    type: 'formula',
    component: function(props) {
        const formula_ref = React.createRef();

        const change = (value) => {
            props.update(value);
            katex.render(value, formula_ref.current, {
                throwOnError: false,
                output: "htmlAndMathml",
                displayMode: true,
            });
        }
        return (
            <div className="formula">
                <TextareaAutoResize
                    className="formula__text_area"
                    onChange={(event) => change(event.target.value)}
                />
                <div ref={formula_ref} className="formula__renderer"/>
            </div>
        );
    }
}


export default FormulaTextArea;
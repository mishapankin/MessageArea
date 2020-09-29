import React, { useState } from 'react';
import './MessageArea.scss';
import PlainTextArea from './BasicPlugins/PlainTextArea';
import HeaderTextArea from './BasicPlugins/HeaderTextArea';
import FormulaTextArea from './BasicPlugins/FormulaTextArea';

const PluginList = [
    PlainTextArea,
    HeaderTextArea,
    FormulaTextArea,
];

function MessageArea(props) {
    const [components, setComponents] = useState([]);
    const [values, setValues] = useState([]);

    const addComponent = (field) => {
        setComponents(components => components.concat(field.component(
            {
                update: (value) => updateValues(components.length, value),
            }
            ))
        );
        const newEl = {type: field.type, text: ""};
        setValues(values => [...values, newEl]);
    }

    const updateValues = (ind, value) => {
        setValues(values => {
            let newValues = values;
            newValues[ind].text = value;
            return newValues;
        });
    }

    return (
    <div className="message-area">
        <div className="message-area__panel">
            <div className="message-area__panel__buttons">
                {
                    PluginList.map((item, ind) => (
                        <span key={ind} className="message-area__panel__spans__button" onClick={() => addComponent(item)}>
                            {item.img}
                        </span>
                    ))
                }
            </div>
            <div className="message-area__panel__send" onClick={() => props.send(values)}>
                Send
            </div>
        </div>
        <div className="message-area__body">
            {
                components.map((item, ind) => (
                    <div key={ind} className="message-area__body__field">
                        {item}
                    </div>
                ))
            }
        </div>
    </div>);
}

export default MessageArea;
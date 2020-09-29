import React, { useState } from 'react';
import './App.scss';
import './MessageArea';
import MessageArea from './MessageArea';

function App() {
    const [text, setText] = useState("");
    return (

        <div className="App">
            <MessageArea
                send={(value) => setText(text => JSON.stringify(value))}
            />
            <div>
                {text}
            </div>
        </div>
    );
}

export default App;

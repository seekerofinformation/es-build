import React, {useState} from 'react';

const App = () => {
    const [state, setState] = useState(0)

    const onBtnClick = () => {
        throw new Error()
    }

    return (
        <div>
            <h1>value = {state}</h1>
            <button onClick={onBtnClick}>Click Me</button>
        </div>
    );
};

export default App;
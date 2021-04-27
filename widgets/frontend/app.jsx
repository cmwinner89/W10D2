import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const App = (props) => {
    const titles = [
        {title: "one", content: "I am first"},
        {title: "two", content: "I am two"},
        {title: "three", content: "I am three"}

    ]
    
    return (
        <div>
            <Clock />
            <Tabs titles={titles}/>
        </div>
    )
}

export default App;
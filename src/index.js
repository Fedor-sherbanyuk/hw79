import React from 'react';
import ReactDOM from 'react-dom/client';
import Definitions from "./components/Definitions";


const root = ReactDOM.createRoot(document.getElementById('root'));
const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
];
root.render(
    <Definitions data={definitions}/>
);

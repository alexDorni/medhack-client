import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

export function main() {
    return (
        <div>
            {header()}
            {info()}
            {infoAboutOurApp()}
            {startButton()}
        </div>
    )
}

function header() {
    return (
        <h1>Jurnal RoVax</h1>
    )
}

function info() {
    return (
        <div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In congue suscipit sem sed hendrerit. Quisque convallis,
                ligula eget dictum accumsan, turpis dolor rhoncus mauris,
                vitae eleifend est ipsum id nulla. Quisque posuere libero
                commodo libero pulvinar vehicula. Suspendisse pulvinar, velit
                non tristique rhoncus, sapien erat imperdiet mauris, at luctus
                justo nunc ut massa. Sed suscipit tincidunt libero vitae dignissim.
                Proin pretium bibendum sem ac dictum. Nulla semper vulputate convallis.</h3>
            <hr></hr>
        </div>
    )

}

function infoAboutOurApp() {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In congue suscipit sem sed hendrerit. Quisque convallis,
            ligula eget dictum accumsan, turpis dolor rhoncus mauris,
            vitae eleifend est ipsum id nulla. Quisque posuere libero
            commodo libero pulvinar vehicula. Suspendisse pulvinar, velit
            non tristique rhoncus, sapien erat imperdiet mauris, at luctus
            justo nunc ut massa. Sed suscipit tincidunt libero vitae dignissim.
            Proin pretium bibendum sem ac dictum. Nulla semper vulputate convallis.</p>
    )
}


function startButton() {
    return (
        <div class="buttons">
            <button class="btn-hover color-1">Începe</button>
        </div>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

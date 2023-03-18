import React from "react";


import './login.css';

let cnpLogin;
let passwdLogin;
let loginButton;

function login() {
    return (
        <div id={'msform'}>
            <h1>
                Autentificare
            </h1>
            <p>
                <input type={"text"} id={cnpLogin} placeholder={"cnp"}/>
            </p>

            <p>
                <input type={"password"} id={passwdLogin} placeholder={"parola"}/>
            </p>

            <div className="buttons">
                <button className="btn-hover color-1" id={loginButton}>Intră</button>
            </div>


        </div>
    )
}

export function mainLogin() {
    return (
        <div>
            {login()}
        </div>
    )
}

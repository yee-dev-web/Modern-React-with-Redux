import React from "react";

//import Style from "./style.css"

function App() {
    // let message = 'Bye There!'
    // let number =  Math.random()
    // if(number < 0.5){
    //   message = 'Hello there!'
    // }

    // const date = new Date();
    // const time = date.toLocaleTimeString();
    // <h1>{new Date().toLocaleTimeString()}</h1>

    // const name ='Yunus';
    // const age = 21;

    // const inputType = "number"
    // const minValue = 5;
    // const message = 'Enter age'

    return (
        <div>
            <input style={{color: "red", border: '3px solid blue'}}
                   maxLength={7}
            />

            <input placeholder='Hi there hello'
                   id='ads'
                   spellCheck
                   type="text"
            />


        </div>
    );
}

export default App;

const message = 'hi';

export {message}
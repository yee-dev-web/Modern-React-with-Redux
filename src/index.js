// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a references to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el)


// 4) Create a component
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

            <input placeholder='hi there'
                   id='ads'
                   spellCheck
                   type="text"
            />


        </div>
    );
}

// 5) Show the compoent on the screen
root.render(<App/>);






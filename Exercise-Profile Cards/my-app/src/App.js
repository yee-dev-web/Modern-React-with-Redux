import React from "react";
import ProfileCard from "./ProfileCard";
import css from "./style.css"

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title='Alexa' handle='@alexa99'/>
            <ProfileCard title='Cortana' handle='@cortana32'/>
            <ProfileCard title='Siri' handle='@siri01'/>
        </div>

    );
}

export default App;

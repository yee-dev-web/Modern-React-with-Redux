import {useState} from "react";
import AnimalShow from "./AnimalShow";
import './App.css'


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    //const [count, setCount] = useState(0)
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        // setCount(count + 1)
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>
                Add Animal
            </button>
            <div className='animal-list'>
                {renderedAnimals}
            </div>

        </div>
    );

}

export default App;
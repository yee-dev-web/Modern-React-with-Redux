import {useState} from "react";
import CarCreate from "./components/CarCreate";
import CarList from "./components/CarList"

function App() {
  const [cars, setCar] = useState([])
  const createCar = (model) => {
    const updatedCars = [
      ...cars, {
        id: Math.round(Math.random() * 99)
        , model
      },
    ]

    setCar(updatedCars)
  }

  const deleteCar = (id) => {
    const updatedCars = cars.filter((car) => {
      return car.id !== id
    })

    setCar(updatedCars)
  }


  return (
      <div>
        <CarList cars={cars} onDelete={deleteCar}/>
        <CarCreate onCreate={createCar}/>
      </div>
  )
}

export default App
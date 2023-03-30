import {useState} from "react";
import CarCreate from "./components/CarCreate";
import CarList from "./components/CarList"

function App() {
  const [cars, setCar] = useState([])

  const editCar = (id, newModel) => {
    const updatedCars = cars.map((car) => {
      if (car.id === id) {
        return {...car, model: newModel}
      }

      return car
    })

    setCar(updatedCars)
  }

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
        <CarList cars={cars} onDelete={deleteCar} onEdit={editCar}/>
        <CarCreate onCreate={createCar}/>
      </div>
  )
}

export default App
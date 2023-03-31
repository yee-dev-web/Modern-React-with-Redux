import {useEffect, useState} from "react";
import CarCreate from "./components/CarCreate";
import CarList from "./components/CarList"
import axios from "axios";

function App() {
  const [cars, setCar] = useState([])

  const fetchCars = async () => {
    const response = await axios.get('http://localhost:3001/cars')

    setCar(response.data)
  }

  useEffect(() => {
    fetchCars()
  }, [])

  const editCar = async (id, newModel) => {

    const response = await axios.put(`http://localhost:3001/cars/${id}`, {
      model: newModel
    })

    const updatedCars = cars.map((car) => {
      if (car.id === id) {
        return {...car, ...response.data}
      }

      return car
    })

    setCar(updatedCars)
  }

  const createCar = async (model) => {

    const response = await axios.post('http://localhost:3001/cars', {
      model,
    })
    const updatedCars = [...cars, response.data]

    setCar(updatedCars)
  }

  const deleteCar = async (id) => {

    await axios.delete(`http://localhost:3001/cars/${id}`)

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
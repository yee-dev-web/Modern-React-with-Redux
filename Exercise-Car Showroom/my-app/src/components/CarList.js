import CarShow from './CarShow'

function CarList({cars, onDelete, onEdit}) {
  const renderedCars = cars.map((car) => {
    return <CarShow key={car.id} car={car} onDelete={onDelete} onEdit={onEdit}/>
  })

  return (
      <div>
        {renderedCars}
      </div>
  )
}

export default CarList
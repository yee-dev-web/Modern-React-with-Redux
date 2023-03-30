import CarShow from './CarShow'
function CarList({cars,onDelete}){
  const renderedCars = cars.map((car)=>{
    return <CarShow key={car.id} car={car} onDelete={onDelete}/>
  })

  return(
    <div>
      {renderedCars}
    </div>
  )
}

export default CarList
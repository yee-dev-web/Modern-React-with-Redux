import {useState} from "react";
import CarEdit from './CarEdit'

function CarShow({car, onDelete}) {

  const [showEdit]

  const carDelete = () => {
    onDelete(car.id)
  }

  return (
      <div className='book-show'>
        <div> {car.model} </div>
        <div className='actions'>
          <button className='delete' onClick={carDelete}>
            Delete
          </button>
        </div>
      </div>
  )
}

export default CarShow

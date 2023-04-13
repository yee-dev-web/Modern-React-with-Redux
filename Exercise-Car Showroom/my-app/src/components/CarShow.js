import {useState} from "react";
import CarEdit from './CarEdit'


function CarShow({car, onDelete, onEdit}) {

  const [showEdit, setShowEdit] = useState(false)

  const carEdit = () => {
    setShowEdit(!showEdit)
  }

  const carDelete = () => {
    onDelete(car.id)
  }

  const handleSubmit = (id, newModel) => {
    setShowEdit(false)
    onEdit(id, newModel)
  }

  let content = <h3>{car.model}</h3>
  if (showEdit) {
    content = <CarEdit onSubmit={handleSubmit} car={car}/>
  }


  return (
      <div className='book-show'>
        <img
            alt='cars'
            src={`https://picsum.photos/id/${car.id}/300/200`}/>
        <div> {content} </div>
        <div className='actions'>
          <button className='edit' onClick={carEdit}>
            Edit
          </button>
          <button className='delete' onClick={carDelete}>
            Delete
          </button>
        </div>
      </div>
  )
}

export default CarShow

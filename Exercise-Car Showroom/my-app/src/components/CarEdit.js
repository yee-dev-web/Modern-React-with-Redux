import {useState} from "react";

function CarEdit({car, onSubmit}) {
  const [model, setModel] = useState(car.model)

  const handleChange = (e) => {
    setModel(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(car.id, model)
  }

  return (
      <form onSubmit={handleSubmit} className='book-edit'>
        <label>
          Model
        </label>
        <input className='input' value={model} onChange={handleChange}/>
        <button className='button is-primary'>
          Save
        </button>
      </form>
  )
}

export default CarEdit;
import {useState} from "react";

function CarCreate({onCreate}){
  const [model,setModel] = useState('')

  const handleChange =(e)=>{
    setModel(e.target.value)
  }
  const handleFormSubmit = (e)=>{
    e.preventDefault()
    onCreate(model)
    setModel('')
  }

  return(
     <div className='book-create'>
       <h3>Add a Car</h3>
       <form onSubmit={handleFormSubmit}>
         <label>Model</label>
         <input className='input' value={model} onChange={handleChange}/>
         <button className='button'>Create!</button>
       </form>
     </div>
  )
}

export default CarCreate
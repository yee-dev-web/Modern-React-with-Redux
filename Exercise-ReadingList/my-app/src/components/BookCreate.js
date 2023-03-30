import {useState} from "react";

function BookCreate({onCreate}){

  const [title,setTitle] = useState('')

  const handleFormSubmit =(e)=>{
    e.preventDefault()
    onCreate(title)
    setTitle('')//girişin icini bosaltir.
  }
  const handleChange =(e)=>{
    setTitle(e.target.value)
  }

  return(
     <div className='book-create'>
       <h3>
         Add a Book
       </h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange}/>
        <button className='button'>Create!</button>
      </form>
     </div>
  )
}


export default BookCreate;
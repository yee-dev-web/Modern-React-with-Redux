import {useState} from "react";

function BookCreate({onCreate}){

  const [title,setTitle] = useState('')

  const handleFormSubmit =(e)=>{
    e.preventDefault()
    onCreate(title)
  }
  const handleChange =(e)=>{
    setTitle(e.target.value)
  }

  return(
     <>
       <h1>
         Add a Book
       </h1>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange}/>
        <button>Create!</button>
      </form>
     </>
  )
}


export default BookCreate;
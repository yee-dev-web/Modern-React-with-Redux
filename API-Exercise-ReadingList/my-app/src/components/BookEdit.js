import {useState} from "react";

function BookEdit({book}) {
  const [title, setTitle] = useState(book.title)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('newTitle', title)
  }

  return (
      <form onSubmit={handleSubmit} className='book-edit'>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange}/>
        <button className='button is-primary'>
          Save
        </button>
      </form>)
}


export default BookEdit;
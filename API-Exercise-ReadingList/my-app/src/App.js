import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App(){

  const[books,setBooks] = useState([])
  const [count,setCount] =useState(1)

  const createBook= (title)=>{
      //BAD CODE!
   /* books.push({id:123,title:title})
    setBooks(books)*/

    const updatedBooks =[
        ...books,
      {id:count,title:title}
    ]

    console.log(books)
    setCount(count+1)
    setBooks(updatedBooks)

  };

  return(
      <>
        {books.length}
         <BookCreate onCreate={createBook}/>
      </>
  )
}


export default App;
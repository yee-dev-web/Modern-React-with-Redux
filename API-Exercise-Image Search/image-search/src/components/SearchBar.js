import {useState} from "react";

function  SearchBar({onSubmit}){

  const [term,setTerm] = useState('')

    const handleFormSubmit = (e) => {

        e.preventDefault()
        onSubmit(term)
    }

    const handleChange = (e) => {
      setTerm(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input placeholder='Enter' value={term} onChange={handleChange}/>
            </form>

        </div>
    );
}

export default SearchBar;
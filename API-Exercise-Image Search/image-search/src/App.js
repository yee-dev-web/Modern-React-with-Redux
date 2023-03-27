import SearchBar from "./components/SearchBar";

const handleSubmit = (term) =>{
    console.log('Do a search with',term)
};

function  App(){
    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
      </div>
    );
}

export default App;
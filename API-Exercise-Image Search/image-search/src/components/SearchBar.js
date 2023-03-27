function  SearchBar({onSubmit}){

    const handleFormSubmit = (e) => {

        e.preventDefault()
        onSubmit('cars')
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input/>
            </form>

        </div>
    );
}

export default SearchBar;
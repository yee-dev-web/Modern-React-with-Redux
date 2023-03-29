function BookShow({book, onDelete}) {
  const handleClick = () => {
    onDelete(book.id)
  }

  return (
      <div className='book-show'>
        Name: {book.title}
        <br/>
        Id: {book.id}
        <br/>
        <div className='actions'>
          <button className='delete' onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
  )
}


export default BookShow;
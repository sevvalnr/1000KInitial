import React, { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1", image: "book1.jpg" },
    { id: 2, title: "Book 2", author: "Author 2", image: "book2.jpg" },
    { id: 3, title: "Book 3", author: "Author 3", image: "book3.jpg" },
  ]);
  const [newBook, setNewBook] = useState({ title: "", author: "", image: "" });

  const addBook = () => {
    if (newBook.title && newBook.author && newBook.image) {
      setBooks([...books, { ...newBook, id: Date.now() }]);
      setNewBook({ title: "", author: "", image: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
    },
    booksContainer: {
      display: "flex",
      flexWrap: "wrap",
    },
    bookItem: {
      width: "25%",
      padding: "10px",
    },
    bookImage: {
      width: "100%",
      height: "auto",
      marginBottom: "10px",
    },
    button: {
      display: "block",
      margin: "0 auto",
    },
    clearfix: {
      clear: "both",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Books</h2>
      <div style={styles.booksContainer}>
        {books.map((book, index) => (
          <div key={book.id} style={styles.bookItem}>
            <img src={book.image} alt={book.title} style={styles.bookImage} />
            <p>
              <strong>{book.title}</strong> by {book.author}
            </p>
            <button style={styles.button} onClick={() => removeBook(book.id)}>
              Remove
            </button>
          </div>
      

        ))}
      </div>
      <div>
        <h3>Add New Book</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newBook.image}
          onChange={handleInputChange}
        />
        <button style={styles.button} onClick={addBook}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default Books;

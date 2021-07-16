import React, { useState } from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { getBookById } from './graphql/queries/book';
import './App.css';

//97d97d2d-87b6-4e81-97da-8a63a1f8ae9f
//f6233a70-8d5e-4f7b-af3e-3f8ea38efb9a
function App() {
  const [book, setBook] = useState(null);
  const getBook = async () => {
    const book = await API.graphql(graphqlOperation(getBookById, { id: "f6233a70-8d5e-4f7b-af3e-3f8ea38efb9a" }));
    setBook(book.data.getBookById);
  }

  const viewBook = () => {
    if (book) {
      return (
        <article>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.author}</p>
          <h4>${book.price}</h4>
        </article>
      )
    }
  }

  return (
    <div >
      <AmplifySignOut />
      <section className="book-section">
        <button onClick={() => getBook()}>Get a book</button>
        <hr />
        {viewBook()}
      </section>
    </div>
  );
}

export default withAuthenticator(App);

import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { getBookById } from "./graphql/queries/book";
import { onCreateTodo } from "./graphql/subscriptions/book";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

toast.configure();

function App() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (result) => {
        console.log(result);
        const newBook = result.value.data.onCreateBook;
        setBook(newBook);
        toast("New book added!");
        // Do something with the data
      }
    });
  }, []);

  const getBook = async () => {
    // make a call to appsync api
    const book = await API.graphql(
      graphqlOperation(getBookById, { id: "0d7385d5-a9c9-4571-a406-c003fac26193" })
    );

    // const book = await API.graphql({
    //   query: getBookById,
    //   variables: { id: "0d7385d5-a9c9-4571-a406-c003fac26193" },
    //   authMode: "AWS_IAM"
    // });

    setBook(book.data.getBookById);
  };

  const viewBook = () => {
    if (book) {
      return (
        <article>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.author}</p>
          <h4>{book.price}</h4>
        </article>
      );
    }
  };

  return (
    <div>
      <AmplifySignOut />
      <section className="book-section">
        <button onClick={() => getBook()}>Get book details</button>
        <hr />
        {viewBook()}
      </section>
    </div>
  );
}

export default withAuthenticator(App);

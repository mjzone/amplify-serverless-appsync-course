export const onCreateTodo = `
    subscription MySubscription {
      onCreateBook {
        author
        bookId
        createdAt
        description
        price
        title
        updatedAt
      }
    }
`;

export const getBookById = `
    query getBookById($id: ID!) {
        getBookById(bookId: $id) {
            bookId
            title
            description
            author
            price
        }
    } 
`
import {Book} from "../types/book.ts";

export type SortBy = "title" | "author";

const apiEndpoint: string = "https://localhost:7101";

export async function getAllBooks(sortby? : SortBy, searchString? : string) : Promise<Book[]> {
  let url = `${apiEndpoint}/books`;

  const params = new URLSearchParams();
  if (sortby) params.append("sortBy", sortby);
  if (searchString) params.append("searchString", searchString);

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

   return await response.json();
}

export async function getIndividualBook(isbn : string) : Promise<Book>{
  const response = await fetch(`${apiEndpoint}/books/${isbn}`)

  if(!response.ok){
    throw new Error("Failed to fetch the book")

  }
  return await response.json();
}

export async function addBook(book : Book){
  const response = await fetch(`${apiEndpoint}/books`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });

  if(!response.ok){
    throw new Error("Failed to add book")
  }

}

export async function updateBook(book: Book){
  const response = await fetch(`${apiEndpoint}/books/${book.isbn}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });

  if(!response.ok){
    throw new Error("Failed to update book")
  }

}

export async function deleteBook(isbn: string){
  const response = await fetch(`${apiEndpoint}/books/${isbn}`, {method: "DELETE"});

  if(!response.ok){
    throw new Error("Failed to delete book")
  }
}